import CompanyBlock from "@/shared/ui/companyBlock";
import PartnersBlock from "@/shared/ui/partnersBlock";
import About from "@/widjets/about";
import Footer from "@/widjets/footer";
import Menu from "@/widjets/menu";
import SideBar from "@/widjets/sideBar";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
     <section>
      <div className="container">
        <div className="banner">
          <SideBar/>

          <div className="banner_right">

           <Menu/>
            <img src="./img/banner.png" alt="banner" />
          </div>
        </div>
      </div>
     </section>

     <section>
      <div className="container">
        <div className="block_grid">
          <div className="lm">
           <button className="btn">
            <Link href="#" className="lnk2" >
            Dolce Dimineața
            </Link>
           </button>
          </div>

          <div className="lm lm2">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            Dolce Dimineața
            </Link>
           </button>
          </div>

          <div className="lm lm3">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            DINO
            </Link>
           </button>
          </div>

          <div className="lm lm4">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            Champion
            </Link>
           </button>
          </div>

          <div className="lm lm5">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            Galaxy
            </Link>
           </button>
          </div>

          <div className="lm lm6">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            Galaxy
            </Link>
           </button>
          </div>

          <div className="lm lm7">
           <button className="btn2">
            <Link href="#" className="lnk3" >
            Galaxy
            </Link>
           </button>
          </div>
        </div>
      </div>
     </section>

     <section>
      <div className="container">
        <CompanyBlock/>
      </div>
     </section>

     <section>
      <div className="container">
        <PartnersBlock/>
      </div>
     </section>

     <section>
      <div className="container">
        <About/>
      </div>
     </section>
     
     <section>
      <div className="container">
          <Footer/>
      </div>
     </section>
    </>
  );
}
