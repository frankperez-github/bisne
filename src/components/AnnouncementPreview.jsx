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
    );
}
export default AnnouncementPreview;