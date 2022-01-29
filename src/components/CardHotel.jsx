import React from 'react'

import {AiFillStar} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
const CardHotel = (props) => {
    return (
        <div className='mt-10 '>
            <div className="">
                {/* -------------card-------- */}
                <div key={props.id} className={`rounded-md bg-slate-100 w-[350px]   `}>
                   <div className="relative">
                   <div className="w-full h-full absolute bg-gradient-to-b from-zinc-400 to-zinc-900 opacity-60"></div>
<img src={props.img} alt="" className='w-full   h-52 object-cover rounded-t-md  '/>
<p className='absolute right-0 top-8 pr-6 text-sm pl-4 py-1 bg-white'>{props.price}$ per day</p>
</div>
                    <div className="p-4 flex flex-col gap-1 items-baseline">
<p className='text-base'>{props.name}</p>
<p className='text-sm flex items-baseline  '><span className='pr-1'><ImLocation /></span> <span>{props.city}</span></p>
<p className='flex'>
{
     Array(props.rating).fill()
        .map((_, index) => (
          <span>{<AiFillStar />}</span>
        ))
}
</p>

                    </div>
                </div>
                {/* --------------end of card----------- */}
            </div>
        </div>
    )
}

export default CardHotel
