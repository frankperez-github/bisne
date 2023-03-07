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
    const[Id, setId] = useState(0)
    

    useEffect(()=>{
        setId((id > 0) ? announcements.length - id : id*(-1)-1)
        setDescriptArray(announcements[Id].description.split('\n'))
    },[])
        
    var princImage = announcements[Id] && (announcements[Id].images === undefined ? `/${announcements[Id].category}.png` : announcements[Id].images[0])
    
     
    return(
        announcements[Id] !== undefined &&
        

            <div className="Announcement">

            
            <ReturnBar />
            <div className="container">
                <div className="AnnouncementDetailedImages">
                    <Image className="image" src={princImage} alt="" fill/>
                </div>

                <h2 className="announcInfoLine">{announcements[Id].title}</h2>
                    {descrArray && descrArray.map(line =>(
                        <p key={line} className="announcInfoLine">{line}</p>
                    ))}

                <br/>
                <div className="contact">
                    <p className="announcInfoLine">Contacto: </p>
                    <a className="announcInfoLine" href={`tel:${announcements[Id].phone}`}>{announcements[Id].phone}</a>
                </div>

                <p className="price announcInfoLine">${announcements[Id].price} {announcements[Id].currency}</p>
            </div>
        </div>
    );
}
export default Announcement;