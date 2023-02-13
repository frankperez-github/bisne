import { createContext, useState } from "react";
export const AnnouncementsContext = createContext();

const AnnouncementsContextProvider = ({children})=>{

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

    const [results, setResults] = useState([]);
    
    function Search(query)
    {
        var newResults=[]
        announcements.map(announc => {
            if(announc.name.includes(query)){
                newResults=[announc, ...newResults];
            }
        });
        setResults(newResults);
        console.log(query);
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
export default AnnouncementsContextProvider;