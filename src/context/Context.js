import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({children})=>{

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

    return <Context.Provider 
    value={{
        menu,
        setMenu,
        announcements
    }}>
        {children}
    </Context.Provider>

}
export default Context;