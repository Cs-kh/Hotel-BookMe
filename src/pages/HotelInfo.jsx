import React ,{useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import cardInfo from '../data.js'
import img12 from '../assets/card/12.jpg'
import {AiFillStar} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import {itemsAction} from '../store/index'
import { auth } from '../firebase.js'
import { onAuthStateChanged } from 'firebase/auth'
const HotelInfo = () => {
    const param =useParams()
    const [card,setCard] = useState([])
 const dispatch = useDispatch()
    useEffect(() => {
       const cardFilter = () => {
    const newCard = cardInfo.filter((items) => {
        return items.id === param.id 
    })
    setCard(newCard)
       }
       cardFilter()
    }, [param.id])
    const addHotel = () => {
     onAuthStateChanged(auth,(currentUser) => {
         currentUser ?  dispatch(itemsAction.addInfo({
            id:param.id,
            name:card[0].name,
            city:card[0].city,
            price:card[0].price,
            rating:card[0].rating,
            distance:card[0].distance,
            location:card[0].location,
            imgs:card[0].imgs

        })) : alert('please login ')
       
     })
    }
    return (
        <div className='mb-12'>
            <div className="w-5/6 mx-auto">
           {
               card.map((item , index) => (
                   <div key={item + index} className="flex gap-x-16 flex-col pt-10 lg:flex-row ">
        <div className="flex-1  flex flex-wrap gap-y-4 ">
         <div className="w-full relative">
         <div className="w-full h-full absolute bg-gradient-to-b from-zinc-200 to-zinc-900 opacity-60"></div>
             <img src={item.imgs} className='w-full h-400 object-cover rounded-md' alt="" />
         </div>
         <div className="hidden lg:w-full lg:flex lg:gap-x-5 lg:flex-wrap lg:gap-y-4">
<div className="w-20 h-20"><img src={img12} className='w-full h-full object-cover rounded-md' alt="" /></div>
<div className="w-20 h-20"><img src={img12} className='w-full h-full object-cover rounded-md' alt="" /></div>
<div className="w-20 h-20"><img src={img12} className='w-full h-full object-cover rounded-md' alt="" /></div>
<div className="w-20 h-20"><img src={img12} className='w-full h-full object-cover rounded-md' alt="" /></div>
<div className="w-20 h-20"><img src={img12} className='w-full h-full object-cover rounded-md' alt="" /></div>
<div className="w-20 h-20"><img src={img12} className='w-full h-full object-cover rounded-md' alt="" /></div>
<div className="w-20 h-20"><img src={img12} className='w-full h-full object-cover rounded-md' alt="" /></div>
<div className="w-20 h-20"><img src={img12} className='w-full h-full object-cover rounded-md' alt="" /></div>
         </div>
        </div>
        <div className="lg:w-1/3 flex flex-col w-full  pt-8 lg:pt-0 ">
<div className=" flex gap-y-1.5 flex-col  border-b-2 pb-6">
    <div className="flex items-center gap-x-10">
    <h3 className='text-2xl font-semibold'>{item.name}</h3>
    <div className="flex gap-x-1.5">
    {
        Array(item.rating).fill().map((_,index) => (
            <span className='text-xs'><AiFillStar/></span>
        ))
    }
    </div>
    </div>
    <div className="flex gap-x-14">
        <span className='text-xs opacity-80'>{item.location}</span>
        <span className='text-xs opacity-80'>{item.distance}</span>
    </div>
</div>
<div className="pt-3">
    <p className='leading-7 opacity-60 text-sm '>{item.decription}</p>
</div>
<div className="pt-4">
    <button onClick={addHotel} className='bg-black text-white px-7 py-1.5 rounded-md'>Book</button>
</div>
        </div>
                   </div>
               ))
           }
           </div>
        </div>
    )
}

export default HotelInfo
