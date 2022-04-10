import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { itemsAction } from "../store/index";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { RiCloseCircleFill } from "react-icons/ri";
import Maps from "../components/Maps";
import CardHotel from "../components/CardHotel.jsx";
import axios from "axios";
import { getHotelBook } from "../store/features/bookSlice";
import { getHotels } from "../store/features/hotelSlice";
const HotelInfo = () => {
  const param = useParams();
  const { hotels } = useSelector((state) => state.hotels);
  const email = useSelector((state) => state.cardInfo.email);
  const logged = useSelector((state) => state.cardInfo.logged);
  const {book } = useSelector((state) => state.hotelRoomBook);



  const doesRoomExist = (roomName, hotelId) => {
    return book?.find((item) => item.roomName === roomName && item.hotelId === hotelId)
      ? true
      : false;
  };
  const doesEmailExit = (email, roomName) => {
    return book?.find(
      (item) =>
        item.userEmail === email && item.roomName === roomName
    )
      ? true
      : false;
  };

  const [viewMap, setViewMap] = useState(false);
  const [card, setCard] = useState([]);

  const [popUp, setPopUp] = useState(true);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const cardFilter = () => {
      const newCard = hotels.filter((items) => {
        return items._id === param.id;
      });

      setCard(newCard);
    };
    cardFilter();
  }, [param,hotels]);
  const addHotel = async (roomsId) => {
    
    const room = card.map(hotel => hotel.rooms.find(room => room._id === roomsId))

    if (logged) {
      await axios.post(`http://localhost:3009/api/places/book/${param.id}`, {
        roomId:room[0]._id,
         roomName:room[0].roomName,
         roomPrice:room[0].roomPrice,
         roomDescription:room[0].roomDescription,
         roomType:room[0].roomType,
         image:room[0].image,
         userEmail:email,
        });
      dispatch(getHotelBook())
    } else {
      setPopUp(false);
    }
  };

  useEffect(() => {
    const login = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(itemsAction.addEmail(email));
        // addEmail(currentUser.email);
      }
    });
    login();
  }, [dispatch, email]);
  // const addEmail = (email) => {
  //   dispatch(itemsAction.addEmail(email));
  // };
useEffect(() => {
  dispatch(getHotels())
}, [dispatch])
 useEffect(() => {
   dispatch(getHotelBook())
  }, [dispatch ])
  const popupLogin = () => {
    setPopUp(true);
    navigate("/login");
  };


  const removeRoom = async (bookId) => {


 const removeBook = book?.find((item) => item.roomId === bookId)
  console.log(removeBook._id);
    await axios.delete(`http://localhost:3009/api/places/book/${removeBook._id}`);
    dispatch(getHotelBook())
  };

  const showMap = () => {
    setViewMap(true);
  };
  return (
    <div className="mb-12">
      <div className="w-5/6 mx-auto flex flex-col">
        <div className="">
          {card.map((item, index) => (
            <div
              className="flex gap-x-16 flex-col pt-10 lg:flex-row"
              key={item._id}
            >
              <div  className="flex-1  flex flex-wrap gap-y-4 ">
                <div className="w-full relative">
                  <div className="w-full h-full absolute bg-gradient-to-b from-zinc-200 to-zinc-900 opacity-60"></div>
                  <img
                    src={`http://localhost:3009/api/upload/${item.image}`}
                    className="w-full h-400 object-cover rounded-md"
                    alt=""
                  />
                </div>
              </div>
              <div className="lg:w-1/3 flex flex-col w-full  pt-8 lg:pt-0 ">
                <div className=" flex gap-y-1.5 flex-col  border-b-2 pb-6">
                  <div className="flex items-center gap-x-10">
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <div className="flex gap-x-1.5">
                      {Array(item.rating)
                        .fill()
                        .map((_, index) => (
                          <span className="text-xs">
                            <AiFillStar />
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className="flex gap-x-14">
                    <span className="text-xs opacity-80">{item.location}</span>
                    <span className="text-xs opacity-80">{item.distance}</span>
                  </div>
                </div>
                <div className="pt-3">
                  <p className="leading-7 opacity-60 text-sm ">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={showMap}
                    className="bg-black text-white px-7 py-1.5 rounded-md"
                  >
                    Show On Map
                  </button>
                  {viewMap ? (
                    <div className="fixed   w-screen h-screen top-0 left-0 bg-opacity-40 bg-slate-50 z-[1000]">
                      <div className="w-5/6 h-700   relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-52 z-30 ">
                        <div className="hidden lg:block lg:absolute lg:left-0 lg:z-10 lg:top-0">
                          <CardHotel
                          key={item._id}
                          id={item._id}
                           
                            img={item.image}
                            name={item.name}
                            city={item.city}
                            rating={item.rating}
                          />
                        </div>
                        <Maps center={item.coordinate} zoom={15} />

                        <div className="absolute -right-3 -top-4 z-40">
                          <RiCloseCircleFill
                            className="text-4xl cursor-pointer"
                            onClick={() => setViewMap(false)}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="py-10 my-10  flex gap-x-16 gap-y-10 flex-col md:flex-row  lg:flex-row flex-wrap justify-start items-start ">
          {card?.map((item) =>
            item.rooms.map((items) => (
              <div key={items._id}  className="bg-red-400 w-[300px] h-min rounded-md ">
                <div className="w-full h-[150px] rounded-md">
                  <img
                    src={`http://localhost:3009/api/upload/${items.image}`}
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="w-full pt-4 px-4">
                  <h1>{items.roomName}</h1>
                  <p>{items.roomDescription}</p>
                  <p className="">Room Type: {items.roomType}</p>

                  <button
                    className={`bg-slate-900 text-white px-4 py-1 my-2 rounded-sm ${
                      doesRoomExist(items.roomName, items.hotelId)
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }`}
                    onClick={() => addHotel(items._id)}
                  >
                    {doesRoomExist(items.roomName, items.hotelId) ? "booked" : "book"}
                  </button>

                  {doesRoomExist(items.roomName, items.hotelId) &&
                  doesEmailExit(email, items.roomName) ? (
                    <button
                      className={`ml-3 bg-slate-900 text-white px-4 py-1 my-2 rounded-sm`}
                      onClick={() => removeRoom(items._id)}
                    >
                      remove
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {popUp ? (
        " "
      ) : (
        <div className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-slate-200 w-56 h-52 opacity-80 flex justify-center items-center flex-col">
          <p className="text-center text-lg pb-4">
            Plese login for Booking Hotel
          </p>
          <div className="flex gap-x-4">
            <button
              type="button"
              className="px-4 py-1.5 bg-slate-800 text-white "
              onClick={() => setPopUp(true)}
            >
              Close
            </button>
            <button
              type="button"
              className="px-4 py-1.5 bg-slate-800 text-white "
              onClick={popupLogin}
            >
              Login
            </button>
          </div>
        </div>
      )}
  
        </div>
      
  
  );
};

export default HotelInfo;
