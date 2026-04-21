export default function PartnersBlock(){
    return(
        <div className="form_block">
                  <form>
                    <div className="form_cntr">
                    <p className="txt6">Хочу стать партнером</p>
        
                    <p className="txt7">
                      Заполните  форму и мы предоставим  <br />
                      вам интересное коммерческое предложение
                    </p>
        
                    <div className="inputs">
                      <div className="inputs_t">
                      <input type="text" className="np1" placeholder="имя,фамилия" />
                      <input type="tel" className="np1" placeholder="Номер телефона" />
                      </div>
        
                      <div className="inputs_t">
                      <input type="text" className="np1" placeholder="Компания" />
                      <input type="email" className="np1" placeholder="Email" />
                      </div>
                    </div>
        
                    <button className="btn3">
                      Отправить
                    </button>
                  </div>
                  </form>
                </div>
    )
}