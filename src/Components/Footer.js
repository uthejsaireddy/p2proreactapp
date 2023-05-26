import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

import { BsDiscord } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { InputText } from "primereact/inputtext";

import { Button } from "primereact/button";

function Footer() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const iconObj = {
    twitter: <AiFillTwitterCircle className="ft22" />,
    instagram: <AiFillInstagram className="ft22" />,
    youtube: <AiFillYoutube className="ft22" />,
    github: <AiFillGithub className="ft22" />,
    discord: <BsDiscord className="ft22" />,
  };

  //   AiFillTwitterCircle
  // AiFillInstagram
  // AiFillYoutube
  // AiFillGithub
  // BsDiscord

  let secondColumnData = [
    "Profile",
    "MarketPlace",
    "Creators",
    "Activity",
    "Collection",
  ];

  let thirdColumnData = [
    "Upload",
    "Connect Wallet",
    "Our Blog",
    "Item Details",
    "Contact Us",
  ];

  const FirstColumn = () => {
    return (
      <>
        <span>
          {"P2E Pro NFT is a shared liquidity NFT market smart contract"}
        </span>
        <div>
          <label htmlFor="Language" className="font-bold block mb-2">
            Language
          </label>
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="w-full md:w-14rem"
          />
        </div>
      </>
    );
  };

  const SecondColumn = () => {
    return (
      <>
        <b>Market Plac</b>
        {secondColumnData.map((d) => (
          <div>{d}</div>
        ))}
      </>
    );
  };

  const ThirdColumn = () => {
    return (
      <>
        <b>Company</b>
        {thirdColumnData.map((d) => (
          <div>{d}</div>
        ))}
      </>
    );
  };

  const FourthColumn = () => {
    return (
      <>
        <b>Join NewsLetter</b>
        <div className="mt-5 inlinFlx">
          <InputText
            id="alphanumeric"
            keyfilter="alphanum"
            className="w-full"
          />
          <Button label="Submit" />
        </div>
        <div className=" mt-3 inlinFlx">
          {Object.keys(iconObj).map((d) => (
            <span className="card">{iconObj[d]}</span>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="mt-2 inlinFlx width100">
        <>
          <span className="width25">
            <FirstColumn />
          </span>
          <span className="width25">
            <SecondColumn />
          </span>
          <span className="width25">
            <ThirdColumn />
          </span>
          <span className="width25">
            <FourthColumn />
          </span>
        </>
      </div>
      <div align="center">CopyRight 2022.Created with love By P2E Pro NFT</div>
    </>
  );
}

export default Footer;
