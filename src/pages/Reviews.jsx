import React , {useState} from "react";
import CardHotel from "../components/CardHotel";
import data from "../data";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const price =(a, b) => b.price - a.price;
const rating =(a, b) => b.rating - a.rating;

const Reviews = () => {


const [dataSort, setdataSort] = useState(data)
const [data2, setData2] = useState([]);
const [sortType, setSortType] = useState('albums');



useEffect(() => {
  const sortArray = type => {
    const types = {
      price: 'price',
      rating: 'rating',
      name: 'name',
    };
    const sortProperty = types[type];
    const sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);
    setData2(sorted);
  };
  sortArray(sortType);
}, [sortType]); 
  return (
    <div>
      <div className="w-full mx-auto">
          <div className="select">
            
          <select className=" bg-slate-300 border-none focus:outline-none" onChange={(e) => setSortType(e.target.value)}> 
          <option value="">Select</option>
       <option value="price">Price</option>
       <option value="rating">Rarting</option>
       <option value="name">Name</option>
     </select>
{/* <button className="bg-black md:px-4 md:text-lg py-1 px-2 text-white rounded-md" onClick={() => sortData('price')} >Sort By Price</button>
<button className="bg-black md:px-4 md:text-lg py-1 px-2 text-white rounded-md" onClick={() => sortData('rating')} >Sort By Rating</button> */}
          </div>
        <div className="flex gap-x-8 gap-y-4 px-6 flex-wrap my-8">
          {data2.map((item, index) => (
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
