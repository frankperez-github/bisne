import Announcemnts from "../Announcements.json";
import Image from 'next/image'
import AnnouncementPreview from "@/components/AnnouncementPreview";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext, useEffect } from "react";
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
            <Swiper pagination={true} loop={true} autoplay={{ delay: 5000 }} modules={[Pagination, Autoplay]} className="mySwiper">
                    {promotions.map((promoImg) => (
                        <SwiperSlide key={promoImg} className="slide">
                            <Image alt='promo' src={promoImg} fill/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {
                announcements.map((announc) => (
                    <AnnouncementPreview key={announc.id} announcement={announc}/>
                ))
            }
        </div>
    );
}
export default Gallery;