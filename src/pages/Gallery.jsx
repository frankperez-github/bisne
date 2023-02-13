import AnnouncementPreview from "@/components/AnnouncementPreview";
import Header from "@/components/Header";
import Context from "@/context/Context";
import { useContext } from "react";

function Gallery() {
    const {announcements} = useContext(Context);
    return(
        <div className="">
            <Header />
            {
                announcements.map((announc) => (
                    <AnnouncementPreview key={announc.id} announcement={announc}/>
                ))
            }
        </div>
    );
}
export default Gallery;