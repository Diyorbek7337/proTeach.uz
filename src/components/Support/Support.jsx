import React from 'react';
import './support.css';
import Support1 from "../../image/suppoer1.svg"
import Support2 from "../../image/suppoer2.svg"
import ChannelImage from "../../image/channel.svg"
import { MdArrowOutward } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../../components/ReduxToolkit/ModalSlice';
import CallCenter from '../CallCenter/CallCenter';

function Support() {

    const dispatch = useDispatch();
    const { showModal: show } = useSelector((state) => state.modal);

    const handleShow = () => dispatch(showModal());


    return (
        <div className='support'>
            <div className='containerS supportWrapper'>
                <div className='supportItem'>
                    <div className='supportImage'>
                        <img src={Support1} alt="Support1" />
                    </div>
                    <div className='supportText'>
                        <h2 className='supportTitle'>Yordam va maslahatlar</h2>
                        <p>Ustoz doimo yoningizda bo'ladi - u qiyinchiliklarni yengishga yordam beradi va kod nima uchun siz xohlaganingizdek ishlamayotganini tushuntirib beradi.</p>
                        <p>Kod ko'rib chiquvchi esa sizni kodni professional darajada yozishga o'rgatadi: ixcham, toza va tushunarli. Ba'zida siz uni sevib qolasiz, ba'zida esa talabchanligi uchun undan nafratlanishingiz mumkin :)</p>
                    </div>
                </div>
                <div className='supportItem reverseItem'>
                    <div className='supportText'>
                        <h2 className='supportTitle'>Natijaga intilamiz</h2>
                        <p>Biz boshqa kurslar kabi talabalar bilan muloqot qilish vaqtini cheklamaymiz. Agar siz materialni tushunishda yoki kod yozishda qiyinchiliklarga duch kelsangiz, ustoz va kod ko‘rib chiquvchi sizga oxirigacha tushuntirishga yordam beradi va bu qancha vaqt talab qilsa ham muhim emas. Bizning maqsadimiz - sizni shu kasbning malakali mutaxassisi bo'lish uchun zarur bo‘lgan to‘liq ko‘nikmalar bilan ta’minlashdir.</p>
                    </div>
                    <div className='supportImage'>
                        <img src={Support2} alt="Support2" />
                    </div>
                </div>
                <div className='supportChannel'>
                    <div className='supportChannelImage'>
                        <img src={ChannelImage} alt="ChannelImage" />
                    </div>
                    <div className='supportChannelText'>
                        Barcha mavzular qat'iy ravishda ketma-ketlikda o'tiladi. Hech bir mavzuni o'tkazib yuborish yoki o'rganishni o'rtasidan boshlash mumkin emas. Faqat shu yo‘l bilan biz sizga o‘quv dasturida ko‘zda tutilgan barcha bilimlarni yetkazib berishni ta'minlay olamiz.
                    </div>
                    <div className='supportChannelButton'>
                        <button type='button' className='startLearn' onClick={handleShow}>Ro'yhatdan o'ting <MdArrowOutward /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support