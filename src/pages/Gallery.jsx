import AnnouncementPreview from "@/components/AnnouncementPreview";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext } from "react";

function Gallery() {
    
    const { announcements } = useContext(AnnouncementsContext);

    return(
        <div className="">
            <Menu />
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