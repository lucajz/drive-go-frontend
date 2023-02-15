import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const Chips = ({ chip, query, setSearchParams, params }) => {
  const deleteQuery = (key) => {
    delete params[key];
    console.log(params);
    setSearchParams(params);
  };

  if (typeof chip == "string") {
    return (
      <div className=" flex items-center space-x-1 px-2 py-1 bg-third w-fit rounded-full border border-forth ">
        <p
          className="text-secondary text-sm whitespace-nowrap"
          // onClick={() => console.log(searchParams)}
        >
          {chip}
        </p>
        <ClearIcon
          sx={{ fontSize: 20 }}
          className="text-forth cursor-pointer"
          onClick={() => deleteQuery(query)}
        />
      </div>
    );
  } else {
    return null;
  }

  
};

export default Chips;
