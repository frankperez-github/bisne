import Menu from "@/components/Menu";
import ReturnBar from "@/components/ReturnBar";
import Titlebar from "@/components/TitleBar";
import { useContext } from "react";
import AnnouncementsContext from "@/context/AnnouncementsContext";


function Categories ()
{
    const {menuIcons} = useContext(AnnouncementsContext);
    return(
        <div className="Categories">
            <ReturnBar />
            <Menu />
            <Titlebar icon={menuIcons[0]} title={"Categorias"}/> 
        </div>
    );
}
export default Categories;