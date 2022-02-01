import React from "react";
import { useSelector } from "react-redux";
import CardHotel from "../components/CardHotel";
import { Link } from "react-router-dom";
const Book = () => {
  const hotelInfo = useSelector((state) => state.cardInfo.items);

  return (
    <div>
      <div className="w-5/6 mx-auto">
        <h1 className="text-3xl text-center">Book Hotel</h1>

        <div className="flex gap-x-10 flex-wrap my-6 gap-y-6">
          {hotelInfo?.map((items, index) => (
            <Link to={`/hotel/${items.id}`}>
              {/* <CardHotel key={items + index } img={items.imgs} name={items.name} city={items.city} rating={items.rating} price={items.price} /> */}
              <h1>{items.name}</h1>
              {items?.rooms?.map((ele) => {
if (ele.id === items.roomId) {
    return (
             
        <div className="bg-red-400 w-[300px] h-min rounded-md ">
        <div className="w-full h-[150px] rounded-md">
<img src={items.imgs} className="w-full h-full" alt="" />
        </div>
<div className="w-full pt-4 px-4">
<h1>{ele.name}</h1>
<p>{ele.description}</p>
<p className='' >Number Of Rooms: {ele.numberRoom}</p>

</div>
    {/* </div>
             <div className="">
                 <h1>{ele.id}</h1>
                 <h1>{ele.name}</h1>
                 <h1>{ele.numberRoom}</h1>
             </div>          */}
             </div>
        )
}
              
                    }
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
