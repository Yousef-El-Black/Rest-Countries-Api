// Import
import { useState, useEffect } from "react";
import {
  HomeContainer,
  HomeDiv,
  SearchInput,
  RegionFilter,
  SearchIconDiv,
} from "./Home.styled";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../../Components/Card/Card";
import dataFile from "../../data.json";

const Home = () => {
  const [data, setData] = useState([]);

  const handleSearch = (e: any) => {
    setData(
      dataFile.filter((country) => {
        return (
          country.name.toLowerCase() === e.target.value.toLowerCase() ||
          "" === e.target.value
        );
      }) as any
    );
  };

  const handleSelect = (e: any) => {
    setData(
      dataFile.filter((country) => {
        return country.region === e.target.value || "" === e.target.value;
      }) as any
    );
    console.log(e.target.value);
  };

  useEffect(() => {
    setData(dataFile as any);
  }, []);

  return (
    <HomeDiv className="home">
      <HomeContainer className="container flex flex-col gap-5 py-10">
        <nav className="flex justify-between items-center">
          <div className="search-box rounded shadow-lg relative">
            <SearchIconDiv className="absolute h-full flex items-center pl-5">
              <SearchIcon />
            </SearchIconDiv>
            <SearchInput
              type="text"
              name=""
              id=""
              className="indent-10 pl-5"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <RegionFilter
            className="rounded shadow-lg indent-3"
            name="region"
            id="region"
            onChange={(e) => handleSelect(e)}
          >
            <option value="" defaultValue={"FilterByRegion"}>
              All Regions
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </RegionFilter>
        </nav>
        <div className="contries flex flex-wrap justify-between items-start mt-5 gap-10">
          {data.map((country: any, index: any) => {
            return <Card country={country} key={index} />;
          })}
        </div>
      </HomeContainer>
    </HomeDiv>
  );
};

export default Home;
