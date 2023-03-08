import Image from "next/image";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext, useEffect, useState } from "react";
import ReturnBar from "@/components/ReturnBar";
import { useRouter } from "next/router";

function Announcement({context})
{
    const router = useRouter()
    const {fixed, announcements, currAnnouncement} = useContext(AnnouncementsContext)
    const id = currAnnouncement.id
    const[descrArray, setDescriptArray] = useState([])
    const {queryId} = router.query
    const[Announcement, setAnnouncement] = useState(currAnnouncement)
    var Id = (id > 0) ? (announcements.length - id+fixed()) : (id*(-1)-1)
    
    useEffect(()=>{
        console.log(queryId)
        Id = (queryId > 0) ? (announcements.length - queryId+fixed()) : (queryId*(-1)-1);
        setAnnouncement(announcements[Id])
        setDescriptArray(currAnnouncement.description.split('\n'))
    },[])
        
    var princImage = currAnnouncement && (currAnnouncement.images === undefined ? `/${currAnnouncement.category}.png` : currAnnouncement.images[0])
    
     
    return(
        currAnnouncement !== undefined &&
        

        <div className="currAnnouncement">

            <ReturnBar />

            <div className="container">
                
                <div className="currAnnouncementDetailedImages">
                    <Image className="image" src={princImage} alt="" fill/>
                </div>

                <h2 className="announcInfoLine">{currAnnouncement.title}</h2>
                    {descrArray && descrArray.map(line =>(
                        <p key={line} className="announcInfoLine">{line}</p>
                    ))}

                <br/>
                <div className="contact">
                    <p className="announcInfoLine">Contacto: </p>
                    <a className="announcInfoLine" href={`https://wa.me/${ currAnnouncement.phone.length == 8 ? "+53"+currAnnouncement.phone :currAnnouncement.phone}`}>{currAnnouncement.phone}</a>
                </div>

                <p className="price announcInfoLine">${currAnnouncement.price} {currAnnouncement.currency}</p>
           
            </div>

        </div>
    );
}

export default Announcement;