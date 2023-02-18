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
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nam ut odio ipsum laborum, deserunt iusto illum libero nesciunt officiis harum, odit quas quis beatae dolore dolorum minima debitis provident.
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique in obcaecati exercitationem ullam qui omnis repellat nostrum sed dolorum non iusto, quia voluptates dicta. Necessitatibus iure ipsa quia accusamus. Ex!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab voluptates iusto porro perspiciatis, excepturi quisquam in delectus voluptatem, ullam cupiditate at impedit! Totam quia vero accusamus possimus dolor cupiditate.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia dolores magni quisquam maxime culpa asperiores, amet explicabo porro quis reprehenderit incidunt. Ipsum consequuntur rem fugit commodi reiciendis doloribus tempore voluptates.
                </p>
            </div>
        </div>
    );
}
export default Terms_Conditions;