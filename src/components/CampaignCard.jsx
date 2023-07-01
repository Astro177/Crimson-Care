/* eslint-disable @next/next/no-img-element */
import { BsFillCalendarDateFill, BsFillClockFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
const CampaignCard = ({ item }) => {
  const { title, date, image, details, location, time } = item;
  return (
    <div className="card card-side bg-base-100 shadow-xl overflow-auto h-96">
      <figure>
        <img src={image} alt="blood donation" className="h-full mr-12" />
      </figure>
      <div className="flex flex-col justify-center">
        <div className="mb-6 flex gap-2 items-center">
          <BsFillCalendarDateFill className="text-red-500" />
          {date}
        </div>
        <h2 className="text-3xl text-color font-semibold mb-4">{title}</h2>
        <p>{details}</p>
        <div className="flex mt-8 gap-16 items-center">
          <div>
            <div className="flex gap-2 items-center"><BsFillClockFill className="text-red-500"/>{time}</div>
          </div>
          <div>
          <div className="flex gap-2 items-center"><MdLocationPin className="text-red-500 text-2xl"/>{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
