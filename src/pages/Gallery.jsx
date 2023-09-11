import Announcemnts from "../Announcements.json";
import Image from 'next/image'
import AnnouncementPreview from "@/components/AnnouncementPreview";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

function Gallery() {
    
    const { announcements, promotions } = useContext(AnnouncementsContext);
    
    return(
        <div className="">
            <Menu />
            <Header />
            <div className="PromotionSlides">
            <Swiper slidesPerView={1} pagination={true} loop={true} autoplay={{ delay: 5000 }} modules={[Pagination, Autoplay]} className="mySwiper">
                    {promotions.map((promoImg) => (
                        <SwiperSlide key={promoImg} className="slide">
                            <Image alt='promo' src={promoImg} fill/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {
                announcements.map((announc, index) => {
                    if (index === 3)
                    {
                        return(
                            <button key={index+"leftButton"} className="leftButton mediumButton">
                                <div className="buttonImage">
                                    <Image alt="" src="yellowStar.svg" fill  sizes=""className="image"/>
                                </div>
                                <a href="https://chat.whatsapp.com/EjRu8T8wrWq1HQ59rZm421">
                                    Los más populares
                                </a>
                            </button>
                        )
                    }
                    if (index===7) {
                        return(
                            <button key={index+"righButton"} className="rightButton mediumButton">
                                <div className="buttonImage">
                                    <Image alt="" src="message.svg" fill  sizes=""className="image"/>
                                </div>
                                <a href="https://chat.whatsapp.com/EjRu8T8wrWq1HQ59rZm421">
                                    Unirme al grupo
                                </a>
                            </button>
                        )   
                    }
                    return(
                        <AnnouncementPreview key={announc.id} announcement={announc}/>
                    )
                })
            }
        </div>
    );
}
export default Gallery;