import { useContext } from "react";
import { useParams } from "react-router-dom"
import { HotelContext } from "../context/HotelContext";
import { FaLocationArrow } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const RoomDetails = () => {
  const { id } = useParams();
  const { roomsData } = useContext(HotelContext);
  const hotel = roomsData.find((room) => room._id === id)
  if (!hotel) {
    return <div className="text-black mt-36">Hotel Not Found!</div>
  }


  return (
    <section className=" w-80 mx-auto mt-28 my-5 px-4 py-2 flex flex-col justify-center items-center gap-2">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-3xl text-[#ce7e00]">{hotel.hotel}</h2>
        <span className='text-base text-[#2c2828] font-mono '>{hotel.city}</span>
        <div className='flex justify-center items-center text-[#7b7b7b] gap-1'>
          <FaLocationArrow />
          <span className='text-xs'>{hotel.address}</span>
        </div>
      </div>
      <div className="w-80 h-full rounded-md">
        <img src={hotel.images} alt={hotel.hotel} className="w-full h-full rounded-md object-cover" />
      </div>
      <div className="flex justify-between w-full">
        {/* left */}
        <div className=" flex flex-col gap-1 ">
          <div>
            <h4 className="text-[#edb273] font-semibold">Rooms Type</h4>
            <span className="text-sm text-[#5b5b5b] font-medium">{hotel.roomType}</span>
          </div>
          <div>
            <h4 className="text-[#edb273] font-semibold">Amenities</h4>
            <ul>
              {hotel.amenities.map((a, i) => (
                <li key={i} className="text-sm text-[#5b5b5b] font-medium  list-inside list-disc" >{a}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-1">
          <div>
            <h4 className="text-[#edb273] font-semibold">Price Par Night</h4>
            <span className="text-sm text-[#5b5b5b] font-medium">${hotel.pricePerNight}</span>
          </div>
          <div>
            <h4 className="text-[#edb273] font-semibold">Rating</h4>
            <div className="flex items-center gap-1">
              {[...Array(hotel.rating)].map((_, i) => (
                <FaStar key={i} className="text-[#ffd966]" />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#edb273] font-semibold">Availability</h4>
            <span className={`${hotel.isAvailable ? 'text-green-600' : 'text-red-600'} font-medium text-sm`}>{hotel.isAvailable ? 'Available' : 'Not Available'}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h4 className="text-[#edb273] font-semibold">Location</h4>
        <iframe title="map"  loading="lazy" src={`https://www.google.com/maps/embed?pb=${encodeURIComponent(hotel.address)}`} className="w-full h-[450px] rounded-md shadow ">
        </iframe>
      </div>
    </section>
  )
}

export default RoomDetails