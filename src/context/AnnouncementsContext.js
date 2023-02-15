import { createContext, useState } from "react";
const AnnouncementsContext = createContext();

export const AnnouncementsContextProvider = ({children})=>{

    const[menu, setMenu] = useState(false);
    const menuIcons = ["cart.svg", "star.svg", "edit.svg", "paper.svg", "person.svg", "stonks.svg"];

    const announcements = [
        {
            id: 1,
            name: "Laptop HP",
            description: "Laptop en perfecto estado, solo tiene detalles, le falta la pantalla y el teclado",
            price: 5000,
            currency: "USD",
            previewImage: "/announcPreview.png",
            phone: "+5353103058"
        },
        {
            id: 2,
            name: "Laptop HP x2",
            description: "Laptop en perfecto estado, solo tiene detalles, le falta la pantalla y el teclado",
            price: 5000,
            currency: "USD",
            previewImage: "/announcPreview.png",
            phone: "+5353103058"
        }
    ]

    const [results, setResults] = useState(null);
    
    function Search(query)
    {
        if(query !== ""){

            var newResults=[]
            announcements.map(announc => {
                if(announc.name.toLowerCase().includes(query.toLowerCase()) || 
                    announc.description.toLowerCase().includes(query.toLowerCase())){
                    newResults=[announc, ...newResults];
                }
            });
            if(newResults.length > 0) setResults(newResults);
            else setResults(null)
        }
    }
    return (
    <AnnouncementsContext.Provider 
        value={{
            menu,
            setMenu,
            announcements,
            Search,
            results,
            menuIcons
        }}>

        {children}
        
    </AnnouncementsContext.Provider>
    );
}
export default AnnouncementsContext;