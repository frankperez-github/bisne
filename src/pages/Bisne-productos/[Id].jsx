import Menu from "@/components/Menu"
import ReturnBar from "@/components/ReturnBar"
import {useRouter} from "next/router"
export default function Bisne()
{
    const router = useRouter()
    return(
        <div className="">
            <ReturnBar />
            <Menu />
            <div className="Business">
                
            </div>
        </div>
    )
}