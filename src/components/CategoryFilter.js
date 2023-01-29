import React from "react";

function CategoryFilter({onButtonClick, clickedButton, categories}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => (
        <button className={ onButtonClick === category ? "selected" : ""}
          key={index}
          onClick={() => {
            clickedButton(category)
          }}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
