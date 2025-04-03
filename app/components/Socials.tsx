import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
export default function Socials() {
  return (
    <div className="flex items-center space-x-2">
      <a href="" target="_blank">
        <AiFillInstagram size={30} className="hover:scale-120 duration-200" />
      </a>
      <a href="" target="_blank">
        <AiFillFacebook size={30} className="hover:scale-120 duration-200" />
      </a>
      <a href="" target="_blank">
        <FaXTwitter size={30} className="hover:scale-120 duration-200" />
      </a>
    </div>
  );
}
