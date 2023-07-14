import React from "react";
import "./style.css";
import ReactDOM from 'react-dom';

export const Montaj = () => {
  return (
    <div className="montaj">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src={require("./images/Rectangle 11.png").default} />
          <div className="div" />
          <div className="group">
            <img className="image" alt="Image" src={require("./images/image 1.png").default} />
            <div className="group-2">
              <div className="text-wrapper">Информация</div>
              <div className="flex-container">
                <div className="text">
                  <span className="span">
                    линк
                    <br />
                  </span>
                </div>
                <div className="text">
                  <span className="span">
                    линк
                    <br />
                  </span>
                </div>
                <div className="text">
                  <span className="span">
                    линк
                    <br />
                  </span>
                </div>
                <div className="text">
                  <span className="span">
                    линк
                    <br />
                  </span>
                </div>
                <div className="text">
                  <span className="span">линк</span>
                </div>
              </div>
            </div>
            <div className="group-3">
              <div className="text-wrapper">Контакти</div>
              <div className="group-4">
                <p className="p">София, пл. Възраждане ул. Марко Балабанов 1</p>
                <img className="img" alt="Image" src={require("./images/image 8.png").default} />
              </div>
              <div className="group-5">
                <img className="img" alt="Image" src={require("./images/image 9.png").default} />
                <div className="text-wrapper-2">0888888888</div>
              </div>
              <div className="group-6">
                <img className="img" alt="Image" src={require("./images/image 9.png").default} />
                <div className="text-wrapper-2">0888888888</div>
              </div>
              <div className="group-7">
                <img className="img" alt="Image" src={require("./images/image 9(1).png").default} />
                <div className="text-wrapper-2">0888888888</div>
              </div>
              <div className="group-8">
                <img className="img" alt="Image" src={require("./images/image 9(1).png").default} />
                <div className="text-wrapper-2">0888888888</div>
              </div>
              <img className="image-2" alt="Image" src={require("./images/image 10.png").default} />
              <div className="text-wrapper-3">alabala@gmail.com</div>
            </div>
          </div>
          <div className="navbar-wrapper">
            <div className="navbar">
              <img className="image-3" alt="Image" src={require("./images/image 1.png").default} />
              
              <button className="button" onClick={() => window.open(require("./index.jsx").default, "_blank")}>
              <div className="text-wrapper-4">начало</div>
              </button>

              <button className="button" onClick={() => window.open(require("./contacts.jsx").default, "_blank")}>
              <div className="text-wrapper-5">контакти</div>
              </button>

              <button className="button" onClick={() => window.open(require("./promotions.jsx").default, "_blank")}>
              <div className="text-wrapper-6">промоции</div>
              </button>

              <button className="button" onClick={() => window.open(require("./uslugi.jsx").default, "_blank")}>
              <div className="text-wrapper-7">услуги</div>
              </button>

              <button className="button" onClick={() => window.open(require("./products.jsx").default, "_blank")}>
              <div className="text-wrapper-8">продукти</div>
              </button>

              <button className="button" onClick={() => window.open(require("./us.jsx").default, "_blank")}>
              <div className="text-wrapper-9">за нас</div>
              </button>
            </div>
          </div>
          <h1 className="h-1">Монтаж</h1>

          <p className="EN">
            <span className="text-wrapper-10">Монтаж на масивен/естествен паркет</span>
            <span className="text-wrapper-11">
              {" "}
              – извършва се чрез и включва еднократно грундиране на основата с двукомпонентен ПУ грунд, лепене на паркет
              или дюшеме към основата /съгласно EN 15717/2009г. – Европейски стандарт за монтаж на този вид паркет/
              циклене, шлайфане, цялостно фугиране, лакиране до завършен вид като се използват следните консумативи –
              двукомпонентен ПУ грунд, турско двукомпонентно полиуретаново лепило, водна/ПУ смола за фугиране,
              еднокомпонентен немски воден лак сатен, като цената за всеки вид редене включва показания на схемите от 1
              до 16 начин и всички изброени операции и материали /без паркета/ и 5 години гаранция съгласно ЗУТ за
              финишна обработка и 30 години за продукта и монтажа.
              <br />
              Услуги, които не се включват в монтажа и се заплащат допълнително може да намерите на страницата – ОПЦИИ
              ПО МОНТАЖ НА ПАРКЕТ
              <br />
              <br />
            </span>
            <span className="text-wrapper-10">Условия за монтаж</span>
            <span className="text-wrapper-11">
              {" "}
              – на територията на гр.София и съгласно общите условия на „ВИАЛ ПАРКЕТ“ ЕООД. При сключен писмен договор и
              при замазки изпълнени съгласно ЕN /Европейски стандарт/. С включен в цената еднократен предварителен оглед
              на обекта. При извършване на предварителен оглед преди подписване на договор, клиентът заплаща 50 лв.,
              които се приспадат от договора. Еднократна безплатна доставка до входна врата на обекта на материали /или
              по цени съгласно транспортна тарифа/ и включена в цената гаранция съгласно ЗУТ.
              <br />
              Начало на монтаж до 3 работни дни след плащане на аванс.
            </span>
          </p>
          <p className="text-wrapper-12">Видове редене на паркет и дюшеме</p>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img className="image-4" alt="Image" src={require("./images/image 11.png").default} />
              <div className="text-wrapper-13">вид</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-group">
              <img className="image-4" alt="Image" src={require("./images/image 11.png").default} />
              <div className="text-wrapper-13">вид</div>
            </div>
          </div>
          <div className="group-9">
            <div className="overlap-group">
              <img className="image-4" alt="Image" src={require("./images/image 11.png").default} />
              <div className="text-wrapper-13">вид</div>
            </div>
          </div>
          <div className="group-10">
            <div className="overlap-group">
              <img className="image-4" alt="Image" src={require("./images/image 11.png").default} />
              <div className="text-wrapper-13">вид</div>
            </div>
          </div>
          <div className="group-11">
            <div className="overlap-group">
              <img className="image-4" alt="Image" src={require("./images/image 11.png").default}/>
              <div className="text-wrapper-13">вид</div>
            </div>
          </div>
          <div className="group-12">
            <div className="overlap-group">
              <img className="image-4" alt="Image" src={require("./images/image 11.png").default}/>
              <div className="text-wrapper-13">вид</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Montaj />, document.getElementById('root'));