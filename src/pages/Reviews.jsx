import React , {useState} from "react";
import CardHotel from "../components/CardHotel";
import data from "../data";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Reviews = () => {


const [dataSort, setdataSort] = useState(data)

const sortData = (sort) => {
const sortData = data.sort((a,b) => {
    if (sort === 'price') {
        return b.price - a.price
    }else if (sort === 'rating') {
        return b.rating - a.rating
    }
})
setdataSort(sortData)
}


useEffect(() => {
}, [])
  return (
    <div>
      <div className="w-5/6 mx-auto">
          <div className="flex gap-x-20">
<button className="bg-black px-4 text-lg py-1 text-white rounded-md" onClick={() => sortData('price')} >Sort By Price</button>
<button className="bg-black px-4 text-lg py-1 text-white rounded-md" onClick={() => sortData('rating')} >Sort By Rating</button>
          </div>
        <div className="flex gap-x-8 gap-y-5 flex-wrap my-8">
          {dataSort.map((item, index) => (
            <Link to={`/hotel/${item.id}`}>
              <CardHotel
                key={item + index}
                img={item.imgs}
                price={item.price}
                name={item.name}
                city={item.city}
                rating={item.rating}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
