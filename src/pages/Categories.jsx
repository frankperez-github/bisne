import Image from "next/image";
import { useContext, useState } from "react";
import ReturnBar from "@/components/ReturnBar";
import Titlebar from "@/components/TitleBar";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import CategoryRow from "@/components/CategoryRow";
import AnnouncementPreview from "@/components/AnnouncementPreview";


function Categories ()
{
    const {menuIcons, Categories, filterCateg, results} = useContext(AnnouncementsContext);
    const [category, setCategory] = useState("");
    const [id, setId] = useState(0);
    
    function ChangeCateg(category)
    {
        setCategory(category)
        filterCateg(category);
    }
    const handleChange = (event) =>
    {
        ChangeCateg(event.target.value);
    }

    return(
        category === "" 
        
        ?
        <div className="Categories">
            <ReturnBar />
            <Titlebar icon={menuIcons[0]} title={"Categorias"}/> 

            {Categories.map((category)=>(
                <CategoryRow key={category.id} id={category.id} name={category.name} changeCateg={ChangeCateg} setId={setId}/>
            ))}

        </div>

        : 
        <div className="">
            <ReturnBar />
            <Menu />
                <div className="colorDot relativeDot">
                    <Image src={`${id}.svg`} alt="" fill className="image"/>
                </div>
                <select name="" id="" onChange={handleChange}>
                    {Categories.map((categ)=>
                    <option key={categ.id} id={categ.id} value={categ.name}>{categ.name}</option>
                    )}
                </select>


                {/* Filtered Announcements */}
                <div className="SearchResults">
                {results === null 
                    ? <h4 className="noCatg" >Not announcements on this category</h4>
                    : results.map((result)=><AnnouncementPreview key={result.id} announcement={result}/>)
                }
                </div>
        </div>
        
        );
}
export default Categories;