import React, { useEffect, useRef, useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const FormRange = ({ label, disabled, menu, name, handleValueChange }) => {
  const [selected, setSelected] = useState("");
  const [dropdownSearchValue, setDropdownSearchValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [range, setRange] = useState([]);
  const dropdownRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        editMode &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setEditMode(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [editMode]);

  const SelectionHandler = (item) => {
    setSelected(item);
    setDropdownSearchValue("");
    setEditMode(false);
    handleValueChange(name, item);
  };

  const filteredMenu = menu?.filter((item) =>
    item.match(new RegExp(dropdownSearchValue, "i"))
  );

  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-sm pl-1">{label}</label>}
      <div className="flex space-x-2">
        {editMode ? (
          <div
            ref={dropdownRef}
            className="bg-white bg-opacity-90  rounded-lg  flex flex-col justify-between "
          >
            <div className="flex p-2 border rounded-t-lg ">
              <input
                className="bg-transparent flex-1 outline-none w-full disabled:opacity-60"
                name={name}
                autoFocus
                autoComplete="false"
                onChange={(e) => setDropdownSearchValue(e.target.value)}
                value={dropdownSearchValue}
              />
              <button>
                <ExpandMoreOutlinedIcon
                  sx={{ fontSize: 25 }}
                  className="rotate-180 transition-all"
                />
              </button>
            </div>
            <div className="dropdown-list">
              <ul className="">
                {filteredMenu?.map((item) => {
                  return (
                    <li
                      key={item}
                      onClick={() => SelectionHandler(item)}
                      className="hover:bg-fifth py-1 pl-2 cursor-pointer"
                    >
                      {item}{" "}
                    </li>
                  );
                })}
                {filteredMenu?.length === 0 && (
                  <li className="no-result">No results found</li>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div
            className={`w-full bg-white bg-opacity-80 flex justify-between py-2 px-1 rounded-lg ${
              disabled && "opacity-70"
            }`}
          >
            <input
              className={`flex-grow w-full pl-1 bg-transparent ${
                !(dropdownSearchValue || selected) && "default"
              }`}
              onFocus={() => setEditMode(true)}
              value={selected || "de la"}
              disabled={disabled}
              readOnly="true"
            />
            <button class>
              <ExpandMoreOutlinedIcon
                sx={{ fontSize: 25 }}
                className="transition-all"
              />
            </button>
          </div>
        )}
        {editMode ? (
          <div
            ref={dropdownRef}
            className="bg-white bg-opacity-90  rounded-lg  flex flex-col justify-between "
          >
            <div className="flex p-2 border rounded-t-lg ">
              <input
                className="bg-transparent flex-1 outline-none w-full disabled:opacity-60"
                name={name}
                autoFocus
                autoComplete="false"
                onChange={(e) => setDropdownSearchValue(e.target.value)}
                value={dropdownSearchValue}
              />
              <button>
                <ExpandMoreOutlinedIcon
                  sx={{ fontSize: 25 }}
                  className="rotate-180 transition-all"
                />
              </button>
            </div>
            <div className="dropdown-list">
              <ul className="">
                {filteredMenu?.map((item) => {
                  return (
                    <li
                      key={item}
                      onClick={() => SelectionHandler(item)}
                      className="hover:bg-fifth py-1 pl-2 cursor-pointer"
                    >
                      {item}{" "}
                    </li>
                  );
                })}
                {filteredMenu?.length === 0 && (
                  <li className="no-result">No results found</li>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div
            className={`w-full bg-white bg-opacity-80 flex justify-between py-2 px-1 rounded-lg ${
              disabled && "opacity-70"
            }`}
          >
            <input
              className={`flex-grow w-full pl-1 bg-transparent ${
                !(dropdownSearchValue || selected) && "default"
              }`}
              onFocus={() => setEditMode(true)}
              value={selected || "pana la"}
              disabled={disabled}
              readOnly="true"
            />
            <button class>
              <ExpandMoreOutlinedIcon
                sx={{ fontSize: 25 }}
                className="transition-all"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormRange;
