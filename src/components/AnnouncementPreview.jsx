import Image from "next/image";

function AnnouncementPreview()
{
    return(
        <div className="Preview">
            <div className="imagePreview">
                <Image className="image" src="/announcPreview.png" fill/>
            </div>
            <div className="annoncInfo">
                <h3 className="name">name</h3>
                <p className="description">description</p>
                <p className="price">$100 USD</p>
            </div>
        </div>
    );
}
export default AnnouncementPreview;