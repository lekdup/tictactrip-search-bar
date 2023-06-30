import { useEffect, useState } from 'react';
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
        <span className="DropdownMenu2-select-profile">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" fill="#717da3"/></svg>
        </span>
        <span className="DropdownMenu2-select-count">{`${totalCount} `}</span>
        <span className="DropdownMenu2-select-membership">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" size="24" color="#717da3"><path d="M15.375 15.375c2.025 0 3.825-.9 5.063-2.25H21v6.75C21 20.55 20.55 21 19.875 21H4.125C3.45 21 3 20.55 3 19.875v-6.75h7.313c1.237 1.35 3.037 2.25 5.062 2.25zm-6.75-6.75c0 .787.113 1.575.338 2.25H3v-2.25C3 7.95 3.45 7.5 4.125 7.5h4.613c-.113.338-.113.787-.113 1.125zm6.75 5.625c-3.037 0-5.625-2.475-5.625-5.625S12.225 3 15.375 3 21 5.475 21 8.625s-2.475 5.625-5.625 5.625zm1.913-8.662l-4.726 5.174.788.788 4.725-5.175-.787-.787zm.337 6.3a1.013 1.013 0 1 0 0-2.026 1.013 1.013 0 0 0 0 2.025zm-4.5-4.5a1.013 1.013 0 1 0 0-2.026 1.013 1.013 0 0 0 0 2.026z" fill="currentColor" fillRule="evenodd"></path></svg>
        </span>
      </button>
      <div className={`DropdownMenu2-options ${isOpen ? "show" : ""}`}>
        {/* all the counters from here */}
        <div className="DropdownMenu2-options-row">
          <h3>Passengers</h3>
          <button className="DropdownMenu2-options-row-closeBtn" onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="#717da3" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </button>
        </div>
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
