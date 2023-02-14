import { createContext, useState } from "react";
const AnnouncementsContext = createContext();

export const AnnouncementsContextProvider = ({children})=>{

    const[menu, setMenu] = useState(false);

    const announcements = [
        {
            id: 1,
            name: "Laptop HP",
            description: "Laptop en perfecto estado, solo tiene detalles, le falta la pantalla y el teclado",
            price: 5000,
            currency: "USD",
            previewImage: "/announcPreview.png"
        },
        {
            id: 2,
            name: "Laptop HP x2",
            description: "Laptop en perfecto estado, solo tiene detalles, le falta la pantalla y el teclado",
            price: 5000,
            currency: "USD",
            previewImage: "/announcPreview.png"
        }
    ]

    const [results, setResults] = useState(null);
    
    function Search(query)
    {
        if(query!== ""){

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
        }}>

        {children}
        
    </AnnouncementsContext.Provider>
    );
}
export default AnnouncementsContext;