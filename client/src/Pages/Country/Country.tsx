import dataFile from "../../data.json";
import { CountryDiv } from "./Country.styled";
import { useEffect, useState } from "react";
import { findCountry } from "../../Utils/FindCountry";
import CountryType from "../../Types/Country.type";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Country = () => {
  let i: string = window.location.pathname.split("/")[1];
  let country: CountryType | undefined = findCountry(i, dataFile);

  const [currenciesName, setCurrenciesName] = useState([]);
  const [languagesName, setLanguagesName] = useState([]);

  useEffect(() => {
    let currenciesArr: string[] = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    country!.currencies!
      ? country!.currencies!.forEach((obj: { code: string }) => {
          currenciesArr.push(obj.code);
        })
      : currenciesArr.push("No Currencies");
    setCurrenciesName(currenciesArr as any);
    let languagesArr: string[] = [];
    country!.languages!.forEach((obj: { name: string }) => {
      languagesArr.push(obj.name);
    });
    setLanguagesName(languagesArr as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CountryDiv>
      <div className="back flex justify-start items-center">
        <button
          className="btn rounded shadow py-2 px-6 my-5 flex gap-3"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <KeyboardBackspaceIcon /> Back
        </button>
      </div>
      <div className="content flex gap-20 mx-auto items-center my-3 h-full">
        <div className="image shadow-lg img-fluid w-2/6">
          <img src={country!.flag as any} alt={country!.name + " Flag"} />
        </div>
        <div className="text flex flex-col justify-evenly items-start h-full p-3">
          <div className="name font-extrabold text-xl text-start">
            {country!.name as any}
          </div>
          <div className="details flex flex-col h-1/2 flex-wrap gap-1 text-start gap-x-12">
            <div className="native-name">
              <span>Native Name: </span>
              {country!.nativeName as any}
            </div>
            <div className="population">
              <span>Population: </span>
              {country!.population.toLocaleString("en-US") as any}
            </div>
            <div className="region">
              <span>Region: </span>
              {country!.region as any}
            </div>
            <div className="sub-region">
              <span>Sub Region: </span>
              {country!.subregion as any}
            </div>
            <div className="capital">
              <span>Capital: </span>
              {country!.capital as any}
            </div>
            <div className="top-level-domain">
              <span>Top Level Domain: </span>
              {country!.topLevelDomain[0] as any}
            </div>
            <div className="currencies">
              <span>Currencies: </span>
              {currenciesName.join(", ")}
            </div>
            <div className="laguages">
              <span>Languages: </span>
              {languagesName.join(", ")}
            </div>
          </div>
          <div className="border-countries">
            <span>Border Countries: </span>
            {country!.borders
              ? country!.borders.map((str, index) => {
                  return (
                    <button
                      key={index}
                      className="py-2 px-4 m-2 border shadow cursor-pointer hover:opacity-50 ease-in-out duration-300"
                      onClick={() => {
                        window.location.href = `/${str}`;
                      }}
                    >
                      {findCountry(str, dataFile)!["name"]}
                    </button>
                  );
                })
              : "No Borders"}
          </div>
        </div>
      </div>
    </CountryDiv>
  );
};

export default Country;
