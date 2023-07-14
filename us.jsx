import React from "react";
import "./style.css";
import ReactDOM from 'react-dom';
;

export const Us = () => {
  return (
    <div className="us">
      <div className="div">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src={require("./images/Rectangle 11.png").default} />
          <div className="group">
            <div className="navbar">
              <img className="image" alt="Image" src={require("./images/image 1.png").default} />
              <button className="button" onClick={() => window.open(require("./index.jsx").default, "_blank")}>
              <div className="text-wrapper">начало</div>
              </button>

              <button className="button" onClick={() => window.open(require("./contacts.jsx").default, "_blank")}>
              <div className="text-wrapper-2">контакти</div>
              </button>

              <button className="button" onClick={() => window.open(require("./promotions.jsx").default, "_blank")}>
              <div className="text-wrapper-3">промоции</div>
              </button>

              <button className="button" onClick={() => window.open(require("./uslugi.jsx").default, "_blank")}>
              <div className="text-wrapper-4">услуги</div>
              </button>

              <button className="button" onClick={() => window.open(require("./products.jsx").default, "_blank")}>
              <div className="text-wrapper-5">продукти</div>
              </button>

              <button className="button" onClick={() => window.open(require("./us.jsx").default, "_blank")}>
              <div className="text-wrapper-6">за нас</div>
              </button>
            </div>
          </div>
          <h1 className="h-1">За нас</h1>
        
          <div className="rectangle-2" />
          <p className="element">
            Търговско дружество ВИАЛ ПАРКЕТ ЕООД е създадено през 1996г. и се утвърди като безспорен лидер на пазара на
            подови настилки от масивна дървесина. При нас ще намерите най-голямото разнообразие от качествени паркети на
            водещите производители както в България, така и в световен мащаб. Асортиментът ни включва уникално
            разнообразие от български и екзотични масивни паркети, трислойни паркети, ламинирани паркети и др.
            <br />
            <br />
            ВИАЛ ПАРКЕТ ЕООД е основен партньор на лидерите в строителния бизнес, архитектурата и дизайна, като наши
            паркети могат да се видят както в редица държавни институции, така и в хиляди частни домове.
            <br />
            <br />
            Фирмената ни политика винаги е била ориентирана към създаването на ползотворна бизнес атмосфера, стремейки
            се да удовлетворим всички изисквания относно качеството на предлаганите от нас продукти и услуги.
            <br />
            <br />
            Доверявайки се на своите висококвалифицирани монтажни групи и модерна техника, фирмата ни е първата и
            единствена в България, даваща от 5 до 30 годишна писмена гаранция за полаганите подови настилки.
            <br />
            <br />
            Учтиво Ви каним и Вие да се присъедините към многобройните клиенти на ВИАЛ ПАРКЕТ ЕООД!
          </p>
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
              <img className="image-2" alt="Image" src={require("./images/image 9.png").default}/>
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
      </div>
    </div>
  );
};

ReactDOM.render(<Us />, document.getElementById('root'));