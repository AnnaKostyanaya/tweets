import React, { useState } from "react";
import { setFilter } from "redux/filter/filter-slice";
import { currentFilter } from "redux/filter/filter-selectors";
import { useDispatch, useSelector } from "react-redux";


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const selectedOption = useSelector(currentFilter);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        dispatch(setFilter(option));
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
            {selectedOption || "Filter"}
        </button>
        {isOpen && (
            <ul className="dropdown-menu">
            <li onClick={() => handleOptionSelect("Show all")}>Show all</li>
            <li onClick={() => handleOptionSelect("Follow")}>Follow</li>
            <li onClick={() => handleOptionSelect("Followings")}>Followings</li>
            </ul>
        )}
        </div>
    );
};

export default Dropdown;