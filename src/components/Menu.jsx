import AnnouncementsContext from "@/context/AnnouncementsContext";
import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";

function Menu() 
{
    const{setMenu, menu} = useContext(AnnouncementsContext);
    return(
        
        menu && 
        <div className="SideMenu">
            <div className="blurBack" onClick={()=>setMenu(false)}></div>

            <div className="menu">
                <div className="row">
                    <Image onClick={()=>setMenu(false)} alt="" src="backArrow.svg" width={20} height={20} />
                </div>
                <Link href="/Categories" className="row" onClick={()=>setMenu(false)}>
                    <Image  src="cart.svg" alt="" width={20} height={20} />
                    <p>Categorias</p>
                </Link>
                <Link href="https://www.addtoany.com/share" className="row" onClick={()=>(setMenu(false), navigator.share("www.google.com"))}>
                    <Image  src="star.svg" alt="" width={20} height={20} />
                    <p>Invitar amigos</p>
                </Link >
                <Link href="/Publish" className="row" onClick={()=>setMenu(false)}>
                    <Image  src="edit.svg" alt="" width={20} height={20} />
                    <p>Publicar anuncio</p>
                </Link>
                <Link href="/Terms&Conditions" className="row" onClick={()=>setMenu(false)}>
                    <Image  src="paper.svg" alt="" width={20} height={20} />
                    <p>Condiciones de uso</p>
                </Link>
                <Link href="/ContactTeam" className="row" onClick={()=>setMenu(false)}>
                    <Image  src="person.svg" alt="" width={20} height={20} />
                    <p>Contactar desarrolladores</p>
                </Link>
                <Link href="Promotion" className="row" onClick={()=>setMenu(false)}>
                    <Image  src="stonks.svg" alt="" width={20} height={20} />
                    <p>Promocionarse</p>
                </Link>

            </div>
        </div>
        
    );
}
export default Menu;