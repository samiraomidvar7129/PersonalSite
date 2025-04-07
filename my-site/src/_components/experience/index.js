import { motion } from "framer-motion";
const ExperienceComp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-[75%] mx-auto">
        <div className="py-5 flex flex-col justify-center items-start">
          <div className=" px-5 ">
            <div className="mt-5">
              <h6 className="font-bold text-white"> Education</h6>
            </div>
            <div className="mt-8">
              <p className=" text-white leading-[32px] text-xs">
                Throughout my career and learning in the field of front-end
                development, I have implemented various projects with different
                goals and at different scales. These projects not only
                strengthened my technical skills, but also gave me a deeper
                understanding of the actual development of functional products
                for end users.
              </p>
            </div>
            <div />
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};
export default ExperienceComp;
