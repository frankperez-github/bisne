import Image from "next/image";

function CategoryRow({id, name, changeCateg, setId})
{

    function handleCategorySelect ()
    {
        changeCateg(name, id);
        setId(id);
    }
    return(
        <div className="categoryRow"  onClick={handleCategorySelect} >
            <div className="colorDot">
                <Image alt="*" src={`${id}.svg`} fill className="image"/>
            </div>
            {/* <p>{name}</p> */}
        </div>
    );
}
export default CategoryRow;