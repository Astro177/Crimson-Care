/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import banner from "@/assets/blood-donor.jpg";
import Wave from "react-wavify";

const Banner = () => {
  const style = {
    backgroundImage: `url(${banner.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "15px",
  };

  return (
    <section className="mb-12">
      <div
        style={style}
        className="h-[80vh] text-center flex flex-col justify-center"
      >
        <h1 className="text-color font-bold text-6xl">
          DONATE BLOOD AND GET <br /> REAL BLESSINGS.
        </h1>
        <p className="mt-6 text-xl text-white font-semibold">
          Blood is the most precious gift that anyone can give to another
          person.
        </p>
        <p className="text-xl text-white font-semibold">
          Donating blood not only saves the life also save donor's lives.
        </p>
        <div className="flex justify-center items-center mt-10">
          <button className="btn btn-error">Donate Today</button> 
        </div>
        
      </div>
    </section>
  );
};

export default Banner;
