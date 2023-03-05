import Link from "next/link";

function AnnouncementPreview({announcement})
{
    const imagePreview = 
    {
      backgroundImage: `url(${announcement.images[0]})`,
      backgroundColor: `rgb(117, 117, 250)`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      width: '40%'
    }
    return(
        <div className="">
            <Link href={`/Announcement/?id=${announcement.id}`}>
            <div className="Preview">
                    <div className="imagePreview" style={imagePreview}>
                    </div>
                    <div className="announcInfo">
                        <h3 className="name">{announcement.title}</h3>
                        <p className="description">{announcement.description}</p>
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