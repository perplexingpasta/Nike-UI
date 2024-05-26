import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex items-center justify-between gap-10 max-lg:flex-col"
      id="contact-us"
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Subscribe for the
        <span className="text-coral-red"> Latest Offers</span> & Updates
      </h3>
      <div className="flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border sm:border-slate-gray lg:max-w-[40%]">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button label="Subscribe Now" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
