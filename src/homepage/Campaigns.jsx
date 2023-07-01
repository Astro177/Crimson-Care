/* eslint-disable @next/next/no-img-element */
"use client";
import CampaignCard from "@/components/CampaignCard";
import Slider from "react-slick";

const events = [
  {
    date: "15th July, 2023",
    title: "Summer Blood Drive",
    details:
      "Join us for our annual summer blood drive and help save lives. Every donation counts!",
    location: "Community Center",
    time: "3.30 - 4.30",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHd0ug4RpS_Wb1yQ1uR9mi9I0U5FtFQSRZlg&usqp=CAU",
  },
  {
    date: "2nd August, 2023",
    title: "Back to School Blood Donation",
    details:
      "Give the gift of life before heading back to school. Your blood donation can make a difference in someone's life.",
    location: "City Hospital",
    time: "4.00 - 5.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvF_mt8EPS565OmUx2LdH_5zchPXlO71qpg&usqp=CAU",
  },
  {
    date: "10th September, 2023",
    title: "Heroes Blood Donation Marathon",
    details:
      "Be a hero and donate blood at our marathon event. Together, we can save lives and make a positive impact on the community.",
    location: "Sports Arena",
    time: "3.15 - 4.45",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_x-w14YiwYXVL-lT9KcJ8QqaUXAy4ud2wA&usqp=CAU",
  },
  {
    date: "20th October, 2023",
    title: "Autumn Blood Donation Drive",
    details:
      "Join us for our autumn blood donation drive and help make a difference in the lives of those in need.",
    location: "Town Hall",
    time: "2.00 - 4.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3pNnZrZXctDOH0BWWh6XREq6QyrVYqOzmQ&usqp=CAU",
  },
  {
    date: "5th November, 2023",
    title: "Giving Thanks Blood Donation Event",
    details:
      "Give thanks and give back by donating blood at our special Thanksgiving event. Your donation can help save lives.",
    location: "Community Center",
    time: "5.30 - 7.30",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YYnVrEP8eGG7LCR4S00hl-ZKIGptQc_r_g&usqp=CAU",
  },
];

const Campaigns = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <section className="container mx-auto mt-28 mb-24">
      <div className="text-start">
        <h1 className="uppercase font-bold text-4xl mb-4">OUR CAMPAIGNS</h1>
        <div className="flex justify-start">
          <hr className="border-[2px] border-red-700 mb-6 w-20" />
        </div>
        <p>
          Encourage new donors to join and continue to give blood. We have total
          sixty thousands <br />
          donor centers and visit thousands of other venues on various
          occasions.
        </p>
      </div>
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
      {/* <Slider {...settings}> */}
          {events.map((item) => (
            <CampaignCard key={item.title} item={item} />
          ))}
      {/* </Slider> */}
        </div>
    </section>
  );
};

export default Campaigns;
