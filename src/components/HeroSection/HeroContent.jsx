import HeroImage from "../../assets/icons/HeroImage.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <div className="container mx-auto px-4 pl-10 flex flex-col md:flex-row items-center ">
      <div className="md:w-1/2 mb-8 md:mb-0 relative pl-4">
        <div className="absolute -left-2 top-0 w-1 bg-[#FFCE5C] h-[4.5rem]"></div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-4xl font-medium mb-4 text-white"
        >
          Accelerate Innovation
          <br />
          with Global AI Challenges
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg mb-6 text-gray-300"
        >
          AI Challenges at DPhi simulate real-world problems. It is a great
          place to put your AI/Data Science skills to test on diverse datasets
          allowing you to foster learning through competitions.
        </motion.p>
        <Link
          to="/createChallenge"
          className="bg-white text-[#003145] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Create Challenge
        </Link>
      </div>
      <div className="md:w-1/2">
        <motion.img
          initial={{ y: 500 }}
          animate={{ y: 1 }}
          transition={{ delay: 1.5 }}
          src={HeroImage}
          alt="Hero"
          className="w-full h-auto max-w-[80%] mx-auto"
        />
      </div>
    </div>
  );
};

export default HeroContent;
