import { useRouter } from "next/router"

export default function promocionalBisne()
{
    const router = useRouter()
    return(
        <div className="">
            {
                router.query.Id
            }
        </div>
    )
}