import Image from "next/image";

function Titlebar({title, icon}) {
    return(
        <div className="TitleBar">
            <div className="titleIcon">
                <Image src={icon} fill className="image"/>
            </div>
            <h3>{title}</h3>
        </div>
    );
}
export default Titlebar;