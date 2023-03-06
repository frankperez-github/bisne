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
    const[descrArray, setDescriptArray] = useState([])
    useEffect(()=>(
        setDescriptArray(announcements[id-1].description.split('\n'))
    ),[])
        
        var princImage = announcements[id-1].images == undefined ? `/${announcements[id-1].category}.png` : announcements[id-1].images[0]
        
    return(
        announcements[id-1] !== undefined &&
        

            <div className="Announcement">

            
            <ReturnBar />
            <div className="container">
                <div className="AnnouncementDetailedImages">
                    <Image className="image" src={princImage} alt="" fill/>
                </div>

                <h2 className="announcInfoLine">{announcements[id-1].name}</h2>
                    { descrArray && descrArray.map(line =>(
                        <p key={line} className="announcInfoLine">{line}</p>
                    ))}

                <br/>
                <div className="contact">
                    <p className="announcInfoLine">Contacto: </p>
                    <a className="announcInfoLine" href={`tel:${announcements[id-1].phone}`}>{announcements[id-1].phone}</a>
                </div>

                <p className="price announcInfoLine">${announcements[id-1].price} {announcements[id-1].currency}</p>
            </div>
        </div>
    );
}
export default Announcement;