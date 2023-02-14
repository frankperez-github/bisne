import Image from "next/image";
import Link from "next/link";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext } from "react";
import AnnouncementPreview from "@/components/AnnouncementPreview";

function Search() {

    const { setMenu, Search, results } = useContext(AnnouncementsContext);

    const handleChange = (event) =>
    {
        Search(event.target.value)
    }

    return(
        <div className="Search">
            <div className="Header">
                <Link href="/" className="nameAndLogo">
                    <div className="logo">
                        <Image className="image" src="/backArrow.svg" alt="logo" fill/>
                    </div>
                    <p>Regresar al inicio</p>
                </Link>
                
                <div className="searchAndBurger">
                    <div className="burger" onClick={()=>setMenu(true)}>
                        <Image className="image"  src="/more.svg" alt="burger" fill/>
                    </div>
                </div>
            </div>

            <div className="SearchBar">
                <div className="lupaBar">
                    <Image className="image" src="/lupa.svg" alt="logo" fill/>
                </div>
                <input className="searchInput" onChange={handleChange}  type="text" placeholder="Escriba lo que quiera buscar"/>
            </div>

            <div className="SearchResults">
                {results === null 
                    ? <h4>Not announcements founded</h4>
                    : results.map((result)=><AnnouncementPreview key={result.id} announcement={result}/>)
                }
            </div>
        </div>
    );
}
export default Search;