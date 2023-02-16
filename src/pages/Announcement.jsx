import Link from "next/link";
import Image from "next/image";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import ReturnBar from "@/components/ReturnBar";
import Menu from "@/components/Menu";

function Announcement()
{
    const {announcements} = useContext(AnnouncementsContext)
    const router = useRouter()
    const {id} = router.query
    var Announcement = announcements[id-1];

    return(
        <div className="Announcement">
            <ReturnBar />
            <Menu />
            <div className="container">
                <div className="AnnouncementDetailedImages">
                    <Image className="image" src={Announcement.images[0]} alt="" fill/>
                </div>

                <h2 className="announcInfoLine">{Announcement.name}</h2>
                
                <p className="announcInfoLine">{Announcement.description}</p>

                <a className="announcInfoLine" href={`tel:${Announcement.phone}`}>Contacto: {Announcement.phone}</a>

                <p className="price announcInfoLine">${Announcement.price} {Announcement.currency}</p>
            </div>
        </div>
    );
}
export default Announcement;