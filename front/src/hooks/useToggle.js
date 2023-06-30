import { useEffect, useRef, useState } from "react";

function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);
  const ref = useRef();

  // when clicked anywhere out of the button set toggle to false
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const clickedEl = e.target;
      //  return nothing if clicked inside the 2 dropdown menu
      const dropdown2 = clickedEl.closest('.DropdownMenu2-options');
      if (dropdown2) {
        return;
      }

      if (ref.current && !ref.current.contains(clickedEl)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, []);

  const toggle = () => {
    setIsOpen((prevISOpen) => !prevISOpen);
  };

  return [isOpen, toggle, ref, setIsOpen];
}

export default useToggle;
