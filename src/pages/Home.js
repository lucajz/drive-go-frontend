import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import QueryForm from "../components/QueryForm";
import { getCars } from "../features/carSlice";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import HotCar from "../components/HotCar";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  useEffect(() => {
    document.title = `Drive & Go | Masina ta chiar aici`;
  }, []);

  return (
    <>
      <Header />
      <main className="bg-secondary min-h-screen ">
        <section
          id="hero"
          className="min-h-[100vh] md:min-h-[100vh] px-2 w-full bg-cover bg-center bg-hero-image pt-16 pb-16 items-center flex scroll-mt-[10vh]"
        >
          <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 pb-12">
            <div className="flex-grow text-center lg:text-left -space-y-2">
              <Fade left cascade>
                <h2 className="text-secondary font-bold text-6xl">Masina ta</h2>
                <h3 className="text-secondary font-semibold text-4xl">
                  chiar aici
                </h3>
              </Fade>
            </div>
            <div className=" w-full md:w-10/12 lg:w-7/12 xl:w-5/12 -mt-10">
              <QueryForm />
            </div>
          </div>
        </section>
        <div className="bg-gradient-to-t from-primary via-primary -mt-[30vh] pt-[35vh] to-transparent h-fit w-full"></div>
        <section
          id="hotcar"
          className="flex flex-col space-y-5 items-center h-fit bg-primary pb-16 pt-10 scroll-mt-[10vh]"
        >
          <div className="flex">
            <WhatshotOutlinedIcon
              className="text-orange-500"
              sx={{ fontSize: 30 }}
            />
            <h2 className="text-secondary font-bold text-2xl">HOTCAR</h2>
          </div>
          <HotCar />
        </section>
        <section id="despre" className="bg-secondary scroll-mt-[10vh]">
          <div className="bg-fifth h-32 py-5 flex flex-col items-center justify-center ">
            <h2 className="text-primary font-bold text-2xl">DESPRE NOI</h2>
            <hr className="border-t border-primary border-4 w-48" />
          </div>
          <div className="bg-secondary w-10/12 mx-auto h-fit py-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus accusantium temporibus, repudiandae hic sint tempora
              facilis aut et maiores blanditiis a, voluptatum quia illo
              perferendis asperiores consequuntur architecto. Natus, quaerat.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              incidunt quo aliquid, in dolorem nihil, tempora numquam officia
              temporibus exercitationem itaque magnam. Nihil, eius. Sequi, quos.
              Soluta ut illum nesciunt! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Sed quia quos totam id necessitatibus alias
              dolore quis molestias non provident tempora, recusandae minima
              dicta possimus et! Optio cum veritatis dolores!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
