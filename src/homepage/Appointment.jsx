// import banner from "@/assets/blood.jpg"
import banner from "@/assets/blood.jpg";
import Image from "next/image";
import {
  PiHeartbeatFill,
  PiStethoscope,
  PiCalculatorFill,
} from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa";

const Appointment = () => {
  return (
    <section className="mx-auto mt-24 mb-24 relative">
      <div>
        <Image src={banner} alt="banner" className="w-screen h-[70vh]" />
      </div>
      <div className="text-start mx-auto container mt-24">
        <h1 className="uppercase font-semibold text-2xl mb-4">Good To Know</h1>
        <div className="flex justify-start">
          <hr className="border-[2px] border-red-700 mb-2 w-20" />
        </div>
        <div className="text-4xl font-bold text-color">
          Helpful Information
          <ul className="mt-8 text-xl flex flex-col gap-3 list-disc mx-auto text-black/60">
            <li>Maintain a healthy iron level by eating iron rich foods.</li>
            <li>Drink an extra 16 oz. of water prior to your donation.</li>
            <li>Avoid alcohol consumption before your blood donation.</li>
            <li>Remember to bring the donor card or national ID/Passport.</li>
            <li>
              Finally, Try to get a good night sound sleep after donation.
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:max-w-2xl text-center lg:absolute sm:mt-24 lg:mt-0 top-[40vh] right-48 container mx-auto">
        <div className="bg-slate-700 p-8 font-bold text-white text-2xl">
          REQUEST APPOINTMENT
        </div>
        <div className="p-10 bg-slate-300">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="input w-full" />
            <input type="text" placeholder="Email" className="input w-full" />
            <input type="text" placeholder="Phone" className="input w-full" />
            <select name="" id="" className="h-12 rounded-md">
              <option value="">Donation Center</option>
              <option value="">City Hospital</option>
              <option value="">Central High School</option>
              <option value="">City Hall</option>
            </select>
            <input type="text" placeholder="Date" className="input w-full" />
            <input type="text" placeholder="Time" className="input w-full" />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Your Message..."
            ></textarea>
            <div className="flex justify-center items-center mt-6">
              <button className="btn-main">Get Appointment</button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-48 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-12 mx-auto container">
        <div className="flex flex-col justify-center items-center rounded-xl gap-3 bg-slate-300 p-10 sm:w-full lg:w-54 mx-auto">
          <PiHeartbeatFill className="text-5xl hover:text-red-600 hover:scale-125 transition-all duration-200" />
          <p className="text-3xl text-color font-bold">1950</p>
          <p className="text-xl font-semibold">Success Smile</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-xl gap-3 bg-slate-300 p-10 sm:w-full lg:w-54 mx-auto">
          <PiStethoscope className="text-5xl hover:text-red-600 hover:scale-125 transition-all duration-200" />
          <p className="text-3xl text-color font-bold">1150</p>
          <p className="text-xl font-semibold">Happy Donors</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-xl gap-3 bg-slate-300 p-10 sm:w-full lg:w-54 mx-auto">
          <PiHeartbeatFill className="text-5xl hover:text-red-600 hover:scale-125 transition-all duration-200" />
          <p className="text-3xl text-color font-bold">3568</p>
          <p className="text-xl font-semibold">Happy Recipient</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-xl gap-3 bg-slate-300 p-10 sm:w-full lg:w-54 mx-auto">
          <PiHeartbeatFill className="text-5xl hover:text-red-600 hover:scale-125 transition-all duration-200" />
          <p className="text-3xl text-color font-bold">1364</p>
          <p className="text-xl font-semibold">Total Awards</p>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
