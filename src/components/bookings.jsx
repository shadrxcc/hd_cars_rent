import ferrari from "../assets/ferrari.png";

const Bookings = () => {
  return (
    <>
      <div className="flex bg-[#232323] justify-between items-center m-3 rounded-lg p-3">
        <div className="flex items-center">
          <img src={ferrari} className="w-28" alt="ferrari" />
          <span className="text-white flex flex-column gap-2">
            <h3>Enzo Ferrari</h3>
            <p className="text-xs">20-02-2023</p>
          </span>
        </div>

        <div>
          <h3 className="text-white">$6000</h3>
        </div>
      </div>
    </>
  );
};

export default Bookings;
