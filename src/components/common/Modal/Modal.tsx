import React, {useState} from 'react';
import './Modal.css'

type ModalPropsType = {
    active: boolean
    setActive: (active: boolean) => void
    addPost: (titleValue: string, newText: string) => void
}

export const Modal = (props: ModalPropsType) => {

    const [titleValue, setTitleValue] = useState<string>('')
    const [newText, setNewText] = useState<string>('')

    const setActiveModal = () => props.setActive(!props.active)

    const onAddPost = (titleValue: string, newText: string) => {
        props.addPost(titleValue, newText)
        props.setActive(false)
    }

    return (
        <div className={props.active ? 'modal active' : 'modal'}
             onClick={setActiveModal}>
            <div className={props.active ? 'modal_content active' : 'modal_content'}
                 onClick={(e) => e.stopPropagation()}>
                <h2>
                    Write a new post:
                </h2>
                <div>
                    <input value={titleValue}
                           onChange={(e) => setTitleValue(e.currentTarget.value)}
                           placeholder={'Title'}
                           className="addNewTitle"/>
                </div>
                <div>
                <textarea value={newText}
                          onChange={(e) => setNewText(e.currentTarget.value)}
                          placeholder={'Your message'}
                          className="addNewText"/>
                </div>
                <div>
                    <button onClick={() => onAddPost(titleValue, newText)}
                            className="sendButton">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

