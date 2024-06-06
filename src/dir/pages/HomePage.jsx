import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import bannerImage from "../../assets/banner-chicken.jpg";
import pepperedChicken from "../../assets/chicken-rep.jpg";
import piecesOfChicken from "../../assets/pieces-of-chicken.jpg";
import biryani from "../../assets/biryani_pot.png";
import friedRice from "../../assets/chips_and_burger.png";
import jollofRice from "../../assets/non_classy_biryani_pot.png";
import friedRiceNew from "../../assets/friedrice.jpg";
import friedRice1 from "../../assets/friedrice1.jpg";
import zogalai from "../../assets/zogalai.jpg";
import zogalai1 from "../../assets/zogalai1.jpg";
import rice from "../../assets/rice.jpg";
import biryaniLambOrChicken from "../../assets/biryanilamborchicken.mp4";
import naanchicken from "../../assets/naanchicken.mp4";
import naanlamb from "../../assets/naanlamb.mp4";
import ricewithcorn from "../../assets/ricewithcorn.mp4";

const VideoCard = ({ url, title, description }) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleCardClick = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0); // Restart the video
      setPlaying(true); // Play the video
    }
  };

  return (
    <div
      className="relative bg-white overflow-hidden"
      onClick={handleCardClick}
    >
      <ReactPlayer
        ref={playerRef}
        controls={true}
        muted={true}
        playing={playing}
        url={url}
        width="100%"
        height="100%"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-white">{description}</p>
        </div>
        <button className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-700">
          Order Now
        </button>
      </div>
    </div>
  );
};

export const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-16 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-myOrange">
            Grilled
            <br /> & More
          </h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-800 font-bold hover:text-myOrange">
              Our Menu
            </a>
            <a href="#" className="text-gray-800 font-bold hover:text-myOrange">
              Blog
            </a>
            <a href="#" className="text-gray-800 font-bold hover:text-myOrange">
              Features
            </a>
            <a href="#" className="text-gray-800 font-bold hover:text-myOrange">
              Pages
            </a>
            <a href="#" className="text-gray-800 font-bold hover:text-myOrange">
              Contact us
            </a>
          </nav>
          <a
            href="#"
            className="bg-myOrange text-white px-4 py-2 rounded-md hidden md:inline-block"
          >
            Reservation
          </a>
          <button
            className="md:hidden text-myOrange"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white">
            <nav className="space-y-2 px-4 py-4">
              <a href="#" className="block text-gray-800 hover:text-myOrange">
                Our Menu
              </a>
              <a href="#" className="block text-gray-800 hover:text-myOrange">
                Blog
              </a>
              <a href="#" className="block text-gray-800 hover:text-myOrange">
                Features
              </a>
              <a href="#" className="block text-gray-800 hover:text-myOrange">
                Pages
              </a>
              <a href="#" className="block text-gray-800 hover:text-myOrange">
                Contact us
              </a>
              <a
                href="#"
                className="block bg-myOrange text-white px-4 py-2 rounded-md"
              >
                Reservation
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section
          className="bg-cover bg-center py-20 h-auto relative"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="container mx-auto text-left text-white px-11">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 max-w-2xl">
              <span className="bg-myYyellow rounded-md text-white px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                Always Tasty Food
              </span>
              <h2 className="text-6xl font-bold mt-4">Special Offer</h2>
              <p className="mt-4 text-lg">
                Get our delicious delicacies at very affordable prices,
                <br /> we offer the best quality you can get, why not try us
                today?
              </p>
              <a
                href="#"
                className="bg-myOrange text-white px-6 font-bold py-3 mt-6 inline-block rounded-md"
              >
                ORDER NOW
              </a>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto text-center px-4 md:px-11">
            <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-72 overflow-hidden pt-2">
                <img
                  src={friedRiceNew}
                  alt="Curry Rice"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 box-border">
                  <h3 className="text-xl font-semibold text-white">
                    Fried Rice with Peppered Chicken and Colselaw
                  </h3>
                  <p className="mt-2 text-white">
                    Our unique fried rice has a great taste and natural flavours
                  </p>
                </div>
              </div>
              <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-72 overflow-hidden pt-2">
                <img
                  src={zogalai}
                  alt="Zogalai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 box-border">
                  <h3 className="text-xl font-semibold text-white">Zogalai</h3>
                  <p className="mt-2 text-white">
                    Our unique zogalai rice has a great taste and natural
                    flavours
                  </p>
                </div>
              </div>
              <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-72 overflow-hidden pt-2">
                <img
                  src={friedRice1}
                  alt="Curry Rice"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 box-border">
                  <h3 className="text-xl font-semibold text-white">
                    Fried Rice with Peppered Chicken and Colselaw
                  </h3>
                  <p className="mt-2 text-white">
                    Our unique fried rice has a great taste and natural flavours
                  </p>
                </div>
              </div>
              <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-72 overflow-hidden pt-2">
                <img
                  src={zogalai1}
                  alt="Fried Rice"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 box-border">
                  <h3 className="text-xl font-semibold text-white">Zogalai</h3>
                  <p className="mt-2 text-white">
                    Our unique zogalai rice has a great taste and natural
                    flavours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto text-center px-11">
            <span className="bg-myYyellow rounded-md text-sm font-semibold uppercase px-5 py-3 inline-block mb-4">
              Choose and Enjoy
            </span>
            <h2 className="text-5xl font-bold mb-8">Favourite Dishes</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Discover the best dishes we have to offer. Our menu is diverse and
              offers something for everyone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              <VideoCard
                url={biryaniLambOrChicken}
                title="Biryani Lamb or Chicken"
                description="Delicious biryani with tender lamb or chicken."
              />
              <VideoCard
                url={naanchicken}
                title="Naan with Chicken"
                description="Naan bread served with succulent chicken."
              />
              <VideoCard
                url={naanlamb}
                title="Naan with Lamb"
                description="Naan bread served with tender lamb."
              />
              <VideoCard
                url={ricewithcorn}
                title="Rice with Corn"
                description="A healthy and tasty rice dish with corn."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Grilled & More. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
