import Menu from "@/components/Menu";
import ReturnBar from "@/components/ReturnBar";
import Titlebar from "@/components/TitleBar";

function ContactTeam() {
    return(
        <div className="">
            <Menu />
            <ReturnBar />
            <Titlebar title={"Contactar Equipo"} icon={"/person.svg"}/>
            
            <div className="infoSections">
                <p className="infoText">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, deleniti quaerat aperiam iste labore dicta porro illo quae laudantium facere nulla distinctio. Nobis repudiandae necessitatibus, deserunt vero ipsa mollitia eius!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore incidunt commodi labore aperiam rem, delectus aliquam adipisci temporibus, quas architecto illo odio soluta ullam eveniet. Ea sunt molestiae modi?
                </p>

                    <a href="https://wa.me/+5353053079" className="siteButton">
                        Contactar Equipo
                    </a>
            </div>
        </div>
    );
}
export default ContactTeam;