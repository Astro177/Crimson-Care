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
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://c8.alamy.com/comp/2M3XPTG/cairo-egypt-december-13-2022-registration-for-blood-donor-before-donation-during-a-blood-donation-campaign-for-children-with-thalassemia-donor-is-2M3XPTG.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-actions justify-end">
            <p className="font-bold text-5xl bg-red-400 opacity-80 w-16 text-center h-16 absolute top-0 rounded-md ">
              1
            </p>
          </div>
          <div className="card-body">
            <h2 className="card-title">REGISTRATION</h2>
            <p>
              You need to complete a very simple registration form. Which
              contains all required contact information to enter in the donation
              process.
            </p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://c8.alamy.com/comp/2M3XPTG/cairo-egypt-december-13-2022-registration-for-blood-donor-before-donation-during-a-blood-donation-campaign-for-children-with-thalassemia-donor-is-2M3XPTG.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-actions justify-end">
            <p className="font-bold text-5xl bg-red-400 opacity-80 w-16 text-center h-16 absolute top-0 rounded-md ">
              2
            </p>
          </div>
          <div className="card-body">
            <h2 className="card-title">SCREENING</h2>
            <p>
              A drop of blood from your finger will take for simple test to
              ensure that your blood iron levels are proper enough for donation
              process.
            </p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://c8.alamy.com/comp/2M3XPTG/cairo-egypt-december-13-2022-registration-for-blood-donor-before-donation-during-a-blood-donation-campaign-for-children-with-thalassemia-donor-is-2M3XPTG.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-actions justify-end">
            <p className="font-bold text-5xl bg-red-400 opacity-80 w-16 text-center h-16 absolute top-0 rounded-md ">
              3
            </p>
          </div>
          <div className="card-body">
            <h2 className="card-title">DONATION</h2>
            <p>
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
