import Image from "next/image";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext, useEffect, useState } from "react";
import ReturnBar from "@/components/ReturnBar";
import { useNavigation } from "react-router";
import { useRouter } from "next/router";

function Announcement()
{
    const router = useRouter()
    const {fixed, announcements, currAnnouncement} = useContext(AnnouncementsContext)
    const id = currAnnouncement.id
    const {queryId} = router.query
    const[descrArray, setDescriptArray] = useState([])
    const[Announcement, setAnnouncement] = useState(currAnnouncement)
    var Id = (id > 0) ? (announcements.length - id+fixed()) : (id*(-1)-1)
    
    useEffect(()=>{
        // Id = (queryId > 0) ? (announcements.length - queryId+fixed()) : (queryId*(-1)-1);
        // setAnnouncement(announcements[Id])
        // console.log(queryId)
        setDescriptArray(Announcement.description.split('\n'))
    },[])
        
    var princImage = Announcement && (Announcement.images === undefined ? `/${Announcement.category}.png` : Announcement.images[0])
    
     
    return(
        Announcement !== undefined &&
        

        <div className="Announcement">

            <ReturnBar />

            <div className="container">
                
                <div className="AnnouncementDetailedImages">
                    <Image className="image" src={princImage} alt="" fill/>
                </div>

                <h2 className="announcInfoLine">{Announcement.title}</h2>
                    {descrArray && descrArray.map(line =>(
                        <p key={line} className="announcInfoLine">{line}</p>
                    ))}

                <br/>
                <div className="contact">
                    <p className="announcInfoLine">Contacto: </p>
                    <a className="announcInfoLine" href={`https://wa.me/${ Announcement.phone.length == 8 ? "+53"+Announcement.phone :Announcement.phone}`}>{Announcement.phone}</a>
                </div>

                <p className="price announcInfoLine">${Announcement.price} {Announcement.currency}</p>
           
            </div>

        </div>
    );
}
export default Announcement;