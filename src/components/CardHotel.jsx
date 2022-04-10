import React from 'react'

import {AiFillStar} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'

const CardHotel = (props) => {
    
   
    return (
        <div className='mt-10 ' key={props.id}>
            <div className="" key={props.id}>
                {/* -------------card-------- */}
                <div key={props._id} className={`rounded-md bg-slate-100 w-[350px] `}>
                   <div className="relative">
                   <div className="w-full h-full absolute bg-gradient-to-b from-zinc-400 to-zinc-900 opacity-60"></div>
<img src={`http://localhost:3009/api/upload/${props.img}`} alt="" className='w-full   h-52 object-cover rounded-t-md  '/>

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
