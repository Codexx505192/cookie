import Footer from "@/widjets/footer";
import Menu from "@/widjets/menu";
import SideBar from "@/widjets/sideBar";


export default function Page(){
    return(
        <>
        <section>
            <div className="container">
                <SideBar/>

                <div className="basket_block">
                    <div className="top_basket">
                        <p className="txt52">
                            Оформить заказ
                        </p>
                    </div>

                    <div className="bottom_basket">
                        <div className="bottom_itm">
                            
                            <div className="bottom_left">
                              <div className="btm_i">
                                <img src="./baskt/Galaxy_cookie.png" alt="" />
                            </div>  

                            <p className="txt53">
                                Сахарное печенье Galaxy
                            </p>
                            </div>

                            <div className="bottom_right">
                                <p className="txt53">
                             400г
                              </p>

                              <button className="counter">
                                <div className="minus">
                                    -
                                </div>

                                <span className="nmbr">3</span>

                                <div className="plus">
                                    +
                                </div>
                              </button> 

                              <div className="delete">
                                <img src="./baskt/del.svg" alt="" />
                              </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section>
            <div className="container">
             <form>
                   <div className="buyer_block">
                    <p className="txt54">Покупатель</p>

                    <div className="inputs_grid">
                       <input type="text" placeholder="Адрес*" className="np"/> 
                       <input type="text" placeholder="Имя и Фамилия*" className="np"/> 
                       <input type="text" placeholder="Телефон*" className="np"/> 
                       <input type="email" placeholder="E-mail*" className="np"/> 
                    </div>

                    <button className="btn5">
                        Оформить заказ
                    </button>
                </div>
             </form>
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