import Image from "next/image";
import Link from "next/link";
import Context from "@/context/Context";
import { useContext } from "react";

function Header ()
{
    const {setMenu} = useContext(Context);
    return(
        <div className="Header">
            <Link href="/" className="nameAndLogo">
                <div className="logo">
                    <Image className="image" src="/lupa.svg" alt="logo" fill/>
                </div>
                <h1>El Bisne</h1>
            </Link>
            
            <div className="searchAndBurger">
                <Link href="/Search" className="lupa">
                    <Image className="image"  src="/lupa.svg" alt="lupa" fill/>
                </Link>
                <div href=""className="burger" onClick={()=>setMenu(true)}>
                    <Image className="image"  src="/more.svg" alt="burger" fill/>
                </div>
            </div>
        </div>
    );
}
export default Header;