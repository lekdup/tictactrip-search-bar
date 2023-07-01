import './InputForm.scss';
import CityFrom from './CitySearch/CityFrom';
import CityTo from './CitySearch/CityTo';
import { useState } from 'react';

function InputForm({ handleSubmit }) {
  // const today = new Date().toDateString();
  const [cityFrom, setCityFrom] = useState("");

  return (
    <section className="InputForm-container">
      <form className="InputForm" onSubmit={handleSubmit}>
        <CityFrom setCityFrom={setCityFrom}/>
        <CityTo cityFrom={cityFrom}/>
        <div className="InputForm-field dates">
          {/* <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePicker
            placeholderText="Add return"
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          /> */}

          <div className="InputForm-field-fromDate">
            <input
              type="date"
              name="from-date"
              id="from-date"
            />
          </div>
          <div className="InputForm-field-toDate">
            <input
              type="date"
              name="to-date"
              id="to-date"
              placeholder="Add return"
            />
          </div>
        </div>
        <button type="submit" className="InputForm-Btn">Search</button>
      </form>
    </section>
  )
}

export default InputForm;
