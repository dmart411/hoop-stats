import { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const renderOptions = options.map((option) => {
    if (options.value === selected.value) {
      return null;
    }
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.text}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="feild">
        <label className="label">
          <b>{label}</b>{"  "}
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.text}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
