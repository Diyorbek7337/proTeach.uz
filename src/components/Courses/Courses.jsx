import React from 'react'
import "./courses.css";
import Front from "../../image/frontend.webp"
import Back from "../../image/backend.webp"
import Savodxonlik from "../../image/savodxonlik.png"
import Grammar from "../../image/grammar.webp"
import Kids from "../../image/kids.webp"
import CEFR from "../../image/cefr.AVIF"
import Math from "../../image/math.jpg"
import Animation from "../../image/3d.png"
import Card from 'react-bootstrap/Card';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function Courses() {
    return (
        <div className='courses' id='courses'>
            <h2 className='coursesTitle'>O'quv kurslari</h2>
            <div className='containerS courseBox'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                >

                    <SwiperSlide>
                        <Card className='courseItem'>
                            <div className='cardImage'>
                                <Card.Img variant="top" src={Front} />
                            </div>
                            <Card.Body className='courseBody'>
                                <Card.Title>FrontEnd</Card.Title>
                                <Card.Text>
                                    Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, dizayn va o'zaro ta'sir qilish uchun HTML, CSS va JavaScript-dan foydalanish bilan bog'liq.
                                </Card.Text>
                                <div className='cardFeatures'>
                                    <div className='cardFeature'>
                                        <h4>Abdiqayumov D</h4>
                                        <p>FrontEnd</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>Davomiyligi</h4>
                                        <p>8 oy</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>1 oy</h4>
                                        <p>400 ming</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='courseItem'>
                            <div className='cardImage'>
                                <Card.Img variant="top" src={Back} />
                            </div>
                            <Card.Body className='courseBody'>
                                <Card.Title>BackEnd</Card.Title>
                                <Card.Text>
                                    Bu kurs server tomonida mustahkam ilovalar yaratish, ma’lumotlar bazalarini boshqarish, xavfsizlik va unumdorlikni saqlashga qaratilgan backend kursini qamrab oladi.
                                </Card.Text>
                                <div className='cardFeatures'>
                                    <div className='cardFeature'>
                                        <h4>Sobirov A</h4>
                                        <p>Backend</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>Davomiyligi</h4>
                                        <p>1 oy</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>8 oy</h4>
                                        <p>400 ming</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='courseItem'>
                            <div className='cardImage'>
                                <Card.Img variant="top" src={Savodxonlik} />
                            </div>
                            <Card.Body className='courseBody'>
                                <Card.Title>Kompyuter Savodxonligi</Card.Title>
                                <Card.Text>
                                    Asosiy kompyuter operatsiyalari, ilovalari va internetni tushunishni o'z ichiga oladi, texnologiyadan samarali foydalanish uchun muhim ko'nikmalarni qamrab oladi.
                                </Card.Text>
                                <div className='cardFeatures'>
                                    <div className='cardFeature'>
                                        <h4>Xolto'rayev M</h4>
                                        <p>Informatik</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>Davomiyligi</h4>
                                        <p>1 oy</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>1 oy</h4>
                                        <p>300 ming</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='courseItem'>
                            <div className='cardImage'>
                                <Card.Img variant="top" src={Grammar} />
                            </div>
                            <Card.Body className='courseBody'>
                                <Card.Title>English Grammar</Card.Title>
                                <Card.Text>
                                8-14 yoshdagi bolalarga mo'ljallangan kurs jumla tuzilishi, zamonlar va asosiy grammatik qoidalarni qiziqarli tarzda o'rgatadi.
                                </Card.Text>
                                <div className='cardFeatures'>
                                    <div className='cardFeature'>
                                        <h4>Tursunova N</h4>
                                        <p>English Teacher</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>Davomiyligi</h4>
                                        <p>8 oy</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>1 oy</h4>
                                        <p>200 ming</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='courseItem'>
                            <div className='cardImage'>
                                <Card.Img variant="top" src={Kids} />
                            </div>
                            <Card.Body className='courseBody'>
                                <Card.Title>English Kids</Card.Title>
                                <Card.Text>
                                Ingliz tilini bolalarga o'yinlar va interaktiv mashqlar orqali o'rgatamiz. Qiziqarli, samarali va rivojlantiruvchi ta'lim beramiz.
                                </Card.Text>
                                <div className='cardFeatures'>
                                    <div className='cardFeature'>
                                        <h4>Tursunova Sh</h4>
                                        <p>English Teacher</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>Davomiyligi</h4>
                                        <p>8 oy</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>1 oy</h4>
                                        <p>200 ming</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='courseItem'>
                            <div className='cardImage'>
                                <Card.Img variant="top" src={CEFR} />
                            </div>
                            <Card.Body className='courseBody'>
                                <Card.Title>CEFR</Card.Title>
                                <Card.Text>
                                CEFR kursimiz orqali ingliz tilini mukammal o'rganing. Har bir bo'lim uchun tayyorgarlik, malakali o'qituvchilar, amaliy mashqlar va yangi bilimlar oling.
                                </Card.Text>
                                <div className='cardFeatures'>
                                    <div className='cardFeature'>
                                        <h4>Tursunova S</h4>
                                        <p>English Teacher</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>Davomiyligi</h4>
                                        <p>9 oy</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>1 oy</h4>
                                        <p>250 ming</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='courseItem'>
                            <div className='cardImage'>
                                <Card.Img variant="top" src={Math} />
                            </div>
                            <Card.Body className='courseBody'>
                                <Card.Title>Matematika</Card.Title>
                                <Card.Text>
                                Matematika kursimiz orqali murakkab masalalarni oson yeching. Qiziqarli darslar, malakali o'qituvchilar, va amaliy mashqlar bilan bilimlarni mustahkamlang.
                                </Card.Text>
                                <div className='cardFeatures'>
                                    <div className='cardFeature'>
                                        <h4>Abdug'aniyeva A</h4>
                                        <p>Math Teacher</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>Davomiyligi</h4>
                                        <p>9 oy</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>1 oy</h4>
                                        <p>200 ming</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='courseItem'>
                            <div className='cardImage'>
                                <Card.Img variant="top" src={Animation} />
                            </div>
                            <Card.Body className='courseBody'>
                                <Card.Title>3D Animatsiya</Card.Title>
                                <Card.Text>
                                Kurs 3D dunyosining asoslaridan ilg‘or texnikalargacha o‘rgatadi. Siz 3D modellashtirish, animatsiya, teksturalash, yorug‘lik va renderingni o‘rganasiz. Tajribali mutaxassislar darslarini professional bilim va ko‘nikmalarni rivojlantirish uchun olib boradi.
                                </Card.Text>
                                <div className='cardFeatures'>
                                    <div className='cardFeature'>
                                        <h4>Abror</h4>
                                        <p>Animator</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>Davomiyligi</h4>
                                        <p>8 oy</p>
                                    </div>
                                    <div className='cardFeature'>
                                        <h4>1 oy</h4>
                                        <p>400 ming</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Courses