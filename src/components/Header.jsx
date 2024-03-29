import Image from "next/image";
import Link from "next/link";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext } from "react";


function Header ()
{
    const { setMenu } = useContext(AnnouncementsContext);
    
    return(
        <div className="Header">
            <Link href="/" className="nameAndLogo">
                <div className="logo">
                    <Image alt=""className="image" src="/logo.svg" alt="logo" fill/>
                </div>
            </Link>
            
            <div className="searchAndBurger">
                <Link href="/Search" className="lupa">
                    <Image alt=""className="image"  src="/lupa.svg" alt="lupa" fill/>
                </Link>
                <div className="burger" onClick={()=>setMenu(true)}>
                    <Image alt=""className="image"  src="/more.svg" alt="burger" fill/>
                </div>
                <Link href="/Publish" className="floatingButton">
                    <Image alt=""className="image"  src="/floatingButton.svg" alt="burger" fill/>
                </Link>
            </div>

            
        </div>
    );
}
export default Header;