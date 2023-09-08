import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


function AnnouncementPreview({announcement})
{

    const [descriptPreview, setDescriptPreview] = useState("")
    useEffect(()=>{
        setDescriptPreview(announcement.description.toLowerCase().substring(0,90))
    },[])
    var princImage = announcement.images == undefined ? `/${announcement.category}.png` : announcement.images[0]
    const imagePreview = 
    {
      position: 'relative',
      width: '50%'
    }
    return(
        <div className="">
            <Link href={`/Announcement/?id=${announcement.id}`} >
                <div className="Preview">
                    <div className="imagePreview" style={imagePreview}>
                        <Image src={princImage} fill alt="productImage" className="imagePreview"/>
                    </div>
                    <div className="announcInfo">
                        <h3 className="name darkGreen">{announcement.title}</h3>
                        <p className="description">{
                            descriptPreview+"..."
                        }</p>
                        <div className="line">
                            <p className="lightGreen">{announcement.category}</p>
                            <div className="stars">
                                <div className="star">
                                    <Image src="yellowStar.svg" fill className="image"/>
                                </div>
                                <p>{announcement.stars}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            {announcement.id % 10 == 0 && 
                <button className="siteButton whappButton">
                    <a href="https://chat.whatsapp.com/EjRu8T8wrWq1HQ59rZm421">
                        Ingresa a nuestro grupo de WhatsApp
                    </a>
                </button>
            }
            
            
        </div>
    );
}
export default AnnouncementPreview;