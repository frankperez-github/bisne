import Image from "next/image";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext, useEffect, useState } from "react";
import ReturnBar from "@/components/ReturnBar";
import { useRouter } from "next/router";
import { useSearchParams } from "react-router-dom";

function Announcement()
{
    const router = useRouter()
    const {fixed, announcements} = useContext(AnnouncementsContext)
    const { id } = router.query
    const [descrArray, setDescrArray] = useState([])
    const Id = (id > 0) ? (announcements.length - id+fixed()-1) : (id*(-1)-1);
    
    useEffect(()=>{
        if(!id)
        {
            return
        }
        setDescrArray(announcements[Id].description.split('\n'))
    },[])
        
    var princImage = announcements[Id] && (announcements[Id].images === undefined ? `/${announcements[Id].category}.png` : announcements[Id].images[0])
    
     
    return(
        announcements[Id] !== undefined &&
        

        <div className="announcements[Id]">

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
                    <a className="announcInfoLine" href={`https://wa.me/${ announcements[Id].phone.length == 8 ? "+53"+announcements[Id].phone :announcements[Id].phone}`}>{announcements[Id].phone}</a>
                </div>

                <p className="price announcInfoLine">${announcements[Id].price} {announcements[Id].currency}</p>
           
            </div>

        </div>
    );
}

export default Announcement;