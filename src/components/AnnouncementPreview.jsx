import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


function AnnouncementPreview({announcement})
{

    const [descriptPreview, setDescriptPreview] = useState("")
    const [titlePreview, setTitlePreview] = useState("")
    useEffect(()=>{
        setTitlePreview(announcement.title.toLowerCase().substring(0,20))
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
                        <Image alt=""src={princImage} fill alt="productImage" className="imagePreview"/>
                    </div>
                    <div className="announcInfo">
                        <h3 className="name darkGreen">{titlePreview}...</h3>
                        <p className="description">{
                            descriptPreview+"..."
                        }</p>
                        <div className="line">
                            <p className="lightGreen">{announcement.category}</p>
                            <div className="stars">
                                <div className="star">
                                    <Image alt=""src="yellowStar.svg" fill className="image"/>
                                </div>
                                <p>{announcement.stars}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            
        </div>
    );
}
export default AnnouncementPreview;