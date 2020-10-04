import React from "react";
import style from './modalStyle.module.css'

const Modal = ( { onOpenModal, onCloseModal, title, newsText, date } ) => (
    <div onClick={onCloseModal} className={style.div}>
        <h3>{title}</h3>
        <img className={style.img} src={onOpenModal} alt="" />
        <p>{newsText}</p>
        <span>{date}</span>
    </div>
)

export default Modal