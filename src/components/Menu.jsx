import AnnouncementsContext from "@/context/AnnouncementsContext";
import Image from "next/image";
import { useContext } from "react";

function Menu() 
{
    const{setMenu, menu} = useContext(AnnouncementsContext);
    return(
        
        menu && 
        <div className="SideMenu">
            <div className="blurBack" onClick={()=>setMenu(false)}></div>

            <div className="menu">
                <div className="row">
                    <Image onClick={()=>setMenu(false)} src="backArrow.svg" width={20} height={20} />
                </div>
                <a className="row">
                    <Image  src="cart.svg" width={20} height={20} />
                    <p>Categorias</p>
                </a>
                <a className="row">
                    <Image  src="star.svg" width={20} height={20} />
                    <p>Invitar amigos</p>
                </a>
                <a className="row">
                    <Image  src="edit.svg" width={20} height={20} />
                    <p>Publicar anuncio</p>
                </a>
                <a className="row">
                    <Image  src="paper.svg" width={20} height={20} />
                    <p>Condiciones de uso</p>
                </a>
                <a className="row">
                    <Image  src="person.svg" width={20} height={20} />
                    <p>Contactar desarrolladores</p>
                </a>
                <a className="row">
                    <Image  src="stonks.svg" width={20} height={20} />
                    <p>Promocionarse</p>
                </a>

            </div>
        </div>
        
    );
}
export default Menu;