import React from "react";
import "./style.css";
import ReactDOM from 'react-dom';

export const Tablici = () => {
  return (
    <div className="tablici">
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
          <h1 className="h-1">Сравнителни таблици</h1>

         
        
          <button className="button-7" onClick={() => window.open("http://vialparket.com/wp-content/uploads/2023/01/IMG_0001-1-724x1024.jpg", "_blank")}>
          <img className="img" alt="Rectangle" src={require("./images/Rectangle 20.png").default} />
          <p className="p">
            Ценова листа <br />
            Дъбов паркет и дюшеме
          </p>
          <img className="image-2" alt="Image" src={require("./images/image 4.png").default} />
            </button>

         <button className="button-7" onClick={() => window.open("http://vialparket.com/wp-content/uploads/2023/01/%D0%A6%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0-%D0%BB%D0%B8%D1%81%D1%82%D0%B0-%D1%87%D0%B5%D1%80%D0%B5%D1%88%D0%B0-724x1024.jpg", "_blank")}>
          <img className="rectangle-2" alt="Rectangle" src={require("./images/Rectangle 21.png").default} />
          <div className="text-wrapper-7">
            Ценова листа <br />
            Паркет череша
          </div>
          <img className="image-3" alt="Image" src={require("./images/image 4.png").default} />
          </button>

        </div>
        <div className="group-2">
          <img className="image-4" alt="Image" src={require("./images/image 1.png").default} />
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
              <p className="text-wrapper-9">София, пл. Възраждане ул. Марко Балабанов 1</p>
              <img className="image-5" alt="Image" src={require("./images/image 8.png").default} />
            </div>
            <div className="group-6">
              <img className="image-5" alt="Image" src={require("./images/image 9.png").default} />
              <div className="text-wrapper-10">0888888888</div>
            </div>
            <div className="group-7">
              <img className="image-5" alt="Image" src={require("./images/image 9.png").default} />
              <div className="text-wrapper-10">0888888888</div>
            </div>
            <div className="group-8">
              <img className="image-5" alt="Image" src={require("./images/image 9(1).png").default} />
              <div className="text-wrapper-10">0888888888</div>
            </div>
            <div className="group-9">
              <img className="image-5" alt="Image" src={require("./images/image 9(1).png").default} />
              <div className="text-wrapper-10">0888888888</div>
            </div>
            <img className="image-6" alt="Image" src={require("./images/image 10.png").default} />
            <div className="text-wrapper-11">alabala@gmail.com</div>
          </div>
        </div>

        <button className="button-7" onClick={() => window.open("http://vialparket.com/wp-content/uploads/2023/04/IMG_0001-724x1024.jpg", "_blank")}>
        <img className="rectangle-5" alt="Rectangle" src={require("./images/Rectangle 23.png").default} />
        <div className="overlap-group">
          <div className="text-wrapper-12">
            Ценова листа <br />
            Паркет ясен
          </div>
          <img className="image-7" alt="Image" src={require("./images/image 4.png").default} />
        </div>
        </button>

        <button className="button-7" onClick={() => window.open("http://vialparket.com/wp-content/uploads/2023/01/%D0%9E%D0%BF%D1%86%D0%B8%D0%B8-%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6-724x1024.jpg", "_blank")}>
        <img className="img-2" alt="Rectangle" src={require("./images/Rectangle 22.png").default} />
        <div className="overlap-2">
          <p className="text-wrapper-13">
            Ценова листа <br />
            Дъбов паркет и дюшеме
          </p>
          <img className="image-8" alt="Image" src={require("./images/image 4.png").default} />
        </div>
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<Tablici />, document.getElementById('root'));