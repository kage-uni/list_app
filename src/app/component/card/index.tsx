import React, { useState } from "react";
import Link from "next/link";

type buttonStatus = {
  buttonStandby: boolean;
  buttonStart: boolean;
  buttonCompleted: boolean;
};

type buttonShow = {
  show: boolean;
};

const Card = () => {
  const [buttonStatus, setButtonStatus] = useState({
    buttonStandby: true,
    buttonStart: false,
    buttonCompleted: false,
  });

  const [buttonShow, setButtonShow] = useState({
    show: false,
  });

  const handleStatusClick = (buttonName: keyof buttonStatus) => {
    setButtonStatus({
      ...buttonStatus,
      [buttonName]: true,
      buttonStandby: buttonName === "buttonStandby" ? true : false,
      buttonStart: buttonName === "buttonStart" ? true : false,
      buttonCompleted: buttonName === "buttonCompleted" ? true : false,
    });
  };

  const handleShowClick = () => {
    setButtonShow((prevButtonShow) => ({
      show: !prevButtonShow.show,
    }));
  };

  return (
    <>
      <li className="m-2 box-border w-72 rounded bg-white p-4 shadow drop-shadow">
        <h2>cardName_23-0000 ●●●●</h2>
        <p>customer_顧客名</p>
        <div className="pt-1">
          <p>process status_仕掛状況</p>
          <div className="flex justify-start pl-2">
            <button
              className={
                buttonStatus.buttonStandby
                  ? "mx-1 h-7 w-24 transform cursor-default rounded bg-blue-400 px-1 text-white"
                  : "buttonAnimation01 mx-1 h-7 w-24 rounded bg-green-400 px-1 text-white"
              }
              onClick={() => handleStatusClick("buttonStandby")}
            >
              {buttonStatus.buttonStandby === true ? "Standby" : "Complete"}
            </button>
            <button
              className={
                buttonStatus.buttonStart
                  ? "mx-1 h-7 w-14 transform cursor-default rounded border-2 border-yellow-400 bg-white px-1 text-yellow-400"
                  : "buttonAnimation01 mx-1 h-7 w-14 rounded bg-gray-200 px-1 text-gray-500"
              }
              onClick={() => handleStatusClick("buttonStart")}
            >
              Start
            </button>
          </div>
        </div>
        <p className="pt-1">work status：DTP</p>
        <p className="pt-1">
          personInCharge:<button className="pl-2">担当</button>
        </p>
        <button className="pt-2">deadline：●/●</button>
        <button
          className="flex flex-col justify-end"
          onClick={() => handleShowClick()}
        >
          <span
            className={
              buttonShow.show
                ? "openCloseAnimation01_close h-5 transition-all delay-700"
                : "openCloseAnimation01_open h-fit transition-all delay-700"
            }
          ></span>
          <ul
            className={
              buttonShow.show
                ? "block scale-y-0 transform opacity-0 transition-opacity duration-1000"
                : "block scale-100 transform pl-2 opacity-100 transition-opacity delay-1000 duration-1000"
            }
          >
            <li className={buttonShow.show ? "hidden" : "block"}>test1</li>
            <li className={buttonShow.show ? "hidden" : "block"}>test2</li>
            <li className={buttonShow.show ? "hidden" : "block"}>test3</li>
            <li className={buttonShow.show ? "hidden" : "block"}>test4</li>
          </ul>
          <span
            className={
              buttonShow.show
                ? "openCloseAnimation01_close h-0 translate-x-0 opacity-0 transition-transform delay-1000"
                : "openCloseAnimation01_open translate-x-60 rotate-180 transition-transform delay-700"
            }
          ></span>
        </button>
      </li>
    </>
  );
};

export default Card;
