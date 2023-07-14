import React from "react";
import "./style.css";
import ReactDOM from 'react-dom';


export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="group">
          <div className="navbar">
            <img className="image" alt="Image" src={require("./images/image 1.png").default} />
            <div className="text-wrapper">начало</div>
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
        <div className="overlap">
          <img className="img" alt="Image" src={require("./images/image 2.png").default} />
          <h1 className="h-1">
            Виал
            <br />
            Паркет
          </h1>
        
          <button className="button-4" onClick={() => window.open(require("./products.jsx").default, "_blank")}>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-7">
                вижте нашите
                <br />
                продукти
              </div>
              <img className="image-2" alt="Image" src={require("./images/image 3.png").default} />
            </div>
          </div>
          </button>

          <button className="button-2" onClick={() => window.open(require("./contacts.jsx").default, "_blank")}>
          <div className="rectangle" />
          <div className="text-wrapper-8">контакти</div>
          <img className="image-3" alt="Image" src={require("./images/image 4.png").default} />
          </button>
          
          <div className="rectangle-2" />
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <img className="image-4" alt="Image" src={require("./images/image 5.png").default} />
              <div className="text-wrapper-9">паркет</div>
            </div>
          </div>
          <div className="rectangle-3" />
          <div className="text-wrapper-10">Най-продавани</div>
          
          <button className="button-5" onClick={() => window.open(require("./prod.jsx").default, "_blank")}>
          <div className="div-wrapper">
            <div className="overlap-2">
              <img className="image-4" alt="Image" src={require("./images/image 5.png").default} />
              <div className="text-wrapper-9">паркет</div>
              <img className="image-5" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

          <button className="button-5" onClick={() => window.open(require("./prod.jsx").default, "_blank")}>
          <div className="group-2">
            <div className="overlap-2">
              <img className="image-4" alt="Image" src={require("./images/image 5.png").default} />
              <div className="text-wrapper-9">паркет</div>
              <img className="image-5" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

          <button className="button-5" onClick={() => window.open(require("./prod.jsx").default, "_blank")}>
          <div className="group-3">
            <div className="overlap-2">
              <img className="image-4" alt="Image" src={require("./images/image 5.png").default} />
              <div className="text-wrapper-9">паркет</div>
              <img className="image-5" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

          <button className="button-5" onClick={() => window.open(require("./prod.jsx").default, "_blank")}>
          <div className="group-4">
            <div className="overlap-2">
              <img className="image-4" alt="Image" src={require("./images/image 5.png").default} />
              <div className="text-wrapper-9">паркет</div>
              <img className="image-5" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>


          <button className="button-5" onClick={() => window.open(require("./prod.jsx").default, "_blank")}>
          <div className="group-5">
            <div className="overlap-2">
              <img className="image-4" alt="Image" src={require("./images/image 5.png").default} />
              <div className="text-wrapper-9">паркет</div>
              <img className="image-5" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

          <div className="rectangle-4" />
          <div className="text-wrapper-11">За нас</div>
          <p className="element">
            Търговско дружество ВИАЛ ПАРКЕТ ЕООД е създадено през 1996г. и се утвърди като безспорен лидер на пазара на
            подови настилки от масивна дървесина. При нас ще намерите най-голямото разнообразие от качествени паркети на
            водещите производители както в България, така и в световен мащаб. Асортиментът ни включва уникално
            разнообразие от български и екзотични масивни паркети, трислойни паркети, ламинирани паркети и др.
            <br />
            ВИАЛ ПАРКЕТ ЕООД е основен партньор на лидерите в строителния бизнес, архитектурата и дизайна, като наши
            паркети могат да се видят както в редица държавни институции, така и в хиляди частни домове.
            <br />
            Фирмената ни политика винаги е била ориентирана към създаването на ползотворна бизнес атмосфера, стремейки
            се да удовлетворим всички изисквания относно качеството на предлаганите от нас продукти и услуги.
            <br />
            Доверявайки се на своите висококвалифицирани монтажни групи и модерна техника, фирмата ни е първата и
            единствена в България, даваща от 5 до 30 годишна писмена гаранция за полаганите подови настилки.
            <br />
            Учтиво Ви каним и Вие да се присъедините към многобройните клиенти на ВИАЛ ПАРКЕТ ЕООД!
          </p>


          <button className="button-3" onClick={() => window.open("http://vialparket.com/wp-content/uploads/2023/06/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82-%D0%903-1024x724.jpg", "_blank")}>
          <div className="group-6">
            <div className="overlap-4">
              <div className="text-wrapper-12">
                Спечелен
                <br />
                европейски конкурс
              </div>
              <img className="image-8" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

          <button className="button-3" onClick={() => window.open(require("./tablici.jsx").default, "_blank")}>
          <div className="group-7">
            <div className="overlap-4">
              <div className="text-wrapper-12">Сравнителни таблици</div>
              <img className="image-8" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

        </div>
        <div className="overlap-5">
          <div className="rectangle-5" />
          <div className="text-wrapper-13">Промоции</div>

          <button className="button-5" onClick={() => window.open(require("./prod.jsx").default, "_blank")}>
          <div className="group-8">
            <div className="overlap-2">
            <div className="overlap-2">
                <img className="image-4" alt="Image" src={require("./images/image 5.png").default} />
              </div>
              <div className="image-wrapper">
                <img className="image-9" alt="Image" src={require("./images/image 7.png").default} />
              </div>
              <div className="text-wrapper-9">паркет</div>
              <img className="image-5" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

          <button className="button-5" onClick={() => window.open(require("./prod.jsx").default, "_blank")}>
          <div className="group-9">
            <div className="overlap-2">
            <div className="overlap-2">
                <img className="image-4" alt="Image" src={require("./images/image 5.png").default} />
              </div>
              <div className="img-wrapper">
                <img className="image-9" alt="Image" src={require("./images/image 7.png").default} />
              </div>
              <div className="text-wrapper-9">паркет</div>
              <img className="image-5" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

          <button className="button-5" onClick={() => window.open(require("./prod.jsx").default, "_blank")}>
          <div className="group-10">
            <div className="overlap-2">
            <div className="overlap-2">
                <img className="image-4" alt="Image" src={require("./images/image 5.png").default} />
              </div>
              <div className="overlap-group-2">
                <img className="image-9" alt="Image" src={require("./images/image 7.png").default} />
              </div>
              <div className="text-wrapper-9">паркет</div>
              <img className="image-5" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

          <button className="button-5" onClick={() => window.open(require("./prod.jsx").default, "_blank")}>
          <div className="group-11">
            <div className="overlap-2">
            <div className="overlap-2">
                <img className="image-4" alt="Image" src={require("./images/image 5.png").default} />
              </div>
              <div className="overlap-group-3">
                <img className="image-9" alt="Image" src={require("./images/image 7.png").default} />
              </div>
              <div className="text-wrapper-9">паркет</div>
              <img className="image-5" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

          <button className="button-5" onClick={() => window.open(require("./prod.jsx").default, "_blank")}>
          <div className="group-12">
            <div className="overlap-2">
            <div className="overlap-2">
                <img className="image-4" alt="Image" src={require("./images/image 5.png").default} />
              </div>
              <div className="overlap-group-4">
                <img className="image-9" alt="Image" src={require("./images/image 7.png").default} />
              </div>
              <div className="text-wrapper-9">паркет</div>
              <img className="image-5" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>
          
          <div className="group-13">
            <img className="image-10" alt="Image" src={require("./images/image 1.png").default} />
            <div className="group-14">
              <div className="text-wrapper-14">Информация</div>
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
            <div className="group-15">
              <div className="text-wrapper-14">Контакти</div>
              <div className="group-16">
                <p className="p">София, пл. Възраждане ул. Марко Балабанов 1</p>
                <img className="image-11" alt="Image" src={require("./images/image 8.png").default} />
              </div>
              <div className="group-17">
                <img className="image-11" alt="Image" src={require("./images/image 9.png").default} />
                <div className="text-wrapper-15">0888888888</div>
              </div>
              <div className="group-18">
                <img className="image-11" alt="Image" src={require("./images/image 9.png").default} />
                <div className="text-wrapper-15">0888888888</div>
              </div>
              <div className="group-19">
                <img className="image-11" alt="Image" src={require("./images/image 9(1).png").default} />
                <div className="text-wrapper-15">0888888888</div>
              </div>
              <div className="group-20">
                <img className="image-11" alt="Image" src={require("./images/image 9(1).png").default} />
                <div className="text-wrapper-15">0888888888</div>
              </div>
              <img className="image-12" alt="Image" src={require("./images/image 10.png").default} />
              <div className="text-wrapper-16">alabala@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Home />, document.getElementById('root'));
