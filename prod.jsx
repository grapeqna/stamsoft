import React from "react";
import "./style.css";
import ReactDOM from 'react-dom';

export const Prod = () => {
  return (
    <div className="prod">
      <div className="div">
        <div className="group">
          <div className="navbar">
            <img className="image" alt="Image" src={require("./images/image 1.png").default} />
            
            <button className="button-2" onClick={() => window.open(require("./index.jsx").default, "_blank")}>
            <div className="text-wrapper">начало</div>
            </button>

            <button className="button-2" onClick={() => window.open(require("./contacts.jsx").default, "_blank")}>
            <div className="text-wrapper-2">контакти</div>
            </button>

            <button className="button-2" onClick={() => window.open(require("./promotions.jsx").default, "_blank")}>
            <div className="text-wrapper-3">промоции</div>
            </button>

            <button className="button-2" onClick={() => window.open(require("./uslugi.jsx").default, "_blank")}>
            <div className="text-wrapper-4">услуги</div>
            </button>

            <button className="button-2" onClick={() => window.open(require("./products.jsx").default, "_blank")}>
            <div className="text-wrapper-5">продукти</div>
            </button>

            <button className="button-2" onClick={() => window.open(require("./us.jsx").default, "_blank")}>
            <div className="text-wrapper-6">за нас</div>
            </button>
          </div>
        </div>
        <div className="group-2">
          <img className="img" alt="Image" src={require("./images/image 1.png").default} />
          <div className="group-3">
            <div className="text-wrapper-7">Информация</div>
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
          <div className="group-4">
            <div className="text-wrapper-7">Контакти</div>
            <div className="group-5">
              <p className="p">София, пл. Възраждане ул. Марко Балабанов 1</p>
              <img className="image-2" alt="Image" src={require("./images/image 8.png").default} />
            </div>
            <div className="group-6">
              <img className="image-2" alt="Image" src={require("./images/image 9.png").default} />
              <div className="text-wrapper-8">0888888888</div>
            </div>
            <div className="group-7">
              <img className="image-2" alt="Image" src={require("./images/image 9.png").default} />
              <div className="text-wrapper-8">0888888888</div>
            </div>
            <div className="group-8">
              <img className="image-2" alt="Image" src={require("./images/image 9(1).png").default} />
              <div className="text-wrapper-8">0888888888</div>
            </div>
            <div className="group-9">
              <img className="image-2" alt="Image" src={require("./images/image 9(1).png").default} />
              <div className="text-wrapper-8">0888888888</div>
            </div>
            <img className="image-3" alt="Image" src={require("./images/image 10.png").default} />
            <div className="text-wrapper-9">alabala@gmail.com</div>
          </div>
        </div>
        <img className="image-4" alt="Image" src={require("./images/image 11.png").default} />
        <h1 className="h-1">паркет</h1>
        <p className="EN">
          Производител КОРКОС ООД гр.Сливен
          <br />
          Селекция на лицевата част по БДС и EN 13228
        </p>
        <p className="text-wrapper-10">Цени за кв.м. в лева с вкл. 20% ДДС</p>
        <div className="text-wrapper-11">
          Размер/мм
          <br />
          ширина/дължина/дебелина
        </div>
        <div className="element">
          Екстра качество
          <br />
          А1
        </div>
        <div className="k">
          Kв.м. в един <br />
          пакет/връзка
        </div>
        <div className="flex-container-2">
          <div className="span-wrapper">
            <span className="text-wrapper-12">
              50,70/500/21 мм.
              <br />
            </span>
          </div>
          <div className="span-wrapper">
            <span className="text-wrapper-12">
              50,70/350/21 мм.
              <br />
            </span>
          </div>
          <div className="span-wrapper">
            <span className="text-wrapper-12">
              50,60,70/300/21 мм.
              <br />
            </span>
          </div>
          <div className="span-wrapper">
            <span className="text-wrapper-12">50,70/250/21 мм.</span>
          </div>
        </div>
        <div className="flex-container-3">
          <div className="text-2">
            <span className="text-wrapper-12">
              -<br />
            </span>
          </div>
          <div className="text-2">
            <span className="text-wrapper-12">
              114.00лв.
              <br />
            </span>
          </div>
          <div className="text-2">
            <span className="text-wrapper-12">
              105.00лв.
              <br />
            </span>
          </div>
          <div className="text-2">
            <span className="text-wrapper-12">96.00лв.</span>
          </div>
        </div>
        <div className="flex-container-4">
          <div className="text-3">
            <span className="text-wrapper-12">
              1.05 м²
              <br />
            </span>
          </div>
          <div className="text-3">
            <span className="text-wrapper-12">
              0.70/0.98 м²
              <br />
            </span>
          </div>
          <div className="text-3">
            <span className="text-wrapper-12">
              0.60/0.84 м²
              <br />
            </span>
          </div>
          <div className="text-3">
            <span className="text-wrapper-12">0.50/0.70 м²</span>
          </div>
        </div>
        <p className="element-2">
          ЕКСТРА КАЧЕСТВО – Равномерно оцветена дървесина без беловина и чепове на лицето. Възможно е наличие на
          сърцевидни лъчи/златна нишка,пулове/ и очички до 4мм. Допускат леки цветови разлики;за поръчка на
          селекция“Ех+“ се доплаща 30.00лв към цената на селекция Ех.
          <br />
          <br />
          Важно:
          <br />* СРОК НА ДОСТАВКА-ДО 60 РАБОТНИ ДНИ СЛЕД 50% АВАНСОВО ПЛАЩАНЕ
          <br />
          Дървесината е естествен продукт и допуска цветови разлики от месторастежа и наклона на влакната и фладера,
          както и в зависимост от Вашето устройство и неговия екран е сигурно, че цветовете на живо са различни.
          Заповядайте при нас.
          <br />
          Размерите с ширина до 50мм и 70мм. позволяват редене тип рибена кост и дюшеме.
          <br />
          Валидни са всички опции за доставка и монтаж на паркет „Коркос“ ООД – гр. Сливен.a
        </p>

        <button className="button-2" onClick={() => window.open(require("./montaj.jsx").default, "_blank")}>
          <div className="overlap">
          <img className="image-5" alt="Image" src={require("./images/image 4.png").default} />
          <div className="text-wrapper-13">услуги за монтаж</div>
        </div>
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(<Prod />, document.getElementById('root'));