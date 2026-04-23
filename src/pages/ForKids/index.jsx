import Menu from "@/widjets/menu";
import SideBar from "@/widjets/sideBar";
import Link from "next/link";

export default function Page(){
    return(
        <>
        <section id="forKids-page">
            <div className="container">
                <SideBar/>
                <div className="for_block">
                    <Menu/>
                   <p className="txt24">Нажми на планету, чтобы узнать о ней больше</p>

                   <div className="for_bnnr">
                     <Link href="/sun" className="sun">
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

                     <Link href="#" className="jupiter">
                     <img src="./kids/jupiter.svg" alt="jupiter" />
                     </Link>

                     <Link href="#" className="mars">
                     <img src="./kids/mars.svg" alt="mars" />
                     </Link>

                     <Link href="#" className="neptue">
                     <img src="./kids/neptue.svg" alt="neptue" />
                     </Link>


                     <Link href="#" className="uranus">
                     <img src="./kids/uranus.svg" alt="uranus" />
                     </Link>

                     <Link href="#" className="saturn">
                     <img src="./kids/saturn.svg" alt="saturn" />
                     </Link>

                     <Link href="#" className="pluto">
                     <img src="./kids/pluto.svg" alt="pluto" />
                     </Link>

                      
                     <div className="inf_iph">
                      <Link href="/sun">
                     <img src="./kids/Sun_ill.svg" alt="" />
                     </Link>

                     <Link href="#" >
                     <img src="./kids/mercury.svg" alt="mercury" />
                     </Link>

                     <Link href="#">
                     <img src="./kids/venus.svg" alt="mercury" />
                     </Link>

                     <Link href="#" >
                     <img src="./kids/earth.svg" alt="earth" />
                     </Link>

                     <Link href="#">
                     <img src="./kids/moon.svg" alt="moon" />
                     </Link>

                     <Link href="#">
                     <img src="./kids/jupiter.svg" alt="jupiter" />
                     </Link>

                     <Link href="#">
                     <img src="./kids/mars.svg" alt="mars" />
                     </Link>

                     <Link href="#" >
                     <img src="./kids/neptue.svg" alt="neptue" />
                     </Link>


                     <Link href="#">
                     <img src="./kids/uranus.svg" alt="uranus" />
                     </Link>

                     <Link href="#">
                     <img src="./kids/saturn.svg" alt="saturn" />
                     </Link>

                     <Link href="#">
                     <img src="./kids/pluto.svg" alt="pluto" />
                     </Link>
                    </div>

                   </div>
                </div>
            </div>
        </section>
        </>
    )
}