import axios from "axios";
import { useState } from "react";
import useToggle from "../../../hooks/useToggle";

function CityFrom() {
  const [isOpen, toggle, setIsOpen] = useToggle();
  const [city, setCity] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleCity = (e) => {
    setCity(e.target.value)
    // setIsOpen(true)
    toggle();
    axios.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${city}`)
      .then((response) => {
        console.log(response.data);
        setSearchResults(response.data)
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="InputForm-field">
      <svg className="InputForm-field-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#A0AAC3"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
      <input
        type="text"
        name="from-city"
        id="from"
        placeholder="From: City, Station Or Airport"
        value={city}
        onChange={handleCity}
      />
      <ul className={`InputForm-field-searchResult ${!isOpen ? "show" : ""}`}>
          {searchResults.map(result => (
            <li key={result.city_id} onClick={(e) => {setCity(e.target.value)}}><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#A0AAC3"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg></span>{result.local_name}</li>
          ))}
      </ul>
    </div>
  )
}

export default CityFrom;
