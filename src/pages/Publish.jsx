import { useContext, useState } from "react";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import ReturnBar from "@/components/ReturnBar";
import Titlebar from "@/components/TitleBar";

function Publish ()
{
    const {Categories, setAnnouncements, announcements} = useContext(AnnouncementsContext);
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
    const[newAnn, setNewAnn] = useState("")

    function CreateAnnouncement() {
        var title = document.getElementById('AnnTitle')
        var description = document.getElementById('AnnDescription')
        var price = document.getElementById('AnnPrice')
        var currency = document.getElementById('AnnCurrency')
        var category = document.getElementById('AnnCategory')
        var phone = document.getElementById('AnnPhone')
        var name = document.getElementById('AnnName')


        const newAnnounc = {
            "id": announcements.length+1,
            "title": title.value,
            "description": description.value,
            "price": price.value,
            "currency": currency.value,
            "phone": phone.value,
            "name:": name.value,
            "category": category.value
        }

        setNewAnn(newAnnounc)
        
    }
    
    return(
        <div className="">
            <ReturnBar />
            <Titlebar icon={"edit.svg"} title={"Publica tu anuncio"} />

            <div className="publishForm">
                <form action="">
                    <p>Seleccione una categoria</p>
                    <select name="" id="AnnCategory"  required={true}>
                        {Categories.map((category)=>(
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </select>

                    <p>Provincia</p>
                    <select name="" id="" required={true}>
                        {Provinces.map((province)=>(
                            <option key={province} value={province}>{province}</option>
                        ))}
                    </select>

                    <p>Municipio</p>
                    <select name="" id=""  required={true}>
                        {Municipios.map((municipio)=>(
                            <option key={municipio} value={municipio}>{municipio}</option>
                        ))}
                    </select>
                    
                    <div className="money">
                        <div className="Price">
                            <p>Precio</p>
                            <input id="AnnPrice" type="number" placeholder="1100"/>
                        </div>
                        
                        <div className="Currency">
                            <p>Moneda</p>
                            <select name="currency" id="AnnCurrency" className="currencySelect"  required={true}>
                                <option value="USD">USD</option>
                                <option value="CUP">CUP</option>
                                <option value="MLC">MLC</option>
                            </select>
                        </div>
                    </div>

                    <p>Nombre</p>
                    <input  required={true} id="AnnName" className="phoneNumber" type="phone" placeholder="Nombre para contacto"/>
                    <p>Teléfono</p>
                    <input  required={true} id="AnnPhone" className="phoneNumber" type="phone" placeholder="Teléfono para contacto"/>


                    <p>Título</p>
                    <input  required={true} id="AnnTitle" type="text" placeholder="Título del anuncio"/>


                    <p>Descripcion</p>
                    <textarea  required={true} id="AnnDescription" name="descr" cols="45" rows="10" placeholder="Describe el producto o servicio que brindas"></textarea>
                            
                </form>
                    <button action="submit"  className="siteButton publishButton" onClick={()=>CreateAnnouncement()}>
                        <a href={`https://api.whatsapp.com/send?phone=+1305-709-0744&text=${newAnn}`}>
                            Publicar
                        </a>
                    </button>
            </div>
        </div>
    );
}
export default Publish;