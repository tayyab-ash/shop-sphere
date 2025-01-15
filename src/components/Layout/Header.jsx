import React from "react";
import "../../styles/Variables.css";
import logo from "../../assets/porto45-logo.png";

function Header() {
  return (
    <div>
      <header className="h-20 bg-bg_primary ">
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="flex flex-shrink justify-between h-fit items-center w-full">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <ul className="flex justify-between items-center font-bold text-sm text-text_primary">
                <li className="p-2">
                  <a href="">Categories</a>
                </li>
                <li className="p-2">
                  <a href="">Other Products </a>
                </li>
                <li className="p-2">
                  <a href="">Track Order</a>
                </li>
                <li className="p-2">
                  <a href="">About US</a>
                </li>
              </ul>
            </div>
            <div className="flex text-custom_sm w-full min-w-[200px] max-w-[420px]">
              <span className="flex-grow">
                <input
                  className="px-2 py-3 border rounded-tl-md rounded-bl-md outline-none w-full min-w-[150px] max-w-[300px] transition-all"
                  type="text"
                  placeholder="Search..."
                />
              </span>
              <div className="flex-grow">
                <button className="px-2 py-3 border-t border-b bg-white text-text_secondary min-w-[120px] max-w-[250px] text-right transition-all">
                  All Categories
                </button>
              </div>
              <button className="px-2 py-3 min-w-[50px] border bg-white text-text_secondary rounded-tr-md rounded-br-md transition-all">
              <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            <div className="flex text-2xl">
              <span>
                <i className="m-3 fa-solid fa-user"></i>
              </span>
              <span>
                <i className="m-3  fa-solid fa-heart"></i>
              </span>
              <span>
                <i className=" m-3 fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
