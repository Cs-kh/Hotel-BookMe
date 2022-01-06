import React from 'react'
import {useSelector} from 'react-redux'
import CardHotel from '../components/CardHotel'
import { Link } from 'react-router-dom'
const Book = () => {
     const hotelInfo = useSelector(state => state.cardInfo.items)

    return (
        <div>
         <div className="w-5/6 mx-auto">
             <h1 className='text-3xl text-center'>Book Hotel</h1>

             <div className="flex gap-x-10 flex-wrap my-6">
                 {
                     hotelInfo.map((items,index) => (
                        <Link to={`/hotel/${items.id}`}>
                        <CardHotel key={items + index } img={items.imgs} name={items.name} city={items.city} rating={items.rating} price={items.price} />
                      </Link>
                     ))
                 }
             </div>
         </div>
        </div>
    )
}

export default Book
