import React from "react";
import "./style.css";
import ReactDOM from 'react-dom';


export const Contacts = () => {
  return (
    <div className="contacts">
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
          <h1 className="h-1">Контакти</h1>
    
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <img className="img" alt="Image" src={require("./images/image 22.png").default} />
          <p className="element">
            гр. София, пл. Възраждане
            <br />
            ул. Марко Балабанов 1
          </p>
          <img className="image-2" alt="Image" src={require("./images/image 23.png").default} />
          <div className="text-wrapper-7">08888888888</div>
          <div className="rectangle-5" />
          <div className="text-wrapper-8">08888888888</div>
          <div className="rectangle-6" />
          <div className="text-wrapper-9">08888888888</div>
          <div className="rectangle-7" />
          <img className="image-3" alt="Image" src={require("./images/image 23.png").default} />
          <div className="text-wrapper-10">08888888888</div>
          <div className="rectangle-8" />
          <div className="text-wrapper-11">alabala@gmail.com</div>
          <img className="image-4" alt="Image" src={require("./images/image 25.png").default} />
          <img className="image-5" alt="Image" src={require("./images/image 25.png").default} />
          <img className="image-6" alt="Image" src={require("./images/image 24.png").default} />
          <img className="image-7" alt="Image" src={require("./images/image 26.png").default} />
        </div>
        <div className="group-2">
          <img className="image-8" alt="Image" src={require("./images/image 1.png").default} />
          <div className="group-3">
            <div className="text-wrapper-12">Информация</div>
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
            <div className="text-wrapper-12">Контакти</div>
            <div className="group-5">
              <p className="p">София, пл. Възраждане ул. Марко Балабанов 1</p>
              <img className="image-9" alt="Image" src={require("./images/image 8.png").default} />
            </div>
            <div className="group-6">
              <img className="image-9" alt="Image" src={require("./images/image 9.png").default} />
              <div className="text-wrapper-13">0888888888</div>
            </div>
            <div className="group-7">
              <img className="image-9" alt="Image" src={require("./images/image 9.png").default} />
              <div className="text-wrapper-13">0888888888</div>
            </div>
            <div className="group-8">
              <img className="image-9" alt="Image" src={require("./images/image 9(1).png").default} />
              <div className="text-wrapper-13">0888888888</div>
            </div>
            <div className="group-9">
              <img className="image-9" alt="Image" src={require("./images/image 9(1).png").default} />
              <div className="text-wrapper-13">0888888888</div>
            </div>
            <img className="image-10" alt="Image" src={require("./images/image 10.png").default} />
            <div className="text-wrapper-14">alabala@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Contacts />, document.getElementById('root'));