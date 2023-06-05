import React, { useState } from "react";
import { setFilter } from "redux/filter/filter-slice";
import { currentFilter } from "redux/filter/filter-selectors";
import { useDispatch, useSelector } from "react-redux";
import { Btn, Drop, Menu, Item } from './Dropdown.styled';


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
        <Drop>
        <Btn onClick={toggleDropdown} text={selectedOption || 'Filter'}>
            {selectedOption || "Filter"}
        </Btn>
        {isOpen && (
            <Menu>
            <Item onClick={() => handleOptionSelect("Show all")}>Show all</Item>
            <Item onClick={() => handleOptionSelect("Follow")}>Follow</Item>
            <Item onClick={() => handleOptionSelect("Followings")}>Followings</Item>
            </Menu>
        )}
        </Drop>
    );
};

export default Dropdown;