import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import "./callCenter.css";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { FaCheckCircle } from "react-icons/fa";
import { showModal, hideModal, updateFormData, resetFormData } from '../../components/ReduxToolkit/ModalSlice';

function CallCenter() {
    const dispatch = useDispatch();
    const { showModal: show, formData } = useSelector((state) => state.modal);

    const [errors, setErrors] = useState({});
    const [successModal, setSuccessModal] = useState(false); 

    const handleClose = () => dispatch(hideModal());
    const handleShow = () => dispatch(showModal());

    const validateForm = () => {
        const newErrors = {};

        // Ismni tekshirish
        if (!formData.name || formData.name.length < 3) {
            newErrors.name = "Ism kamida 3 ta belgidan iborat bo'lishi kerak.";
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = "Ism faqat harflar va bo'shliqlardan iborat bo'lishi kerak.";
        }

        // Telefon raqamini tekshirish
        if (!formData.phone) {
            newErrors.phone = "Telefon raqamini kiritishingiz kerak.";
        } else if (!/^\+?\d{9,12}$/.test(formData.phone)) {
            newErrors.phone = "Telefon raqami 9-12 xonali bo'lishi kerak.";
        }

        // Kurs tanlanganligini tekshirish
        if (!formData.course || formData.course === 'Tanlang:') {
            newErrors.course = "Kurs tanlashingiz kerak.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        dispatch(updateFormData({ name: e.target.name, value: e.target.value }));
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        try {
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
                setSuccessModal(true);
                dispatch(resetFormData());
                dispatch(hideModal());
            } else {
                console.error('Xatolik yuz berdi!');
                alert('Xatolik yuz berdi, iltimos qayta urinib ko\'ring.');
            }
        } catch (error) {
            console.error('Xatolik yuz berdi!', error);
            alert('Server bilan bog\'lanishda muammo yuz berdi.');
        }
    };
    useEffect(() => {
        if (successModal) {
            // 5 soniyadan keyin modalni yopish
            const timer = setTimeout(() => {
                setSuccessModal(false);
            }, 5000);
            return () => clearTimeout(timer); // Tozalash
        }
    }, [successModal]);

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
                                required
                                minLength={3}
                                pattern='[A-Za-z]+'
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Telefon raqamingizni kiriting</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Telefon raqamingizni kiriting"
                                name="phone"
                                value={formData.phone}
                                required
                                pattern='[0-9]+'
                                onChange={handleInputChange}
                                isInvalid={!!errors.phone}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.phone}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Qiziqtirgan kursimizni tanlang:</Form.Label>
                            <Form.Select name="course"  // <---- Shu yerda name atributini qo'shing
                                value={formData.course} // <---- value ni formData'dan olishingiz kerak
                                onChange={handleInputChange}
                                isInvalid={!!errors.course}>
                                <option>Tanlang:</option>
                                <option value="frontend">FrontEnd</option>
                                <option value="backend">BackEnd</option>
                                <option value="Kompyutersavodxonlik">Kompyuter Savodxonligi</option>
                                <option value="Englishgrammar">English Grammar</option>
                                <option value="Englishkids">English Kids</option>
                                <option value="cefr">Cefr</option>
                                <option value="math">Math</option>
                                <option value="animatsiya">3D Animatsiya</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.course}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Jo'natish
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={successModal} onHide={() => setSuccessModal(false)} top>
                <Modal.Header>
                    <Modal.Title><FaCheckCircle className='checkIcons'/> Muvaffaqiyatli!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Ro'yhatga olindingiz, tez orada siz bilan bog'lanishadi.
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CallCenter;
