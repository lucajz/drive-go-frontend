import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FormOption from "./FormOption";
import { useDispatch, useSelector } from "react-redux";
import {
  getQueryCars,
  selectCars,
  selectMarcaList,
} from "../features/carSlice";
import RangeSlider from "./RangeSlider";
import { createSearchParams, useNavigate } from "react-router-dom";

const initialState = {};

const QueryForm = () => {
  const marcaList = useSelector(selectMarcaList);
  const cars = useSelector(selectCars);
  const [models, setModels] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [searchData, setSearchData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleValueChange = (name, value) => {
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  let date = new Date();
  let year = date.getFullYear();

  const handleArrayChange = (name, name2, min, max) => {
    setSearchData({
      ...searchData,
      [name]: [min],
      [name2]: [max],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/cars",
      search: `?${createSearchParams(searchData)}`,
    });
  };

  const { marca } = searchData;

  useEffect(() => {
    const showModel = cars.filter((x) => x.marca === marca).map((x) => x.model);
    setModels(showModel);
    if (!marca) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [marca, cars]);

  let counterModel = {};
  let elementModel;
  for (elementModel of models.flat()) {
    if (counterModel[elementModel]) {
      counterModel[elementModel] += 1;
    } else {
      counterModel[elementModel] = 1;
    }
  }

  let listModel = [];
  for (const [key, value] of Object.entries(counterModel)) {
    listModel.push(`${key} (${value})`);
  }

  let counterMarci = {};
  let elementMarci;
  for (elementMarci of marcaList.flat()) {
    if (counterMarci[elementMarci]) {
      counterMarci[elementMarci] += 1;
    } else {
      counterMarci[elementMarci] = 1;
    }
  }

  let listCars = [];
  for (const [key, value] of Object.entries(counterMarci)) {
    listCars.push(`${key} (${value})`);
  }

  let listCombustibil = [
    "Benzina",
    "Diesel",
    "Electric",
    "Hibrid",
    "Mild-Hibrid",
  ];

  let listCaroserie = [
    "Sedan",
    "SUV",
    "Cabrio",
    "Coupe",
    "Compacta",
    "Monovolum",
    "Masina Mica",
    "Masina de Oras",
    "Combi",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[rgba(243,244,248,0.8)] grid grid-cols-1 gap-4 gap-x-6 md:grid-cols-2 p-4 rounded-md"
    >
      <FormOption
        placeholder="Selecteaza marca..."
        label="Marca"
        menu={listCars.sort()}
        handleValueChange={handleValueChange}
        name="marca"
      />
      <FormOption
        placeholder="Selecteaza modelul..."
        label="Modelul"
        menu={listModel.sort()}
        disabled={disabled}
        handleValueChange={handleValueChange}
        name="model"
      />
      <FormOption
        placeholder="Selecteaza combustibil..."
        label="Combustibil"
        menu={listCombustibil}
        handleValueChange={handleValueChange}
        name="combustibil"
      />
      <FormOption
        placeholder="Selecteaza tipul de caroserie..."
        label="Caroserie"
        menu={listCaroserie}
        handleValueChange={handleValueChange}
        name="caroserie"
      />
      <div className="md:col-span-2 flex flex-col space-y-1">
        <label className="text-sm pl-1">Pret</label>
        <RangeSlider
          min={0}
          max={200000}
          step={1000}
          onChange={({ min, max }) =>
            handleArrayChange("pret_min", "pret_max", min, max)
          }
        />
      </div>
      <div className="md:col-span-2 flex flex-col space-y-1">
        <label className="text-sm pl-1">An</label>
        <RangeSlider
          min={1990}
          max={year}
          onChange={({ min, max }) =>
            handleArrayChange("an_min", "an_max", min, max)
          }
        />
      </div>
      <div className="md:col-span-2 flex flex-col space-y-1">
        <label className="text-sm pl-1">Capacitate cilindrica</label>
        <RangeSlider
          min={0}
          max={10000}
          step={100}
          onChange={({ min, max }) =>
            handleArrayChange("cc_min", "cc_max", min, max)
          }
        />
      </div>
      <div className="md:col-span-2 flex flex-col space-y-1">
        <label className="text-sm pl-1">Km</label>
        <RangeSlider
          min={0}
          max={400000}
          step={10000}
          onChange={({ min, max }) =>
            handleArrayChange("km_min", "km_max", min, max)
          }
        />
      </div>
      <button
        type="submit"
        className="p-2 w-full bg-primary text-secondary rounded-md md:col-span-2 lg:w-9/12 mx-auto"
      >
        <SearchOutlinedIcon />
        Cauta
      </button>
    </form>
  );
};

export default QueryForm;
