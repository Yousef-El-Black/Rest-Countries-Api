import { CardDiv } from "./Card.styled";
import Country from "../../Types/Country.type";

const Card = ({ country }: { country: Country }) => {
  const handleCard = () => {
    window.location.href = `/${country.alpha3Code}`;
  };

  return (
    <CardDiv
      className="card rounded shadow cursor-pointer"
      onClick={handleCard}
    >
      <div className="image">
        <img
          src={country.flags.png}
          alt={`${country.name} Flag`}
          className="rounded-t"
        />
      </div>
      <div className="text text-start indent-5">
        <h2 className="name py-3">{country.name}</h2>
        <div className="details">
          <p className="population">
            <span>Population:</span>
            {country.population}
          </p>
          <p className="region">
            <span>Region:</span>
            {country.region}
          </p>
          <p className="capital">
            <span>Capital:</span>
            {country.capital}
          </p>
        </div>
      </div>
    </CardDiv>
  );
};

export default Card;
