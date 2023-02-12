import Image from "next/image";
import Link from "next/link";

function Header ()
{
    return(
        <div className="Header">
            <Link href="/" className="nameAndLogo">
                <div className="logo">
                    <Image className="image" src="/lupa.svg" alt="logo" fill/>
                </div>
                <h1>El Bisne</h1>
            </Link>
            
            <div className="searchAndBurger">
                <a href="" className="lupa">
                    <Image className="image"  src="/lupa.svg" alt="lupa" fill/>
                </a>
                <a href=""className="burger">
                    <Image className="image"  src="/more.svg" alt="burger" fill/>
                </a>
            </div>
        </div>
    );
}
export default Header;