import { useEffect, useRef, useState } from 'react';
import './DropdownMenus.scss';

function DropdownMenus() {
  const [isOpen, setIsOpen] = useState();
  const [journeyOption, setJourneyOption] = useState('One-way');
  const buttonRef = useRef();

  // when clicked anywhere out of the button set toggle to false
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (buttonRef.current && !buttonRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleButtonClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const handleOptionClick = (option) => {
      setJourneyOption(option);
      setIsOpen(false);
    }

    console.log(journeyOption);
  return (
    <div className="DropdownMenus">
      <button
        className="DropdownMenus-select"
        ref={buttonRef}
        onClick={handleButtonClick}
      >
        {journeyOption} <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14.121l6.364-6.364a1 1 0 0 1 1.414 1.415l-7.07 7.07a.997.997 0 0 1-1.415 0l-7.071-7.07a1 1 0 1 1 1.414-1.415L12 14.121z" fill="currentColor"></path></svg>
      </button>
      <div className={`DropdownMenus-options ${isOpen ? "show" : ""}`}>
        <div className="DropdownMenus-options-journey" onClick={() => {handleOptionClick('One-way')}}>
          {journeyOption === 'One-way' &&
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" size="18" color="#5E90CC"><path fill="currentColor" fillRule="evenodd" d="M21.602 4.3l.015.015c.403.403.41 1.054.016 1.465L9.053 18.91a1.047 1.047 0 0 1-1.512 0l-5.25-5.472a1.047 1.047 0 0 1 .016-1.465l.015-.015a1.02 1.02 0 0 1 1.46.019l4.136 4.36a.524.524 0 0 0 .76.001l11.46-12.021a1.022 1.022 0 0 1 1.464-.018z"></path></svg>
          }
          <p>One-way</p>
        </div>
        <div className="DropdownMenus-options-journey" onClick={() => {handleOptionClick('Round trip')}}>
          {journeyOption === 'Round trip' &&
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" size="18" color="#5E90CC"><path fill="currentColor" fillRule="evenodd" d="M21.602 4.3l.015.015c.403.403.41 1.054.016 1.465L9.053 18.91a1.047 1.047 0 0 1-1.512 0l-5.25-5.472a1.047 1.047 0 0 1 .016-1.465l.015-.015a1.02 1.02 0 0 1 1.46.019l4.136 4.36a.524.524 0 0 0 .76.001l11.46-12.021a1.022 1.022 0 0 1 1.464-.018z"></path></svg>
          }
          <p>Round trip</p>
        </div>
      </div>
    </div>
  )
}

export default DropdownMenus;
