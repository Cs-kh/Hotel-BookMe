import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getHotelBook } from "../store/features/bookSlice";

const Book = () => {
  const { book, isLoading } = useSelector(
    (state) => state.hotelRoomBook
  );
  const email = useSelector((state) => state.cardInfo.email);

  const dispatch = useDispatch();

  const removeRoom = async (roomId) => {
    await axios.delete(`http://localhost:3009/api/places/book/${roomId}`);
    dispatch(getHotelBook());
  };
  return (
    <div>
      <div className="w-5/6 mx-auto">
        <h1 className="text-3xl text-center py-4">Book Hotel</h1>

        <div className="flex gap-x-10 flex-wrap my-6 gap-y-6">
          {isLoading && <h1>Loading...</h1>}
          <div className="py-10 my-10  flex gap-x-16 gap-y-10 flex-col md:flex-row  lg:flex-row flex-wrap justify-start items-start ">
            {book?.map((item) => {
              if (item.userEmail === email) {
                return (
                  <div className="bg-red-400 w-[300px] h-min rounded-md ">
                    <div className="w-full h-[150px] rounded-md">
                      <img
                        src={`http://localhost:3009/api/upload/${item.image}`}
                        className="w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className="w-full pt-4 px-4">
                      <h1>{item.roomName}</h1>
                      <p>{item.roomDescription}</p>
                      <p className="">Room Type: {item.roomType}</p>

                      <button
                        className={`ml-3 bg-slate-900 text-white px-4 py-1 my-2 rounded-sm`}
                        onClick={() => removeRoom(item.id)}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
