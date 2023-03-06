import Link from "next/link";
import Image from "next/image";

function AnnouncementPreview({announcement})
{
    var princImage = announcement.images == undefined ? `/${announcement.category}.png` : announcement.images[0]
    const imagePreview = 
    {
      position: 'relative',
      width: '50%'
    }
    return(
        <div className="">
            <Link href={`/Announcement/?id=${announcement.id}`}>
            <div className="Preview">
                    <div className="imagePreview" style={imagePreview}>
                        <Image src={princImage} fill alt="productImage"/>
                    </div>
                    <div className="announcInfo">
                        <h3 className="name">{announcement.title.substr(0, 20)+"..."}</h3>
                        <p className="description">{
                            announcement.description.substr(0, 100)+"..."
                        }</p>
                        <p className="price">$ {announcement.price} {announcement.currency}</p>
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