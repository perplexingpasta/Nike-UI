import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimatedStat = ({ value, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation happens only once
    threshold: 0.1, // Triggers when 10% of the component is in view
  });

  return (
    <div ref={ref} className="text-center">
      {inView && (
        <CountUp
          start={0}
          end={value}
          duration={2.5} // Animation duration
          separator=","
          className="font-palanquin text-4xl font-bold"
        />
      )}
      <p className="font-montserrat leading-7 text-slate-gray">{label}</p>
    </div>
  );
};

export default AnimatedStat;
