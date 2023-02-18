import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import Menu from "./Menu";

function ReturnBar ()
{
    const { setMenu } = useContext(AnnouncementsContext);

    return(
        <div className="Header">
            <Menu />
            <Link href="/" className="nameAndLogo">
                <div className="logo">
                    <Image className="image" src="/backArrow.svg" alt="logo" fill/>
                </div>
                <p>Regresar al inicio</p>
            </Link>
            
            <div className="searchAndBurger">
                <div className="burger" onClick={()=>setMenu(true)}>
                    <Image className="image"  src="/more.svg" alt="burger" fill/>
                </div>
            </div>
        </div>
    );
}
export default ReturnBar;