import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { itemsAction } from "../store";
const Book = () => {
  const hotelInfo = useSelector((state) => state.cardInfo.items);
  const [removeHotelRoom, setRemoveHotelRoom] = useState(false);
  const dispatch = useDispatch();
  const removeRoom = (roomId) => {
    dispatch(itemsAction.removeRoom(roomId));

    setRemoveHotelRoom(false);
  };
  return (
    <div>
      <div className="w-5/6 mx-auto">
        <h1 className="text-3xl text-center py-4">Book Hotel</h1>

        <div className="flex gap-x-10 flex-wrap my-6 gap-y-6">
          {hotelInfo?.map((items, index) =>
            items?.rooms?.map((ele) => {
              if (ele.id === items.roomId) {
                return (
                  <div className="bg-red-400 w-[300px] h-min rounded-md pb-2 ">
                    <div className="w-full h-[150px] rounded-md">
                      <img src={items.imgs} className="w-full h-full" alt="" />
                    </div>
                    <div className="w-full pt-4 px-4">
                      <h1>{ele.name}</h1>
                      <p>{ele.description}</p>
                      <p className="py-1">Number Of Rooms: {ele.numberRoom}</p>

                      <button
                        className="bg-black py-1.5 my-1 px-3 text-white"
                        onClick={() => setRemoveHotelRoom(true)}
                      >
                        Remove
                      </button>
                      {!removeHotelRoom ? (
                        " "
                      ) : (
                        <div className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-slate-200 w-56 h-52 opacity-80 flex justify-center items-center flex-col">
                          <p className="text-center text-lg pb-4">
                            remove Hote !!!!
                          </p>
                          <div className="flex gap-x-4">
                            <button
                              type="button"
                              className="px-4 py-1.5 bg-slate-800 text-white "
                              onClick={() => setRemoveHotelRoom(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="px-4 py-1.5 bg-slate-800 text-white "
                              onClick={() => removeRoom(ele.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* </div>
             <div className="">
                 <h1>{ele.id}</h1>
                 <h1>{ele.name}</h1>
                 <h1>{ele.numberRoom}</h1>
             </div>          */}
                  </div>
                );
              }else {
                return null
              }
            })

          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
