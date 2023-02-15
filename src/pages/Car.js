import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { getCar, selectCar } from "../features/carSlice";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Description from "../components/Description";
import Footer from "../components/Footer";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Car = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [km, setKm] = useState(0);
  console.log(slug);

  useEffect(() => {
    dispatch(getCar(slug));
  }, [dispatch, slug]);
  const car = useSelector(selectCar);

  useDocumentTitle(
    `${car.marca} ${car.model} ${car.motorizare} ${car.an} | Drive & Go`
  );

  let pret = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumSignificantDigits: 3,
  }).format(car.pret);

  const buttonStyle = {
    width: "30px",
    height: "100%",
    background: "none",
    border: "0px",
    color: "#fff",
  };

  const properties = {
    prevArrow: (
      <div className="bg-gradient-to-l rounded-l from-transparent to-third opacity-80 h-full">
        <button style={{ ...buttonStyle }}>
          <ChevronLeft sx={{ fontSize: 35 }} />
        </button>
      </div>
    ),
    nextArrow: (
      <div className="bg-gradient-to-r rounded-r from-transparent to-third opacity-80 h-full">
        <button style={{ ...buttonStyle }}>
          <ChevronRight sx={{ fontSize: 35 }} />
        </button>
      </div>
    ),
  };
  useEffect(() => {
    let km = car?.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    setKm(km);
  }, [car]);

  return (
    <>
      <Header />
      <div className="w-11/12 mx-auto grid grid-cols-1 gap-2 py-8 lg:grid-cols-8">
        <div className="p-2 bg-third rounded-lg lg:col-span-5 ">
          {car.imgs && (
            <Slide {...properties}>
              {car?.imgs?.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <img
                    src={slideImage.filePath}
                    alt="Car"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </Slide>
          )}
        </div>
        <div className="lg:col-span-3 space-y-2">
          <div className="p-4 bg-third rounded-lg  h-fit">
            <h1 className="text-secondary font-bold text-2xl">
              {car.marca} {car.model} {car.motorizare}
            </h1>
            <p className="text-fifth text-xs lg:text-base md:text-sm pl-1">
              {car.combustibil} &#x2022; {km} km &#x2022; {car.an} &#x2022;{" "}
              {car.caroserie}
            </p>
            <h3 className="text-red-400 text-3xl font-semibold text-right mt-4">
              {pret}
            </h3>
          </div>

          <div className="p-4 bg-third  rounded-lg flex justify-between space-x-3 h-fit">
            <a
              href="tel:+40700000000"
              className="flex-1 flex justify-center space-x-2 items-center bg-third text-secondary py-2 border rounded-lg active:scale-90 transition-all"
            >
              <CallIcon />
              <p>Suna</p>
            </a>
            <a
              href="mailto:xultraluk19@gmail.com"
              className="flex-1 space-x-2 flex justify-center items-center bg-third text-secondary py-2 border rounded-lg active:scale-90 transition-all"
            >
              <EmailIcon />
              <p>E-mail</p>
            </a>
          </div>
        </div>
        <div className="bg-third p-4 shadow-lg md:rounded-lg space-y-2 rounded-lg lg:col-span-8 h-fit">
          <h2 className="font-semibold text-xl text-secondary">Detalii:</h2>
          <hr className="border-t border-secondary" />
          <table className="border-spacing-4 w-full pt-2">
            <tr className="bg-sixth">
              <td className="text-secondary pl-1">Marca:</td>
              <td className="text-secondary font-light">{car.marca}</td>
            </tr>
            <tr>
              <td className="text-secondary pl-1">Model:</td>
              <td className="text-secondary font-light">{car.model}</td>
            </tr>
            <tr className="bg-sixth">
              <td className="text-secondary pl-1">Caroserie:</td>
              <td className="text-secondary font-light">{car.caroserie}</td>
            </tr>
            <tr>
              <td className="text-secondary pl-1">An:</td>
              <td className="text-secondary font-light">{car.an}</td>
            </tr>
            <tr className="bg-sixth">
              <td className="text-secondary pl-1">Capacitate cilindrica:</td>
              <td className="text-secondary font-light">
                {car.capacitate_cilindrica} cm3
              </td>
            </tr>
            <tr>
              <td className="text-secondary pl-1">Km:</td>
              <td className="text-secondary font-light">{km} km</td>
            </tr>
            <tr className="bg-sixth">
              <td className="text-secondary pl-1">Culoare:</td>
              <td className="text-secondary font-light">{car.culoare}</td>
            </tr>
            <tr>
              <td className="text-secondary pl-1">Putere:</td>
              <td className="text-secondary font-light">{car.putere} CP</td>
            </tr>
            <tr className="bg-sixth">
              <td className="text-secondary pl-1">Cutie:</td>
              <td className="text-secondary font-light">{car.cutie}</td>
            </tr>
            <tr>
              <td className="text-secondary pl-1">Tractiune:</td>
              <td className="text-secondary font-light">{car.tractiune}</td>
            </tr>
            <tr className="bg-sixth">
              <td className="text-secondary pl-1">Serie sasiu:</td>
              <td className="text-secondary font-light">{car.vin}</td>
            </tr>
          </table>
        </div>

        <div className="bg-third p-4 shadow-lg rounded-lg space-y-2 lg:col-span-8">
          <h2 className="font-semibold text-xl text-secondary">Descriere:</h2>
          <hr className="border-t border-secondary" />
          <Description description={car.descriere} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Car;
