
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './SortBy.scss';


export const SortBy = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const sortTypeOptions = [
    { value: "age", text: "Newest" },
    { value: "name", text: "Alphabetically" },
    { value: "low_price", text: "Low price" },
    { value: "high_price", text: "High price" },
  ]
  const [pseudoSelectValue, setPseudoSelectValue] = useState<string>();

  useEffect(() => {
    if(!searchParams.get('sort_type')) {
      setPseudoSelectValue('Choose')
    } else {
      setPseudoSelectValue(sortTypeOptions
        .filter(item => item.value === searchParams.get('sort_type'))[0].text)
    }

  }, [searchParams])


  const handleOptionClick = (value: string, text:string) => {
    setPseudoSelectValue(text)
    setIsOpen(false);
    searchParams.set("sort_type", value);
    history.push({
      search: searchParams.toString()
    });
  }

  return (
    <div className="SortBy">
      <span className="SortBy__legend">Sort by</span><br></br>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen
          ? "SortBy__pseudo-select SortBy__pseudo-select--open"
          : "SortBy__pseudo-select"}>
            {pseudoSelectValue}
        <div
          className={isOpen
            ? "SortBy__options-wrapper"
            : "SortBy__options-wrapper SortBy__options-wrapper--invisible"}
          >
          {sortTypeOptions.map(item => (
              <span
                onClick={() => { handleOptionClick(item.value, item.text) }}
                className="SortBy__option"
                key={item.value}
              >{item.text}</span>
            ))}
        </div>


      </div>




    </div>
  )
}

