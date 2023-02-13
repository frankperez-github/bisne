import Link from "next/link";
import AnnouncementsContext from "@/context/AnnouncementsContext";
import { useContext } from "react";
import { useRouter } from "next/router";

function Announcement()
{
    const {announcements} = useContext(AnnouncementsContext)
    const router = useRouter()
    const {id} = router.query

    return(
        <Link href="/">{announcements[id-1].name}</Link>
    );
}
export default Announcement;