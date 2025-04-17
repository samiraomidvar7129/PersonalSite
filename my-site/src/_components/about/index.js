import PositionText from "../positionText";
import WhyMe from "../whyMe";

const AboutComp = () => {

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[75%] mx-auto mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       <PositionText/>
       <WhyMe/>
      </div>
    </div>
  );
};
export default AboutComp;