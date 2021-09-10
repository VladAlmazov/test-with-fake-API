import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

type CompanyType = {
    name: string
    catchPhrase: string
    bs: string
}

type GeoType = {
    lat: string
    lng: string
}

type AddressType = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: GeoType
}

export type UsersDataType = {
    id: number
    name: string
    username: string
    email: string
    address: AddressType
    phone: string
    website: string
    company: CompanyType
}

type ActionsType = setUsersAT

export type setUsersAT = ReturnType<typeof setUsersAC>

let initialState: Array<UsersDataType> = []

export const usersReducer = (state: Array<UsersDataType> = initialState, action: ActionsType): Array<UsersDataType> => {
    switch (action.type) {
        case 'SET-USERS': {
            return action.users.map(u => {
                return {...u}
            })
        }
        default:
            return state
    }
}

const setUsersAC = (users: Array<UsersDataType>) => {
    return {type: 'SET-USERS', users} as const
}

export const getUsersTC = () => (dispatch: Dispatch) => {
    usersAPI.getUsers().then(res => {
        console.log(res.data)
        dispatch(setUsersAC(res.data))
    });
}