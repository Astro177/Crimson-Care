/* eslint-disable @next/next/no-img-element */
import process1 from "@/assets/blood-donor.jpg";
const Process = () => {
  return (
    <section className="container mx-auto mt-28 mb-24">
      <div className="text-center ">
        <h1 className="uppercase font-bold text-4xl mb-4">Donation Process</h1>
        <div className="flex justify-center">
          <hr className="border-[2px] border-red-700 mb-6 w-20" />
        </div>
        <p>
          The donation process from the time you arrive center until the time
          you leave
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 justify-center items-center mt-16">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.redcross.sg/images/BDRP/Blood_donation_process.JPG"
              alt="Shoes" className="w-screen"
            />
          </figure>
          <div className="card-actions justify-start">
            <p className="font-bold text-5xl bg-red-400 opacity-80 w-28 text-center h-20 absolute top-0 rounded-md ">
              1
            </p>
          </div>
          <div className="card-body">
            <h2 className="card-title mt-6 text-3xl">REGISTRATION</h2>
            <p className="text-xl text-black/70">
              You need to complete a very simple registration form. Which
              contains all required contact information to enter in the donation
              process.
            </p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://media.istockphoto.com/id/1338750217/photo/nurse-preparing-patient-to-do-a-blood-analysis.jpg?s=612x612&w=0&k=20&c=HhqYNGE4GhNVegUysfyWjce08QO_fS3t0lqeCnn54cM="
              alt="Shoes" className="w-screen"
            />
          </figure>
          <div className="card-actions justify-star">
            <p className="font-bold text-5xl bg-red-400 opacity-80 w-28 text-center h-20 absolute top-0 rounded-md">
              2
            </p>
          </div>
          <div className="card-body">
            <h2 className="card-title mt-6 text-3xl">SCREENING</h2>
            <p className="text-xl text-black/70">
              A drop of blood from your finger will take for simple test to
              ensure that your blood iron levels are proper enough for donation
              process.
            </p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://indusscrolls.com/wp-content/uploads/2023/06/1643137545_blood.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-actions justify-start">
            <p className="font-bold text-5xl bg-red-400 opacity-80 w-28 text-center h-20 absolute top-0 rounded-md ">
              3
            </p>
          </div>
          <div className="card-body">
            <h2 className="card-title mt-6 text-3xl">DONATION</h2>
            <p className="text-xl text-black/70">
              After ensuring and passed screening test successfully you will be
              directed to a donor bed for donation. It will take only 6-10
              minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
