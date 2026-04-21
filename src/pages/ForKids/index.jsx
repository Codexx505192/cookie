import SideBar from "@/widjets/sideBar";
import Link from "next/link";

export default function Page(){
    return(
        <>
        <section>
            <div className="container">
                <SideBar/>
                <div className="for_block">
                   <p className="txt24">Нажми на планету, чтобы узнать о ней больше</p>

                   <div className="for_bnnr">
                     <Link href="#" className="sun">
                     <img src="./kids/Sun_ill.svg" alt="" />
                     </Link>

                     <Link href="#" className="mercury">
                     <img src="./kids/mercury.svg" alt="mercury" />
                     </Link>

                     <Link href="#" className="venus">
                     <img src="./kids/venus.svg" alt="mercury" />
                     </Link>

                     <Link href="#" className="earth">
                     <img src="./kids/earth.svg" alt="earth" />
                     </Link>

                     <Link href="#" className="moon">
                     <img src="./kids/moon.svg" alt="moon" />
                     </Link>
                   </div>
                </div>
            </div>
        </section>
        </>
    )
}