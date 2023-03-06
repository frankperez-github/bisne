import Image from "next/image";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReturnBar from "@/components/ReturnBar";

function Announcement()
{
    const {announcements} = useContext(AnnouncementsContext)
    const router = useRouter()
    const {id} = router.query
    const[Announcement, setAnnouncement] = useState(announcements[id-1]);
    const[descrArray, setDescriptArray] = useState([])
    useEffect(()=>(
        setAnnouncement(announcements[id-1]),
        setDescriptArray(announcements[id-1].description.split('\n'))
    ),[])
        
        var princImage = Announcement.images == undefined ? `/${Announcement.category}.png` : Announcement.images[0]
        
    return(
        Announcement !== undefined &&
        

            <div className="Announcement">

            
            <ReturnBar />
            <div className="container">
                <div className="AnnouncementDetailedImages">
                    <Image className="image" src={princImage} alt="" fill/>
                </div>

                <h2 className="announcInfoLine">{Announcement.name}</h2>
                    { descrArray && descrArray.map(line =>(
                        <p key={line} className="announcInfoLine">{line}</p>
                    ))}

                <br/>
                <div className="contact">
                    <p className="announcInfoLine">Contacto: </p>
                    <a className="announcInfoLine" href={`tel:${Announcement.phone}`}>{Announcement.phone}</a>
                </div>

                <p className="price announcInfoLine">${Announcement.price} {Announcement.currency}</p>
            </div>
        </div>
    );
}
export default Announcement;