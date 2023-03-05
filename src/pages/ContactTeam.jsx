import ReturnBar from "@/components/ReturnBar";
import Titlebar from "@/components/TitleBar";

function ContactTeam() {
    return(
        <div className="">
            <ReturnBar />
            <Titlebar title={"Contactar Equipo"} icon={"/person.svg"}/>
            
            <div className="infoSections">
                <p className="infoText">
                Comuníquese con los creadores de la plataforma para transmitir su criterio, sugerencia y/o presentar alguna queja o discrepancia con algún mecanismo de funcionamiento general o anuncio en particular publicado en esta web. Estamos para servirle !
                </p>

                    <a href="https://wa.me/+1305-709-0744" className="siteButton">
                        Contactar Equipo
                    </a>
            </div>
        </div>
    );
}
export default ContactTeam;