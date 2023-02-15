import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CarCard from "../components/CarCard";
import Chips from "../components/Chips";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  getCars,
  getQueryCars,
  selectCars,
  selectQueryCars,
} from "../features/carSlice";

const Cars = () => {
  const dispatch = useDispatch();
  const filterCars = useSelector(selectQueryCars);
  const cars = useSelector(selectCars);
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  let params = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  useEffect(() => {
    dispatch(getQueryCars(params));
    dispatch(getCars());
  }, [dispatch, searchParams]);
  console.log(params);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <section>
      <Header />
      <div className="w-11/12 mx-auto mt-6 min-h-screen">
        <div className="space-y-2">
          <h2 className="text-secondary text-3xl pl-2">
            {filterCars ? filterCars.length : cars?.length}{" "}
            {filterCars.length === 1 || cars.length === 1
              ? "masina disponibila"
              : "masini disponibile"}{" "}
          </h2>
          <hr className="border-t border-secondary" />
          <div className="flex space-x-2 overflow-x-scroll scrollbar-hide">
            {Object.entries(params).map(([key, val], i) => (
              <Chips
                key={i}
                chip={val}
                query={key}
                setSearchParams={setSearchParams}
                params={params}
              />
            ))}
            <button onClick={() => setSearchParams({ marca: "Mercedes-Benz" })}>
              CLick
            </button>
          </div>
        </div>
        <div className="space-y-4 mt-10">
          {filterCars
            ? filterCars.map((car, i) => {
                return <CarCard key={i} car={car} />;
              })
            : cars?.map((car, i) => {
                return <CarCard key={i} car={car} />;
              })}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Cars;
