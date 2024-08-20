import React from 'react'
import "./features.css";
import Feature1 from "../../image/feature1.svg";
import Feature2 from "../../image/feature2.svg";
import Feature3 from "../../image/feature3.svg";
import Feature4 from "../../image/feature4.svg";
import Feature5 from "../../image/feature5.svg";
import Feature6 from "../../image/feature6.svg";
import Feature7 from "../../image/feature7.svg";

function Features() {
    return (
        <div className='features' id='process'>
            <h2 className='featuresTitle'>Shunchaki dasturlash kurslaridan ham yaxshiroq</h2>
            <div className='featureContents containerS'>
                <div className='featureContentItem'>
                    <div className='featureIcon'>
                        <img src={Feature1} alt="Feature1" />
                    </div>
                    <h4>Shunchaki kurs emas</h4>
                    <p>Kurslarimiz sizni zamonaviy kasbga o‘rgatib, muvaffaqiyatli faoliyat boshlashingizga yordam beradi.</p>
                </div>
                <div className='featureContentItem'>
                    <div className='featureIcon'>
                        <img src={Feature2} alt="Feature2" />
                    </div>
                    <h4>Interaktiv darslar</h4>
                    <p>Dars davomida savollaringizga mentorlar orqali javob va tavsiyalar olishingiz mumkin.</p>
                </div>
                <div className='featureContentItem'>
                    <div className='featureIcon'>
                        <img src={Feature3} alt="Feature3" />
                    </div>
                    <h4>Nazariya va amaliyot</h4>
                    <p>Siz har bir kursda berilgan topshiriqlarni amalga oshirish orqali bilimlaringizni yanada mustahkamlab borasiz.</p>
                </div>
                <div className='featureContentItem'>
                    <div className='featureIcon'>
                        <img src={Feature4} alt="Feature4" />
                    </div>
                    <h4>Sertifikat</h4>
                    <p>Kursni muvaffaqiyatli yakunlaganingizdan so‘ng sizga sertifikat taqdim etiladi. Sertifikat sizni bilimingizni oson ko’rsatib beruvchi isbot.</p>
                </div>
                <div className='featureContentItem'>
                    <div className='featureIcon'>
                        <img src={Feature5} alt="Feature5" />
                    </div>
                    <h4>O‘z ishining ustalari</h4>
                    <p>Darslar tajribali mutaxassislar tomonidan tayyorlangan, malakali o‘qituvchilardan chuqur bilim va tajriba olasiz.</p>
                </div>
                <div className='featureContentItem'>
                    <div className='featureIcon'>
                        <img src={Feature6} alt="Feature6" />
                    </div>
                    <h4>Mentor kerakmi?</h4>
                    <p>Dars davomida tug‘ilgan savollaringizni mentorlar bilan hal qilib, muammolarni yechishda yordam olasiz.</p>
                </div>
                <div className='featureContentItem'>
                    <div className='featureIcon'>
                        <img src={Feature7} alt="Feature7" />
                    </div>
                    <h4>Hammamiz insonmiz</h4>
                    <p>O‘qish davomida oldingi mavzularni takrorlash yoki mustahkamlash zarurati tug‘ilishi mumkin. Shu sababli, darslarni qayta ko‘rish imkoniyati mavjud.</p>
                </div>
            </div>
        </div>
    )
}

export default Features