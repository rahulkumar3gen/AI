import logo from "../../assets/icons/logo.svg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-white h-16 flex items-center px-4">
      <motion.img
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3, type: "spring" }}
        src={logo}
        alt="Logo"
        className="h-8 ml-6"
      />
    </header>
  );
};

export default Header;
