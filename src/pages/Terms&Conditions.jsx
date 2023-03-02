import ReturnBar from "@/components/ReturnBar";
import Titlebar from "@/components/TitleBar";

function Terms_Conditions()
{
    return(
        <div className="Terms&Conditions">
            <ReturnBar />
            <Titlebar icon={"paper.svg"} title={"Condiciones de Uso"}/>

            <div className="infoSections">
                <p className="infoText">
                Estimado usuario. El Bisne es una plataforma cubana que tiene la misión de brindarle a los actores económicos del país un espacio en dónde promocionar sus productos de manera gratuita. Asimismo puede ser usada para el comercio minorista de productos y servicios. 

La administración no se hace responsable por el contenido de los anuncios publicados. De igual forma insta a los usuarios del sitio a denunciar cualquier publicación de procedencia política, religiosa o ilegal. El Bisne es un espacio comunitario virtual y respetar las reglas contribuye al mantenimiento del equilibrio y el respeto entre nuestros miembros. 

Ante cualquier inconveniente, duda, sugerencia o solicitud puede contactarnos mediante la opción &quot;contactar con creadores&quot; su criterio nos es importante!
                </p>
            </div>
        </div>
    );
}
export default Terms_Conditions;