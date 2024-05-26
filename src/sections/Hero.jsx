import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
import AnimatedStat from "../components/AnimatedStat";
// import Shoe3dModel from "../components/Shoe3dModel";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start pt-28 xl:w-2/5">
        <p className="font-montserrat text-xl text-coral-red">
          Our Fall Collection is here!
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrivals
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span> Wear
        </h1>
        <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
          Discover stylish Nike arrivals with quality comfort and innovation for
          your active lifestyle.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />

            // OLD CODE WITHOUT ROLLING ANIMATION
            // <div key={stat.label}>
            //   <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
            //   <p className="font-montserrat leading-7 text-slate-gray">
            //     {stat.label}
            //   </p>
            // </div>
          ))}
        </div>
      </div>

      {/* <Shoe3dModel /> */}
      {/* HERO IMAGE */}
      <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img
          src={bigShoeImg}
          alt="Shoe Image"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />
        <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
