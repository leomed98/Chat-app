import { IoSearchCircleOutline } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className= 'flex items-center gap-20'>
            <input type="text" placeholder=" Search..." className="input-bordered rounded-full"/>
            <button type="Submit" className=' btn btn-info btn-circle bg-gray-600 text-white hover:bg-purple-400 '>
            <IoSearchCircleOutline className="w-8 h-8 " />
            </button>
        </form>
    )
}
export default SearchInput;




{/*import { IoSearchCircleOutline } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className= 'flex items-center gap-2'>
            <input type="text" placeholder=" Search..." className="input-bordered rounded-full"/>
            <button type="Submit" className='btn btn-circle bg-gray-600 text-white'>
            <IoSearchCircleOutline className="w-8 h-8 " />
            </button>
        </form>
    )
}
export default SearchInput;*/}