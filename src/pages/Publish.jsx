import { useContext, useEffect, useState } from "react";
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

    var newAnn = {}
    
    function CreateAnnouncement() {
        
        var title = document.getElementById('AnnTitle').value
        var description  = document.getElementById('AnnDescription').value
        var price = document.getElementById('AnnPrice').value
        var currency  = document.getElementById('AnnCurrency').value
        var category  = document.getElementById('AnnCategory').value
        var phone = document.getElementById('AnnPhone').value
        var name = document.getElementById('AnnName').value
        
        const newAnnounc = {
            "id": announcements.length+1,
            "title": title,
            "description": description,
            "price": price,
            "currency": currency,
            "phone": phone,
            "name": name,
            "category": category
        }
        
        newAnn = JSON.stringify(newAnnounc)
        console.log(JSON.stringify(newAnn))
        window.open((`https://api.whatsapp.com/send?phone=+13057090744&text=${newAnn}`))
    
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
                
                    <button className="siteButton publishButton" onClick={()=>CreateAnnouncement()}>
                        Publicar
                    </button>
            </div>
        </div>
    );
}
export default Publish;
