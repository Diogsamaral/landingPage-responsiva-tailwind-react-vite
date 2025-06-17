import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const HeroSection = () => {
  useEffect(() => {
    const scroll = ScrollReveal({
      reset: true,
      duration: 2600,
      distance: "60px",
    });
    scroll.reveal(".image-transform", { delay: 400, origin: "top" });
    scroll.reveal(".text-transform", { delay: 300, origin: "left" });
  }, []);

  return (
    <div className="min-h-screen px-6 py-3 flex flex-col gap-10 md:px-10 lg:px-16 lg:py-7 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 text-white">
      <header className="flex justify-between">
        <a href="#" className="flex items-center">
          <h1 className="text-2xl font-bold">ATN.</h1>
        </a>
        <ul className="hidden lg:flex lg:items-center lg:gap-10 lg:text-lg lg:font-medium">
          <li>
            <a href="#">Localização</a>
          </li>
          <li>
            <a href="#">Ofertas</a>
          </li>
          <li>
            <a href="#">Preços</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
        </ul>
        <div className="hidden lg:flex lg:items-center lg:gap-10 lg:text-lg lg:font-medium">
          <a href="#">Login</a>
          <button className="bg-purple-900 px-2 py-1 font-medium rounded-md">
            Registrar
          </button>
        </div>
        <div className="lg:hidden">
          <i className="fa-solid fa-bars fa-2x"></i>
        </div>
      </header>

      <main className="lg:flex">
        <div className="flex items-center justify-center lg:flex-1 lg:order-2 image-transform">
          <img
            src="/src/assets/wfa.jpg"
            alt="trabalhe de qualquer lugar"
            className="outline outline-white shadow-2xl shadow-black lg:w-[400px] lg:rounded-full"
          />
        </div>
        <div className="space-y-6 mt-5 lg:flex-1 lg:order-1 lg:mt-32 text-transform">
          <div className="text-6xl font-bold leading-tight">
            <h1>Let's Switch</h1>
            <h1>To Remote</h1>
          </div>
          <div className="md:w-[500px]">
            <p>
              WFA provides top-notch office spaces in prime locations worldwide
              allowing people to work from anywhere. We provide coworking spaces
              where people from various backgrounds like remote workers,
              entrepreneurs, freelancers, and startup enthusiasts can work,
              connect, and grow their businesses.
            </p>
          </div>
          <form className="flex flex-col gap-2 md:flex-row md:gap-0">
            <input
              type="text"
              placeholder="Enter City"
              className="max-md:rounded-md rounded-l-md px-4 py-3 text-black md:w-80 bg-amber-50"
            />
            <button className="bg-purple-900 max-md:rounded-md rounded-r-md px-4 py-3 font-medium whitespace-nowrap">
              Find Your Office
            </button>
          </form>
          <div className="flex flex-col gap-6 items-start">
            <p className="font-semibold">Used by these companies:</p>
            <ul className="flex gap-6">
              <li>
                <i className="fa-brands fa-twitter fa-2x"></i>
              </li>
              <li>
                <i className="fa-brands fa-airbnb fa-2x"></i>
              </li>
              <li>
                <i className="fa-brands fa-facebook fa-2x"></i>
              </li>
              <li>
                <i className="fa-brands fa-apple fa-2x"></i>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
