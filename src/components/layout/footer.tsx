import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default async function Footer() {
  return <footer className="bg-black">
    <div className="container m-auto py-10">
      <Image alt="logo" src="/images/logo.webp" width={100} height={50} />
      <div className="flex justify-between mt-3 border-b border-gray-500 pb-10 flex-wrap">
        <div>
          <p className="text-white">Open Daily 9am-9pm</p>
        </div>
        <div className="flex gap-10 text-white w-full mt-5 md:w-auto md:mt-auto">
          <ul>
            <li className="uppercase font-bold text-gray-300">Connect with us</li>
            <li>1105 W Chisholm St</li>
            <li>Alpena, MI 4907</li>
            <li>(989) 340-0374</li>
            <li>info@parccannabis.com</li>
            <li>
              <div className="flex gap-3 mt-3">
                <a href=""><FontAwesomeIcon icon={faInstagram} className="text-2xl" /></a>
                <a href=""><FontAwesomeIcon icon={faFacebook} className="text-2xl" /></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} className="text-2xl" /></a>
            </div>
            </li>
          </ul>
          <ul>
            <li className="uppercase font-bold text-gray-300">QUICK LINKS</li>
            <li><a href="">Shop</a></li>
            <li><a href="">Deals</a></li>
            <li><a href="">Rewards</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Career</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-3 flex justify-between text-white text-sm flex-wrap">
        <span>@4024, PARC Cannabis, All Rights Reserved.</span>
        <div className="flex gap-1 w-full md:w-auto">
          <a href="">Privacy Policy</a>
          <span>|</span>
          <a href="">Terms of Use</a>
          <span>|</span>
          <a href="">EULA</a>
        </div>
      </div>
    </div>
  </footer>;
}
