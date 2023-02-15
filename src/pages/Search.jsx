import Image from "next/image";
import { useContext } from "react";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import AnnouncementPreview from "@/components/AnnouncementPreview";
import ReturnBar from "@/components/ReturnBar";
import Menu from "@/components/Menu";

function Search() {

    const { setMenu, Search, results } = useContext(AnnouncementsContext);

    const handleChange = (event) =>
    {
        Search(event.target.value)
    }

    return(
        <div className="Search">
            <ReturnBar />
            <Menu />
            <div className="SearchBar">
                <div className="lupaBar">
                    <Image className="image" src="/lupa.svg" alt="logo" fill/>
                </div>
                <input className="searchInput" onChange={handleChange}  type="text" placeholder="Escriba lo que quiera buscar"/>
            </div>

            <div className="SearchResults">
                {results === null 
                    ? <h4>Not announcements found</h4>
                    : results.map((result)=><AnnouncementPreview key={result.id} announcement={result}/>)
                }
            </div>
        </div>
    );
}
export default Search;