import React ,{useEffect , useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import cardInfo from '../data.js'
import img12 from '../assets/card/12.jpg'
import {AiFillStar} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import {itemsAction} from '../store/index'
import { auth } from '../firebase.js'
import { onAuthStateChanged } from 'firebase/auth'
import { useSelector } from 'react-redux'
const HotelInfo = () => {
    const param =useParams()
  
    const bookInfo = useSelector(state => state.cardInfo.bookInfo)
    const addRoom = useSelector(state => state.cardInfo.addRoom)
    const [card,setCard] = useState([])
    const [bool , setBool] = useState(false)
    const [popUp , setPopUp] = useState(true)
    
const navigate =useNavigate()

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
    const addHotel = (roomsId ) => {
    if (bool) {
        dispatch(itemsAction.addInfo({
            id:param.id,
            name:card[0].name,
            city:card[0].city,
            price:card[0].price,
            rating:card[0].rating,
            distance:card[0].distance,
            location:card[0].location,
            imgs:card[0].imgs,
        
            roomId:roomsId,
            
rooms:card[0].rooms
        }))
     
    }
    else {
        setPopUp(false)
    }
    }
    
    useEffect(()=> {
  const login = onAuthStateChanged(auth , (currentUser) => {
       if (currentUser) {
           setBool(true)
       }
   })
   login()
    }, [bool])
    const cancelBook = () => {
        dispatch(itemsAction.bookCancel())
    }
    const popupLogin = () => {
        setPopUp(true)
        navigate('/login')
    }
   
const cancelRoom = () => {
    dispatch(itemsAction.cancelRoom())
}


    return (
        <div className='mb-12'>
         
            <div className="w-5/6 mx-auto flex flex-col">
                <div className="">
           {
               card.map((item , index) => (
                   <div key={item.id + index} className="flex gap-x-16 flex-col pt-10 lg:flex-row ">
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
{/* <div className="pt-4">
    <button onClick={addHotel} className='bg-black text-white px-7 py-1.5 rounded-md'>Book</button>
</div> */}
        </div>
                   </div>
               ))
           }
           </div>
           <div className="py-10 my-10  flex gap-x-16 gap-y-10 flex-col md:flex-row  lg:flex-row flex-wrap justify-start items-start ">
               {
                   card?.map(item => 
                    item.rooms.map(items => (
                    
                            <div className="bg-red-400 w-[300px] h-min rounded-md ">
                                <div className="w-full h-[150px] rounded-md">
<img src={item.imgs} className="w-full h-full" alt="" />
                                </div>
<div className="w-full pt-4 px-4">
<h1>{items.name}</h1>
<p>{items.description}</p>
<p className='' >Number Of Rooms: {items.numberRoom}</p>



 <button className='bg-slate-900 text-white px-4 py-1 my-2 rounded-sm ' onClick={() => addHotel(items.id )  }>Book</button> 


</div>
                            </div>
                        
                    ))
                    )
               }
           </div>
           </div>
           {popUp ? ' ' :
           <div className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-slate-200 w-56 h-52 opacity-80 flex justify-center items-center flex-col">
   <p className='text-center text-lg pb-4'>Plese login for Booking Hotel</p>
   <div className="flex gap-x-4">
   <button type='button' className='px-4 py-1.5 bg-slate-800 text-white '  onClick={()=> setPopUp(true)} >Close</button>
   <button type='button' className='px-4 py-1.5 bg-slate-800 text-white '  onClick={popupLogin} >Login</button>
   </div>
           </div> 
        
        }
           {bookInfo ? ' ' :
           <div className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-slate-200 w-56 h-52 opacity-80 flex justify-center items-center flex-col">
   <p className='text-center text-lg pb-4'>The Hotel is Book Befor</p>
   <button type='button' className='px-4 py-1.5 bg-slate-800 text-white '  onClick={cancelBook} >Close</button>
           </div> 
        
        }
           {!addRoom ? ' ' :
           <div className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-slate-200 w-56 h-52 opacity-80 flex justify-center items-center flex-col">
   <p className='text-center text-lg pb-4'>Successfully Add Room</p>
   <button type='button' className='px-4 py-1.5 bg-slate-800 text-white '  onClick={cancelRoom} >Close</button>
           </div> 
        
        }
     
        </div>
    )
}

export default HotelInfo
