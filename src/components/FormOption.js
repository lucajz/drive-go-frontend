import React, { useEffect, useRef, useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const FormOption = ({
  label,
  placeholder,
  menu,
  disabled,
  name,
  handleValueChange,
}) => {
  const [selected, setSelected] = useState("");
  const [dropdownSearchValue, setDropdownSearchValue] = useState("");
  const [editMode, setEditMode] = useState(false);
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
    handleValueChange(name, removeLastWord(item));
  };

  function removeLastWord(str) {
    const lastIndexOfSpace = str.lastIndexOf(" ");

    if (lastIndexOfSpace === -1) {
      return str;
    }

    return str.slice(0, lastIndexOfSpace);
  }

  const filteredMenu = menu?.filter((item) =>
    item.match(new RegExp(dropdownSearchValue, "i"))
  );

  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-sm pl-1">{label}</label>}
      {editMode ? (
        <div
          ref={dropdownRef}
          className="bg-white relative bg-opacity-90  rounded-t-lg  flex flex-col justify-between "
        >
          <div className="flex p-2 border rounded-t-lg ">
            <input
              className="bg-transparent flex-1 outline-none w-full disabled:opacity-60"
              name={name}
              autoFocus
              autoComplete="false"
              value={dropdownSearchValue}
              onChange={(e) => setDropdownSearchValue(e.target.value)}
            />
            <button disabled>
              <ExpandMoreOutlinedIcon
                sx={{ fontSize: 25 }}
                className="rotate-180 transition-all"
              />
            </button>
          </div>
          <div className="absolute max-h-48 z-50 top-full w-full bg-white overflow-y-scroll scr">
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
            value={selected || placeholder}
            disabled={disabled}
            readOnly={true}
          />
          <button disabled>
            <ExpandMoreOutlinedIcon
              sx={{ fontSize: 25 }}
              className="transition-all"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default FormOption;
