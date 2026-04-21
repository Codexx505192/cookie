import Link from "next/link";

export default function About(){
    return(
       <div className="about_block">
          <div className="about_top">
            <p className="txt8">Узнайте о нас больше</p>
            
            <div className="about_app">
              <Link href="#" className=".ab_app">
              <img src="./img/insta.svg" alt="" />
              </Link> 

              <Link href="#" className=".ab_app">
              <img src="./img/youtub.svg" alt="" />
              </Link>

              <Link href="#" className=".ab_app">
              <img src="./img/facebook.svg" alt="" />
              </Link>
            </div>

            <p className="txt9">#ВСЕЛЮБЯТAMI</p>
          </div>

           <div className="about_grid">
            <div className="about_itm about2">
              <img src="./img/about.png" alt="" />
            </div>

             <div className="about_itm about3">
              <img src="./img/about2.png" alt="" />
            </div>

             <div className="about_itm about4">
              <img src="./img/about3.png" alt="" />
            </div>

            <div className="about_itm about4">
              <img src="./img/about4.png" alt="" />
            </div>

            <div className="about_itm about4">
              <img src="./img/about5.png" alt="" />
            </div>

             <div className="about_itm about4">
              <img src="./img/about6.png" alt="" />
            </div>
           </div>
        </div>
    )
}