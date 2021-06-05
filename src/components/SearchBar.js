import React, { useState } from "react";

const SearchBar = ({ onSubmit, placeholder, size }) => {
  const [text, setText] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <input
            type="text"
            value={text}
            placeholder={placeholder}
            onChange={onTextChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
