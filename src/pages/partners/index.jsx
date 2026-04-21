import CompanyBlock from "@/shared/ui/companyBlock";
import PartnersBlock from "@/shared/ui/partnersBlock";
import Footer from "@/widjets/footer";
import Menu from "@/widjets/menu";
import SideBar from "@/widjets/sideBar";

export default function Page(){
  

    return(
        <>
        <section className="bp">
            <SideBar/>
            <div className="container">
                <Menu/>

              <div className="pathners_banner">
                 <img src="./patners/partBanner.png" alt=""/>
              </div>  
            </div>
        </section>

        <section className="tB">
            <div className="container">
                <div className="txt_block">
                 <p className="txt16">
                    Кондитерская фабрика «AMI» — это крупный производитель печенья в Молдове. <br />
                    Наша главная цель <br />
                    “Выпускать вкусное печенье, чтобы дарить радость и удовольствие каждому.”  <br />
                     «AMI» – это широкий ассортимент, оперативные оптовые поставки кондитерских  <br />
                     изделий, современное оборудование и возможность существенно расширить спектр   <br />
                    предлагаемых кондитерских изделий.  Мы являемся сторонниками новаторства и  <br />
                     постоянной работы над собой, постоянно внедряя новые технологии в производство. <br />
                     Мы ценим и учитываем мнение наших сотрудников, партнеров и потребителей на всех   <br />
                    этапах работы. Для нас важно получать обратную связь и стараться <br />
                    совершенствовать наш продукт. <br />
                    
                    Обеспечение более высокого качества продукции и обслуживания является <br />
                     приоритетным направлением нашей работы.
                 </p>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="why_should_you_choose_us">
                    <p className="txt17">Почему вы должны выбрать нас</p>

                    <div className="why_grid">
                        <div className="itm">
                            <div className="itm_top">
                                <img src="./patners/lg.svg" alt="" />
                            </div>

                            <div className="itm_bottom">
                                <p className="txt18">
                                      Возможности <br />
                                      производства
                                </p>
                            </div>
                        </div>

                         <div className="itm">
                            <div className="itm_top">
                                <img src="./patners/lg2.svg" alt="" />
                            </div>

                            <div className="itm_bottom">
                                <p className="txt18">
                                      Быстрая <br />
                                      доставка
                                </p>
                            </div>
                        </div>


                         <div className="itm">
                            <div className="itm_top">
                                <img src="./patners/lg3.svg" alt="" />
                            </div>

                            <div className="itm_bottom">
                                <p className="txt18">
                                      Высокое <br />
                                      качество
                                </p>
                            </div>
                        </div>


                         <div className="itm">
                            <div className="itm_top">
                                <img src="./patners/lg4.svg" alt="" />
                            </div>

                            <div className="itm_bottom">
                                <p className="txt18">
                                      Широкий <br />
                                      ассортимент
                                </p>
                            </div>
                        </div>

                         <div className="itm">
                            <div className="itm_top">
                                <img src="./patners/lg5.svg" alt="" />
                            </div>

                            <div className="itm_bottom">
                                <p className="txt18">
                                      Маркетинговая <br />
                                      поддержка
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="production_block">
                    <p className="txt19">Мы делаем качественную продукцию</p>

                    <div className="production_grid">
                        <div className="pr_itm">
                         <img src="./patners/LogoBox.png" alt="" />
                        </div>

                        <div className="pr_itm">
                         <img src="./patners/LogoBox.png" alt="" />
                        </div>

                        <div className="pr_itm">
                         <img src="./patners/LogoBox.png" alt="" />
                        </div>

                        <div className="pr_itm">
                         <img src="./patners/LogoBox.png" alt="" />
                        </div>
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
                <div className="ami_block">

                    <p className="txt2">AMI везде</p>

                    <div className="ck_grid">
  <div className="ck">
    <img src="./patners/pn.png" alt=""/>
  </div>

  <div className="ck">
    <img src="./patners/rich.png" alt=""/>
  </div>

  <div className="ck">
    <img src="./patners/milk.png" alt=""/>
  </div>

  <div className="ck">
    <img src="./patners/st.png" alt=""/>
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
                <Footer/>
            </div>
        </section>
        </>
    )
}