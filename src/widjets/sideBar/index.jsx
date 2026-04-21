import Link from "next/link";

export default function SideBar(){
    return(
        <div className="header_lft">
             <div className="sid_top">
             <div className="sd_logo">
              <Link href="/" className="logo">
              <img src="./img/logo.png" alt="logo" />
              </Link>
             </div>

             <ul className="ul1">
              <li>
                <Link href="/catalog" className="lnk">
                Каталог
                </Link>
              </li>
              <li>
                <Link href="/partners" className="lnk">
                Партнерам
                </Link>
              </li>
              <li>
                <Link href="/blog" className="lnk">
                блог
                </Link>
              </li>
              <li>
                <Link href="/ForKids" className="lnk">
                for kids
                </Link>
              </li>
             </ul>

             <div className="cart_lgo">
              <img src="./img/cart.svg" alt="cart_logo" />
             </div>
             </div>

             <div className="sid_bottom">
              <div className="app_block">
                <div className="app_i">
                  <img src="./img/instagram_ic.svg" alt="app" />
                </div>

                <div className="app_i">
                  <img src="./img/Youtube_ic.svg" alt="app" />
                </div>

                <div className="app_i">
                  <img src="./img/Facebook_ic.svg" alt="app" />
                </div>

                <div className="app_i">
                  <img src="./img/vk_logo.svg" alt="app" />
                </div>
              </div>

              <div className="emal_bl">
                <p className="txt1">+373 00000000</p>
                <p className="txt1">ami@mail.ru</p>
              </div>
             </div>
          </div>
    )
}