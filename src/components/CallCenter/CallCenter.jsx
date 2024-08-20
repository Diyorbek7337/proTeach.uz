import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { showModal, hideModal, updateFormData, resetFormData } from '../../components/ReduxToolkit/ModalSlice';

function CallCenter() {
    const dispatch = useDispatch();
    const { showModal: show, formData } = useSelector((state) => state.modal);

    const handleClose = () => dispatch(hideModal());
    const handleShow = () => dispatch(showModal());

    const handleInputChange = (e) => {
        dispatch(updateFormData({ name: e.target.name, value: e.target.value }));
    };

    const handleSubmit = async () => {
       // Telegram botga ma'lumotlarni yuborish
        const response = await fetch(`https://api.telegram.org/bot7528888297:AAEwj1CMuZzq_fJox8e5MhQ9BIyuoVa83gs/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: '-1002245697817',
                text: `Ism: ${formData.name}\nTelefon: ${formData.phone}\nKurs: ${formData.course}`,
            }),
        });

        if (response.ok) {
            dispatch(resetFormData());
            dispatch(hideModal());
        } else {
            console.error('Xatolik yuz berdi!');
        }
        console.log(formData);
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ro'yhatdan o'tish</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Ism-Familiyangiz</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ism-Familiyangizni kiriting"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Telefon raqamingizni kiriting</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Telefon raqamingizni kiriting"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Qiziqtirgan kursimizni tanlang:</Form.Label>
                            <Form.Select name="course"  // <---- Shu yerda name atributini qo'shing
                                value={formData.course} // <---- value ni formData'dan olishingiz kerak
                                onChange={handleInputChange}>
                                <option>Tanlang:</option>
                                <option value="frontend">FrontEnd</option>
                                <option value="backend">BackEnd</option>
                                <option value="Kompyutersavodxonlik">Kompyuter Savodxonligi</option>
                                <option value="Englishgrammar">English Grammar</option>
                                <option value="Englishkids">English Kids</option>
                                <option value="cefr">Cefr</option>
                                <option value="math">Math</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Jo'natish
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CallCenter;
