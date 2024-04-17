import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { GoogleReviews } from "@src/lib/types/googlereviews";

export default async function Footer({ reviews }: { reviews: GoogleReviews[] }) {
  const featureBG = {
    backgroundImage: 'url("/images/home-bg.webp")',
    backgroundSize:'cover'
  };

  return <>
  <div className="parc-features">
    <div className="grid grid-cols-2 gap-0">
      <div className="max-h-[360px] img-fullcontainer order-last">
        <Image alt="PARCVIP" src="/images/parccannabis-vip.webp" width={720} height={540} />
      </div>
      <div className="min-h-[360px] order-1 flex justify-center items-center" style={featureBG}>
        <div className="parc-vip">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl text-white font-bold">
            Active <strong>PARC</strong><em>VIP</em> Today<br />
            For Free Weed!
          </h2>
          <Link href="/">ACTIVATE NOW</Link>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-0">
      <div className="max-h-[360px] img-fullcontainer">
        <Image alt="PARCVIP" src="/images/parccannabis-specials.webp" width={720} height={540} />
      </div>
      <div className="min-h-[360px] flex justify-center items-center" style={featureBG}>
        <div className="parc-vip">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl text-white font-bold">Shop Specials & Save!</h2>
          <p className="text-white">Check out everyday deals on all of our <br />
          favorite & most popular products.
          </p>
          <Link href="/">SHOP SPECIALS</Link>
        </div>
      </div>
    </div>
  </div>

  <div className="store-features">
    <div className="container m-auto">
      <div className="features-wrapper flex justify-between">
        <div className="feature">
          <Image alt="Order Online" src="/images/order-online.webp" width={137} height={103} />
          <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold mt-5 text-center">ORDER<br />ONLINE</h2>
        </div>
        <div className="feature">
          <Image alt="Pickup In-store" src="/images/pickup-in-store.webp" width={153} height={103} />
          <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold mt-5 text-center">PICKUP<br />IN-STORE</h2>
        </div>
        <div className="feature">
          <Image alt="Delivery Available" src="/images/delivery-available.webp" width={233} height={103} />
          <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold mt-5 text-center">DELIVERY<br />AVAILABLE</h2>
        </div>
      </div>
    </div>
  </div>

  <div className="parc-reviews">
    <div className="container m-auto">
      <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold mt-5">PARC CUSTOMER REVIEWS</h2>
      <div className="parc-review-wrapper">
        <ul className="reviews-left">
          {
            reviews.map((review, idx: number) => (
              <li key={`review-${idx}`}>
                <Image alt={review.author_name} src={review.profile_photo_url} width={50} height={50} />
                <div className="customer-review-info">
                  <h3 className="review-customer">{ review.author_name }</h3>
                  <p className="review-date">{ review.relative_time_description }</p>
                  <div className="rating">
                    <div className="stars">
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                    </div>
                  </div>
                  <p className="review-comment">{ review.text }</p>
                </div>
              </li>
            ))
          }
        </ul>
        <div className="reviews-right">
          <p>We love hearing feedback from our customers, thank you for taking time to share your experience!</p>
          <a target="_blank" href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x4d335d3c295d94ed:0xb81b28fd933165b4!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2" className="write-review"><Image alt="Review Us on Google" src="/images/Google.webp" width={41} height={41} /><span>Review Us on Google</span></a>
        </div>
      </div>
    </div>
  </div>

  <footer className="bg-black">
    <div className="container m-auto py-10">
      <Image alt="logo" src="/images/logo.webp" width={100} height={50} />
      <div className="flex justify-between mt-3 border-b border-gray-500 pb-10 flex-wrap gap-10">
        <div>
          <p className="text-white">Open Daily 9am-9pm</p>
        </div>
        <div className="flex-1 min-w-[350px]">
          <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11270.67612440253!2d-83.444968!3d45.0722246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d335d3c295d94ed%3A0xb81b28fd933165b4!2sParc%20Cannabis!5e0!3m2!1sen!2sus!4v1713259056050!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="footer-right flex text-white w-full mt-5 md:w-auto md:mt-auto">
          <div className="widget widget-address">
            <h3 className="uppercase font-bold">Connect with us</h3>
            <address>1105 W Chisholm St<br />
              Alpena, MI 4907<br />
              (989) 340-0374<br />
              info@parccannabis.com
            </address>
            <div className="widget widget-socials flex gap-3">
              <a target="_blank" href="https://www.instagram.com/parcmichigan/?igshid=YmMyMTA2M2Y%3D"><FontAwesomeIcon icon={faInstagram} className="text-2xl" /></a>
            </div>
          </div>
          <ul className="widget widget-menu">
            <li className="uppercase font-bold">QUICK LINKS</li>
            <li><a href="">Shop</a></li>
            <li><a href="">Deals</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-5 flex justify-between text-white text-sm flex-wrap">
        <span className="copyright">© 2024. PARC Cannabis. All Rights Reserved.</span>
        <div className="flex gap-1 w-full md:w-auto">
          <ul className="policy-menu">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Use</Link></li>
            {/* <li><a href="">EULA</a></li> */}
          </ul>
        </div>
      </div>
    </div>
  </footer>
  </>
  ;
}
