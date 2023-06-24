import { useEffect, useRef, useState } from 'react';
import './DropdownMenu2.scss';
import useToggle from '../../../hooks/useToggle';
import useCounter from '../../../hooks/useCounter';

function DropdownMenu2() {
  const [isOpen, toggle, buttonRef] = useToggle();

  const [totalCount, setTotalCount] = useState(0);

  const adultCounter = useCounter();
  const youthCounter = useCounter();
  const seniorCounter = useCounter();

  useEffect(() => {
    const sum = [adultCounter.count, youthCounter.count, seniorCounter.count].reduce((a, b) => a + b, 0);
    setTotalCount(sum)
  }, [adultCounter.count, youthCounter.count, seniorCounter.count])

  return (
    <section className="DropdownMenu2">
      <button
        className="DropdownMenu2-select"
        ref={buttonRef}
        onClick={toggle}
      >
        <span 
          className="DropdownMenu2-select-count">
            {`
            ${totalCount} 
            ${((adultCounter.count === 0 || adultCounter.count === 1) ? "Adult" : "Adults") ||
            ((youthCounter.count === 0 || youthCounter.count === 1 && seniorCounter.count === 0 || seniorCounter.count === 1) ? "Passenger" : "Passengers") ||
            ((adultCounter.count > 0 && (youthCounter.count > 0 || seniorCounter.count > 0)) ? "Passengers" : "Adult")}
          `}
        </span>, <span className="DropdownMenu2-select-membership">No discount card</span> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`${isOpen ? "show" : ""}`} id="option-arrow"><path d="M12 14.121l6.364-6.364a1 1 0 0 1 1.414 1.415l-7.07 7.07a.997.997 0 0 1-1.415 0l-7.071-7.07a1 1 0 1 1 1.414-1.415L12 14.121z" fill="#717da3"></path></svg>
      </button>
      <div className={`DropdownMenu2-options ${isOpen ? "show" : ""}`}>
        {/* all the counters from here */}
        <div className="DropdownMenu2-options-row adult">
          <div className="DropdownMenu2-options-row-left">
            <h3>Adult</h3>
            <p>26+ years</p>
          </div>
          <div className="DropdownMenu2-options-row-right droit">
            <button 
              className="adult-minus"
              onClick={adultCounter.decrement}
            >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill={adultCounter.count === 0 ? "#DCDFE9" : "#5E90CC"}>
                    <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
                    <path d="M9 15h14a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z"></path>
                  </g>
                </svg>
            </button>
            <p>{adultCounter.count}</p>
            <button
              className="adult-plus"
              onClick={adultCounter.increment}
            >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#5E90CC">
                    <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
                    <path d="M16 8a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6.001L17 23a1 1 0 0 1-2 0l-.001-6H9a1 1 0 0 1 0-2h6V9a1 1 0 0 1 1-1z"></path>
                  </g>
                </svg>
            </button>
          </div>
        </div>
        <div className="DropdownMenu2-options-row youth">
          <div className="DropdownMenu2-options-row-left">
            <h3>Youth</h3>
            <p>0-25 years</p>
          </div>
          <div className="DropdownMenu2-options-row-right droit">
            <button 
              className="adult-minus"
              onClick={youthCounter.decrement}
            >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill={youthCounter.count === 0 ? "#DCDFE9" : "#5E90CC"}>
                    <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
                    <path d="M9 15h14a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z"></path>
                  </g>
                </svg>
            </button>
            <p>{youthCounter.count}</p>
            <button
              className="adult-plus"
              onClick={youthCounter.increment}
            >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#5E90CC">
                    <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
                    <path d="M16 8a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6.001L17 23a1 1 0 0 1-2 0l-.001-6H9a1 1 0 0 1 0-2h6V9a1 1 0 0 1 1-1z"></path>
                  </g>
                </svg>
            </button>
          </div>
        </div>
        <div className="DropdownMenu2-options-row senior">
          <div className="DropdownMenu2-options-row-left">
            <h3>Senior</h3>
            <p>58+ years</p>
          </div>
          <div className="DropdownMenu2-options-row-right droit">
            <button 
              className="adult-minus"
              onClick={seniorCounter.decrement}
            >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill={seniorCounter.count === 0 ? "#DCDFE9" : "#5E90CC"}>
                    <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
                    <path d="M9 15h14a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z"></path>
                  </g>
                </svg>
            </button>
            <p>{seniorCounter.count}</p>
            <button
              className="adult-plus"
              onClick={seniorCounter.increment}
            >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#5E90CC">
                    <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
                    <path d="M16 8a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6.001L17 23a1 1 0 0 1-2 0l-.001-6H9a1 1 0 0 1 0-2h6V9a1 1 0 0 1 1-1z"></path>
                  </g>
                </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DropdownMenu2;
