import ReturnBar from "@/components/ReturnBar";
import Titlebar from "@/components/TitleBar";

function Promotion()
{
    return(
        <div className="">
            <ReturnBar />
            <Titlebar icon={"stonks.svg"} title={"Promocionarse"}/>

            <div className="infoSections">
                <p className="infoText">
                    Si deseas que tu anuncio llegue a cientos de personas y que se posicione en nuestra plataforma, sólo debes contactarnos vía WhatsApp.
                </p>

                <a href="https://wa.me/+1305-709-0744" className="siteButton">
                    Solicitar Promoción
                </a>
            </div>
        
        </div>
    );
}
export default Promotion;