import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../styles/ExceptionModal.css'

// 모달 컴포넌트
function ExceptionModal({ show, setShow, modalContent }) {
    const closeModalHandler = () => setShow(false)

    return (
        <Modal show={show} onHide={closeModalHandler} centered>
            <Modal.Header className='modal-header' closeButton>⚠️ 어머나 세상에나!</Modal.Header>
            <Modal.Body className='modal-body'>
                {modalContent}
            </Modal.Body>
        </Modal>
    )
}

export default ExceptionModal