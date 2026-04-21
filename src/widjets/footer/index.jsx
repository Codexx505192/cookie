import Link from "next/link";

export default function Footer(){
    return(
        <footer>
           <div className="top_footer">
            <div className="logo_footer">
             <img src="./img/logo.png" alt="logo_footer" />
            </div>


            <ul className="ul2">
              <div className="block_footer">
               <div className="ln">
                <p className="txt10">Карта сайта</p>
               </div>
            </div>

              <li className="li2">
                <Link href="/catalog" className="lnk4">
                Каталог
                </Link>
              </li>

              <li className="li2">
                <Link href="/partners" className="lnk4">
                Партнерам
                </Link>
              </li>

              <li className="li2">
                <Link href="/blog" className="lnk4">
                Блог
                </Link>
              </li>

              <li className="li2">
                <Link href="/ForKids" className="lnk4">
                For kids
                </Link>
              </li>

              <li className="li2">
                <Link href="#" className="lnk4">
                Скачать каталог .pdf
                </Link>
              </li>
            </ul>

            <ul className="ul2">
              <li className="li2">
                <Link href="#" className="lnk4">
                Контакты
                </Link>
              </li>

              <li className="li2s">
                <img src="./img/phone_ic.svg" alt="phone" />
                +373 00000000
              </li>

              <li className="li2s">
                <img src="./img/mail_ic.svg" alt="phone" />
                 ami@mail.ru
              </li>

              <li className="li2s">
                 <img src="./img/location_ic.svg" alt="phone" />
                 2972 Westheimer Rd. Santa Ana, <br />
                  Illinois 85486
              </li>
            </ul>

            <div className="map_block">
              <img src="./img/map.png" alt="map" />
            </div>
           </div>

           <div className="bottom_footer">
           <p className="txt11">AMI 2020 </p>

           <p className="txt12">
            Политика конфиденциальности  <br />
             Created by be-adv.com
           </p>

           <div className="app_footer">
            <div className="app_f">
              <img src="./img/insta.svg" alt="insta" />
            </div>
           
           <div className="app_f">
             <img src="./img/youtub.svg" alt="insta" />
           </div>
            
            <div className="app_f">
              <img src="./img/facebook.svg" alt="insta" />
            </div>
           </div>
           </div>
          </footer>
    )
}