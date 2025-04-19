import { austyke } from "@/config/font";
import '../../app/globals.css';
const Logo = () => {
  return (
    <div  className={` flex justify-center sm:justify-start items-center ${austyke.variable}`}>
      <h2  className="logoText text-2xl sm:text-2xl lg:text-2xl text-white">
        S.Omidvar
      </h2>
    </div>
  );
};
export default Logo;