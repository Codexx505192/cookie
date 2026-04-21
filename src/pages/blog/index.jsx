import PartnersBlock from "@/shared/ui/partnersBlock";
import About from "@/widjets/about";
import Ellips from "@/widjets/ellips/indes";
import Footer from "@/widjets/footer";
import SideBar from "@/widjets/sideBar";
import Link from "next/link";

export default function Page(){
    return(
        <>
        <section id="blog-page">
            <div className="container">
              <SideBar/>
              <div className="blog_bnnr">
                <Ellips/>
              </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="cokBlock">
                    <p className="txt21">Наши последние новости</p>

                    <div className="c_gridd">
                        <div className="lmg v2">
                            <p className="txt22">06.10.2020</p>
                         
                         <div className="l_bottom">
                            <p className="txt23">
                                Мы открыли новый магазин, <br />
                                 добавили новые рецепты
                            </p>

                            <div className="next_bloc">
                                <Link href="#" className="lnk5">
                                  Читать
                                </Link>

                                <Link href="#">
                                <img src="./blog/Arrow_orange.svg" alt="Arrow" />
                                </Link>
                            </div>
                         </div>
                        </div>

                        <div className="lmg v3">
                            <p className="txt22">06.10.2020</p>
                         
                         <div className="l_bottom">
                            <p className="txt23">
                                Новый вид печенья
                            </p>

                            <div className="next_bloc">
                                <Link href="#" className="lnk5 vl">
                                  Читать
                                </Link>

                                <Link href="#">
                                <img src="./blog/Arrow_white.png" alt="Arrow" />
                                </Link>
                            </div>
                         </div>
                        </div>

                        <div className="lmg v4">
                            <p className="txt22">06.10.2020</p>
                         
                         <div className="l_bottom">
                            <p className="txt23">
                                Новый вид печенья
                            </p>

                            <div className="next_bloc">
                                <Link href="#" className="lnk5 vl">
                                  Читать
                                </Link>

                                <Link href="#">
                                <img src="./blog/Arrow_white.png" alt="Arrow" />
                                </Link>
                            </div>
                         </div>
                        </div>

                        <div className="lmg v5">
                            <p className="txt22">06.10.2020</p>
                         
                         <div className="l_bottom">
                            <p className="txt23">
                                Новый вид печенья
                            </p>

                            <div className="next_bloc">
                                <Link href="#" className="lnk5 vl">
                                  Читать
                                </Link>

                                <Link href="#">
                                <img src="./blog/Arrow_white.png" alt="Arrow" />
                                </Link>
                            </div>
                         </div>
                        </div>


                        <div className="lmg v6">
                            <p className="txt22">06.10.2020</p>
                         
                         <div className="l_bottom">
                            <p className="txt23">
                                Новый вид печенья
                            </p>

                            <div className="next_bloc">
                                <Link href="#" className="lnk5 vl">
                                  Читать
                                </Link>

                                <Link href="#">
                                <img src="./blog/Arrow_white.png" alt="Arrow" />
                                </Link>
                            </div>
                         </div>
                        </div>

                        <div className="lmg v6">
                            <p className="txt22">06.10.2020</p>
                         
                         <div className="l_bottom">
                            <p className="txt23">
                                Новый вид печенья
                            </p>

                            <div className="next_bloc">
                                <Link href="#" className="lnk5 vl">
                                  Читать
                                </Link>

                                <Link href="#">
                                <img src="./blog/Arrow_white.png" alt="Arrow" />
                                </Link>
                            </div>
                         </div>
                        </div>
                    </div>

                </div>
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
    )
}