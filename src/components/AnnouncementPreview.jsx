
function AnnouncementPreview({announcement})
{
    const imagePreview = 
    {
      backgroundImage: `url(${announcement.previewImage})`,
      backgroundColor: `rgb(117, 117, 250)`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      width: '40%'
    }
    return(
        <div className="Preview">
            <div className="imagePreview" style={imagePreview}>
            </div>
            <div className="annoncInfo">
                <h3 className="name">{announcement.name}</h3>
                <p className="description">{announcement.description}</p>
                <p className="price">$ {announcement.price} {announcement.currency}</p>
            </div>
        </div>
    );
}
export default AnnouncementPreview;