import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink } from "react-router-dom";
const CarCard = ({ car }) => {
  let num = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumSignificantDigits: 3,
  }).format(car.pret);

  return (
    <div className="w-full h-fit bg-third rounded-lg shadow-sm shadow-neutral-800">
      <div className="p-6 space-y-2 flex flex-col md:flex-row ">
        <div className="lg:w-3/12 md:w-4/12">
          <img
            src={car.imgs[0].filePath}
            alt="Car Preview"
            className="rounded-lg"
          />
        </div>
        <div className="px-2 md:px-4 lg:px-6 space-y-4 flex-1 flex flex-col justify-between">
          <div>
            <NavLink to={`/car/${car.slug}`}>
              <h1 className="text-secondary cursor-pointer font-semibold text-xl md:text-2xl lg:text-3xl hover:underline">
                {car.marca} {car.model} {car.motorizare}
              </h1>
            </NavLink>
            <p className="text-fifth text-xs lg:text-base md:text-sm pl-1">
              {car.combustibil} &#x2022;{" "}
              {car.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km
              &#x2022; {car.an} &#x2022; {car.caroserie}
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-red-400 font-bold text-xl md:text-2xl lg:text-3xl hover:scale-105 transition-all">
              {num}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
