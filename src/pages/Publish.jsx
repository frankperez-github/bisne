import { useContext } from "react";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import Menu from "@/components/Menu";
import ReturnBar from "@/components/ReturnBar";
import Titlebar from "@/components/TitleBar";

function Publish ()
{
    const {Categories} = useContext(AnnouncementsContext);
    const Provinces = [
        "Pinar del Río",
        "Artemisa",
        "La Habana",
        "Mayabeque",
        "Matanzas",
        "Villa Clara",
        "Cienfuegos",
        "Sancti Spíritus",
        "Ciego de Ávila",
        "Camagüey",
        "Las Tunas",
        "Holguín",
        "Granma",
        "Santiago de Cuba",
        "Guantánamo"
    ]
    const Municipios = [
        "Plaza de la Revolución",
        "Habana Vieja",
        "Centro Habana",
        "Diez de Octubre",
        "Cerro",
        "Arroyo Naranjo",
        "Boyeros",
        "Playa",
        "Marianao",
        "La Lisa",
        "Guanabacoa",
        "Regla",
        "Habana del Este",
        "San Miguel del Padrón",
        "Cotorro"
    ]
    
    return(
        <div className="">
            <ReturnBar />
            <Menu />

            <Titlebar icon={"edit.svg"} title={"Publica tu anuncio"} />

            <div className="publishForm">
                <form action="">
                    <p>Seleccione una categoria</p>
                    <select name="" id="">
                        {Categories.map((category)=>(
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </select>

                    <p>Provincia</p>
                    <select name="" id="">
                        {Provinces.map((province)=>(
                            <option key={province} value={province}>{province}</option>
                        ))}
                    </select>

                    <p>Municipio</p>
                    <select name="" id="">
                        {Municipios.map((municipio)=>(
                            <option key={municipio} value={municipio}>{municipio}</option>
                        ))}
                    </select>

                    <p>Precio</p>
                    <input type="text" placeholder="1100"/>

                    <p>Moneda</p>
                    <select name="currency" id="currency">
                        <option value="USD">USD</option>
                        <option value="CUP">CUP</option>
                        <option value="MLC">MLC</option>
                    </select>

                    <p>Título</p>
                    <input type="text" placeholder="Título del anuncio"/>

                    <p>Descripcion</p>
                    <textarea name="descr" id="descr" cols="45" rows="10">Describe el producto o servicio de brindas</textarea>
                </form>
            </div>
        </div>
    );
}
export default Publish;