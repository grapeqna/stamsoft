import React from "react";
import "./style.css";
import ReactDOM from 'react-dom';
;
export const Uslugi = () => {
  return (
    <div className="uslugi">
      <div className="div">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src={require("./images/Rectangle 10.png").default} />
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
          <h1 className="h-1">Услуги</h1>

          <button className="button-6" onClick={() => window.open(require("./montaj.jsx").default, "_blank")}>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <img className="img" alt="Image" src={require("./images/image 122.png").default} />
              <div className="text-wrapper-7">услуга</div>
              <img className="image-2" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>


          <button className="button-6" onClick={() => window.open(require("./montaj.jsx").default, "_blank")}>
          <div className="overlap-group-wrapper">
              <div className="overlap-group">
                 <img className="img" alt="Image" src={require("./images/image 13.png").default} />
              <div className="text-wrapper-7">услуга</div>
              <img className="image-2" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

          <button className="button-6" onClick={() => window.open(require("./montaj.jsx").default, "_blank")}>
          <div className="div-wrapper">
            <div className="overlap-group">
              <img className="img" alt="Image" src={require("./images/image 14.png").default} />
              <div className="text-wrapper-7">услуга</div>
              <img className="image-2" alt="Image" src={require("./images/image 6.png").default} />
            </div>
          </div>
          </button>

          <button className="button-6" onClick={() => window.open(require("./montaj.jsx").default, "_blank")}>
          <div className="group-10">
          <div className="overlap-group">
          <img className="img" alt="Image" src={require("./images/image 15.png").default} />
              <div className="text-wrapper-7">услуга</div>
              <img className="image-2" alt="Image" src={require("./images/image 6.png").default} />
            </div>
        </div>
        </button>

        <button className="button-6" onClick={() => window.open(require("./montaj.jsx").default, "_blank")}>
          <div className="group-11">
          <div className="overlap-group">
          <img className="img" alt="Image" src={require("./images/image 16.png").default} />
              <div className="text-wrapper-7">услуга</div>
              <img className="image-2" alt="Image" src={require("./images/image 6.png").default} />
            </div>
        </div>
        </button>

        <button className="button-6" onClick={() => window.open(require("./montaj.jsx").default, "_blank")}>
          <div className="group-12">
          <div className="overlap-group">
          <img className="img" alt="Image" src={require("./images/image 17.png").default} />
              <div className="text-wrapper-7">услуга</div>
              <img className="image-2" alt="Image" src={require("./images/image 6.png").default} />
            </div>
        </div>
        </button>

        </div>
        <div className="group-2">
          <img className="image-3" alt="Image" src={require("./images/image 1.png").default} />
          <div className="group-3">
            <div className="text-wrapper-8">Информация</div>
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
            <div className="text-wrapper-8">Контакти</div>
            <div className="group-5">
              <p className="p">София, пл. Възраждане ул. Марко Балабанов 1</p>
              <img className="image-4" alt="Image" src={require("./images/image 8.png").default} />
            </div>
            <div className="group-6">
              <img className="image-4" alt="Image" src={require("./images/image 9.png").default} />
              <div className="text-wrapper-9">0888888888</div>
            </div>
            <div className="group-7">
              <img className="image-4" alt="Image" src={require("./images/image 9.png").default} />
              <div className="text-wrapper-9">0888888888</div>
            </div>
            <div className="group-8">
              <img className="image-4" alt="Image" src={require("./images/image 9(1).png").default} />
              <div className="text-wrapper-9">0888888888</div>
            </div>
            <div className="group-9">
              <img className="image-4" alt="Image" src={require("./images/image 9(1).png").default} />
              <div className="text-wrapper-9">0888888888</div>
            </div>
            <img className="image-5" alt="Image" src={require("./images/image 10.png").default} />
            <div className="text-wrapper-10">alabala@gmail.com</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

ReactDOM.render(<Uslugi />, document.getElementById('root'));
