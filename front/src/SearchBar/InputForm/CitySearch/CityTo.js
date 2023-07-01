import axios from "axios";
import { useState } from "react";
import useToggle from "../../../hooks/useToggle";

function CityTo({ cityFrom }) {
  const [isOpen, toggle, ref, setIsOpen] = useToggle();
  const [city, setCity] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // onClick it fetches for 5 populars cities from the city selected before
  const handle5PopularCitiesTo = () => {
    axios.get(`https://api.comparatrip.eu/cities/popular/from/${cityFrom}/5`)
      .then((response) => {
        setSearchResults(response.data)
        setIsOpen(true)
      }).catch((error) => {
        console.error(error);
      })
  }

  //fetches the api, depend on controled input value and setSearchResults the api received 
  const handleCity = (e) => {
    setCity(e.target.value)
    axios.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${city}`)
      .then((response) => {
        setSearchResults(response.data)
        if (city) {
          setIsOpen(true)
        }
      }).catch((error) => {
        console.log(error);
      });
  }

  // this function sets the selected city to be shown in the input and closes the searchResults
  const handleResultClick = (selectedCity) => {
    setCity(selectedCity);
    setIsOpen(false)
  }

  return (
    <div className="InputForm-field">
      <svg className="InputForm-field-logo second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#A0AAC3"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
      <input
        type="text"
        name="to-city"
        id="to-city"
        placeholder="To: City, Station Or Airport"
        onClick={handle5PopularCitiesTo}
        onBlur={() => setIsOpen(false)}
        value={city}
        onChange={handleCity}
      />
      <ul className={`InputForm-field-searchResult ${isOpen ? "show" : ""}`}>
          {searchResults.map(result => (
            <li key={result.city_id} onClick={() => handleResultClick(result.local_name)}><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#A0AAC3"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg></span>{result.local_name}</li>
          ))}
      </ul>
    </div>
  )
}

export default CityTo;
