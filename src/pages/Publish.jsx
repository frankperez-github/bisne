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

    const [newAnn, setNewAnn] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("0")
    const [currency, setCurrency] = useState("USD")
    const [category, setCategory] = useState("Compra y Venta")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    
    function CreateAnnouncement() {

        setTitle(document.getElementById('AnnTitle').value)
        setDescription(document.getElementById('AnnDescription').value)
        setPrice(document.getElementById('AnnPrice').value)
        setCurrency(document.getElementById('AnnCurrency').value)
        setCategory(document.getElementById('AnnCategory').value)
        setPhone(document.getElementById('AnnPhone').value)
        setName(document.getElementById('AnnName').value)
        
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
        
        setNewAnn(JSON.stringify(newAnnounc))
        window.open(`https://api.whatsapp.com/send?phone=+13057090744&text=${newAnn}`)
    
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
