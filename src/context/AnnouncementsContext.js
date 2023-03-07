import { createContext, useState } from "react";
const AnnouncementsContext = createContext();
import Announcements from "../Announcements.json";

export const AnnouncementsContextProvider = ({children})=>{

    const[menu, setMenu] = useState(false);
    const menuIcons = ["cart.svg", "star.svg", "edit.svg", "paper.svg", "person.svg", "stonks.svg"];
    
    const [announcements, setAnnouncements] = useState(Announcements)
    
    const Categories = [
        {
            id: 1,
            name: "Compra y Venta",
        },
        {
            id: 2,
            name: "Servicios",
        },
        {
            id: 3,
            name: "Celulares",
        },
        {
            id: 4,
            name: "Portátiles",
        },
        {
            id: 5,
            name: "Computadoras",
        },
        {
            id: 6,
            name: "Consolas",
        },
        {
            id: 7,
            name: "Viviendas",
        },
        {
            id: 8,
            name: "Autos",
        },
        {
            id: 9,
            name: "Ofertas de Empleo",
        },
        {
            id: 10,
            name: "Otros",
        }
    ]

    const [results, setResults] = useState(null);
    
    function Search(query)
    {
        if(query !== ""){

            var newResults=[]
            announcements.map(announc => {
                if(announc.title.toLowerCase().includes(query.toLowerCase()) || 
                    announc.description.toLowerCase().includes(query.toLowerCase())){
                    newResults=[announc, ...newResults];
                }
            });
            if(newResults.length > 0) setResults(newResults);
            else setResults(null)
        }
    }

    function filterCateg(category)
    {
        if(category !== ""){

            var newResults=[]
            announcements.map(announc => {
                if(announc.category === category){
                    newResults=[announc, ...newResults];
                }
            });
            if(newResults.length > 0) setResults(newResults);
            else setResults(null)
        }
    }
    const [currAnnouncement, setCurrAnnouncement] = useState({})
    const promotions =["/promo1.png", "/promo2.png", "/promo3.png", "/promo4.png", "/promo5.png "]

    return (
    <AnnouncementsContext.Provider 
        value={{
            menu,
            setMenu,
            announcements,
            Search,
            results,
            menuIcons,
            Categories,
            filterCateg,
            setAnnouncements,
            promotions,
            currAnnouncement,
            setCurrAnnouncement
        }}>

        {children}
        
    </AnnouncementsContext.Provider>
    );
}
export default AnnouncementsContext;