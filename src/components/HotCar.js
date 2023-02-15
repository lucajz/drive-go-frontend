import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getHotCar, selectHotCar } from "../features/carSlice";

const HotCar = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotCar());
  }, [dispatch]);
  const hotcar = useSelector(selectHotCar);

  if (hotcar.marca) {
    return (
      <div
        className="bg-third w-10/12 md:w-7/12 lg:w-4/12, xl:w-4/12 h-fit p-4"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <NavLink to={`/car/${hotcar.slug}`}>
          <div className="mx-auto">
            <div className="object-cover relative">
              {hotcar.imgs && (
                <img src={hotcar?.imgs[0].filePath} alt="hotcar" />
              )}
              <div
                className={`${
                  hover ? "flex" : "hidden"
                } absolute left-0 bottom-0 w-full bg-[rgba(89,89,89,0.9)] justify-between px-2 py-2`}
              >
                <div>
                  <h4 className="font-semibold text-orange-500 text-lg">
                    {hotcar.marca} {hotcar.model}
                  </h4>
                  <div className="flex space-x-2">
                    <p className="text-sm font-light text-gray-300">
                      {hotcar.an}
                    </p>
                    <p className="text-sm font-light text-gray-300">
                      {hotcar?.km
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ") || 0}{" "}
                      km
                    </p>
                    <p className="text-sm font-light text-gray-300">
                      {hotcar.capacitate_cilindrica} cm3
                    </p>
                  </div>
                </div>
                <div className="h-full my-auto">
                  <p className="font-bold text-xl text-white">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                      maximumSignificantDigits: 3,
                    }).format(hotcar.pret) || 0}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="bg-third w-10/12 md:w-7/12 lg:w-4/12, xl:w-4/12 h-72 p-4 ">
        <div className="mx-auto h-full">
          <div className="h-full flex justify-center items-center">
            <h3 className="text-secondary">
              Momentan nu exista niciun{" "}
              <span className="text-orange-400 font-semibold">HOTCAR</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
};
export default HotCar;
