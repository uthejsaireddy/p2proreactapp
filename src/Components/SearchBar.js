import React from "react";
import { InputText } from "primereact/inputtext";

function SearchBar() {
  return (
    // <div>
    <span className="h42">
      <InputText
        id="alphanumeric"
        placeholder="Collection,item,user"
        keyfilter="alphanum"
        //  className="w-full"
      />
    </span>
    // </div>
  );
}

export default SearchBar;
