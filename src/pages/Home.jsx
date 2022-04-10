import React, { useEffect, useState } from "react";
import hotel from "../assets/keem-ibarra-I2Dz5Hljm9g-unsplash (1).jpg";
import Search from "../components/Search";
import CardHotel from "../components/CardHotel";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getHotels } from "../store/features/hotelSlice";

const Home = () => {
  const { hotels, isLoading } = useSelector((state) => state.hotels);
  const [card, setCard] = useState([]);
 
  const dispatch = useDispatch();
  const searchHandler = (info) => {
    if (info !== "") {
      const newCardInfo = hotels.filter((items) => {
        
        return items.name.toLowerCase().includes(info.toLowerCase());
      });

      setCard(newCardInfo);
    } else {
      setCard(hotels);
    }
  };
  useEffect(() => {
    dispatch(getHotels());
    
  }, [dispatch]);

  return (
    <div className="my-8 w-full mx-auto">
      <div className="h-[28rem] md:h-[32rem]   mx-auto relative w-11/12 ">
        <div className="w-full h-full absolute bg-gradient-to-b from-zinc-200 to-zinc-900 opacity-60"></div>
        <div className="h-[28rem] md:h-[32rem] ">
          <img
            src={hotel}
            className="w-full h-full object-cover rounded-xl -z-10  bg-gradient-to-b from-purple-500 via-black to-pink-500 opacity-100"
            alt=""
          />
        </div>
        <div className="w-full absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center h-1/3 justify-around ">
          <div className="w-80">
            <h1 className="text-white lg:text-[30px] md:text-[26px] text-[22px]  w-full py-3 font-semibold  md:pb-6 md:text-white md:text-5xl md:font-semibold  ">
              The best hotel of the whole world
            </h1>
            <p className="text-xs tracking-wide  text-white font-medium">
              Explore the most unusual places in the world by our hotel service
              without large financial expenses and dangerous to your life.
            </p>
            <p className="text-xs tracking-wide text-white font-medium">
              no ideas for text, sorry
            </p>
          </div>
          <div className="hidden lg:flex bg-white rounded-sm mt-10 ">
            <form className="flex px-4 py-2 items-center">
              <div className="flex flex-col border-r-2 mx-2 px-2">
                <p className="text-xs">Location</p>
                <select
                  name=""
                  id=""
                  className="w-24 text-xs font-medium mt-1 focus:outline-0 text-black"
                >
                  <option value="">Iraq</option>
                  <option value="">Erbil</option>
                  <option value="">Suly</option>
                </select>
              </div>
              <div className="flex flex-col mx-2 px-2">
                <p className="text-xs">Check in</p>
                <input type="date" className="focus:outline-0 mt-1 text-xs" />
              </div>
              <div className="flex flex-col border-r-2 mx-2 px-2">
                <p className="text-xs">Check out</p>
                <input type="date" className="focus:outline-0 mt-1 text-xs" />
              </div>
              <div className="flex flex-col mx-2 px-2">
                <p className="text-xs ">Adobe</p>
                <select
                  name=""
                  id=""
                  className="w-24 text-xs font-medium mt-1 focus:outline-0 text-black"
                >
                  <option value="" className="text-black">
                    Single Room
                  </option>
                  <option value="" className="text-black">
                    family
                  </option>
                </select>
              </div>
              <div className="px-4">
                <button className="bg-black text-white py-1 px-5 rounded-sm ">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*--------------search-----------  */}
      <Search search={searchHandler} />
      {/* end of search */}
      {/* -----------card----- */}
      <div className="flex flex-wrap gap-x-4 gap-y-6 w-full px-6 ">
        {isLoading ? <h1>Loading...</h1> :
        card.length !== 0 ?   card.map((items, index) => (
          <Link to={`/hotel/${items.id}`}>
            <CardHotel
              key={items._id}
              id={items.id}
              img={items.image}
              name={items.name}
              city={items.city}
              rating={items.rating}
            />
          </Link>
          )) :
        hotels.map((items, index) => (
          <Link to={`/hotel/${items.id}`}>
            <CardHotel
              key={items._id}
              id={items.id}
              img={items.image}
              name={items.name}
              city={items.city}
              rating={items.rating}
            />
          </Link>
          ))
      }
  
      </div>
      {/* ----------end of card--------- */}
    </div>
  );
};

export default Home;
