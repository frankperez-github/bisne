import Image from "next/image";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext, useEffect, useState } from "react";
import ReturnBar from "@/components/ReturnBar";
import { useRouter } from "next/router";

function Announcement()
{
    const router = useRouter()
    const { id } = router.query
    const {fixed, announcements} = useContext(AnnouncementsContext)
    const [descrArray, setDescrArray] = useState([])
    
    // Negative id means fixed announcement
    const Id = (id > 0) ? (fixed()-1 + announcements.length -id+1 - fixed()) : (id*(-1)-1);
    
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
                    <Image alt=""className="image" src={princImage} alt="" fill/>
                </div>

                <h2 className="announcInfoLine">{announcements[Id].title}</h2>
                    {descrArray && descrArray.map(line =>(
                        <p key={line} className="announcInfoLine">{line}</p>
                    ))}

                <br/>
                <div className="">
                    <p className="announcInfoLine">Nombre: {announcements[Id].name}</p>
                </div>
                <div className="contact">
                    <p className="announcInfoLine">Teléfono: </p>
                    <a className="announcInfoLine" href={`https://wa.me/${ announcements[Id].phone.length == 8 ? "+53"+announcements[Id].phone :announcements[Id].phone}`}>{announcements[Id].phone}</a>
                </div>

                <p className="price announcInfoLine">${announcements[Id].price} {announcements[Id].currency}</p>
           
            </div>

        </div>
    );
}

export default Announcement;