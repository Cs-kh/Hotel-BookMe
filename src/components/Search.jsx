import React  from 'react'
import {FiSearch} from 'react-icons/fi'
const Search = ({search}) => {

    return (
        <div className='mt-16 pl-6'>
            <div className="w-3/4 bg-gray-100 md:w-2/4 py-2 flex items-center px-3 rounded-sm">
<span className='px-2'><FiSearch/></span>
<input type="text" placeholder='Search your hotel...' className='focus:outline-0 border-0 bg-transparent flex-1 py-1 px-4' onChange={(e) => search(e.target.value)}/>
            </div>
        </div>
    )
}

export default Search
