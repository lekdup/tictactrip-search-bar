import './InputForm.scss';
import CityFrom from './CityFrom/CityFrom';

function InputForm() {
  const today = new Date().toDateString();

  return (
    <section className="InputForm-container">
      <form className="InputForm">
        <CityFrom />
        <div className="InputForm-field">
          <svg className="InputForm-field-logo second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#A0AAC3"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <input
            type="text"
            name="to-city"
            id="to-city"
            placeholder="To: City, Station Or Airport"
          />
        </div>
        <div className="InputForm-field">
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
        <button type="button" className="InputForm-Btn">Search</button>
      </form>
    </section>
  )
}

export default InputForm;
