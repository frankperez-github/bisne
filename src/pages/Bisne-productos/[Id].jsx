import {useRouter} from "next/router"
export default function Bisne()
{
    const router = useRouter()
    return(
        <div className="">
            {router.query.Id}
        </div>
    )
}