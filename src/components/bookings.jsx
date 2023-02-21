import ferrari from "../assets/ferrari.png";
import { AiFillDelete } from "react-icons/ai";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

const Bookings = () => {
  const jwt = window.localStorage.getItem("jwt");
  let setUser = jwtDecode(jwt);
  const currentUser = setUser.username;
  const bookings = useSelector((state) => state.reservationReducer.cars);

  const deleteReservation = (id) => {
    console.log('deleting....')
    fetch(`http://localhost:3100/bookings/${id}`, {
      method: "DELETE",
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something is wrong')
      }
      window.location.reload()
    })
    .catch((err) => console.log(err))
  }
  const renderList = bookings.map((book) => {
    const { id, car, user, start_date, image, location, price } = book;
    if (currentUser === user) {
      return (
      <div
        key={id}
        className="flex flex-col bg-[#232323] justify-between m-3 rounded-lg p-3"
      >
        <button onClick={() => deleteReservation(id)} className="text-white flex justify-end text-xl">
          <AiFillDelete />
        </button>
        <div className="m-auto">
          <img src={image} className="w-40" alt="ferrari" />
        </div>

        <div className="flex justify-between">
          <div className="text-white gap-2">
            <h3>{car}</h3>
            <h3 className="text-white">{price}</h3>
          </div>
          <div className="text-white">
            <p className="text-xs">{start_date}</p>
            <h6 className="text-white">{location}</h6>
          </div>
        </div>
      </div>
    );
    } else {
      return
    }
    
  });

  return (
    <>
      {renderList}
    </>
  );
};

export default Bookings;
