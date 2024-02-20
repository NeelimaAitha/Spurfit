import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

import "./index.css";

const HomePage = () => {
  const homeHead = useRef(null);
  const homePara = useRef(null);
  const homeImage = useRef(null);
  const homeImageMobile = useRef(null);
  const [animated, setAnimated] = useState(false);
  const intersection = useIntersection(homeHead, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  const headAndPara = (e) => {
    gsap.from(e, {
      duration: 1,
      y: "-60",
      opacity: 0,
      ease: "bounce",
    });
  };
  const homeImages = (e) => {
    gsap.from(e, {
      duration: 2,
      opacity: 0,
      rotate: 360,
      ease: "power1.inOut",
    });
  };
  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.3 && !animated) {
      headAndPara(homeHead.current);
      headAndPara(homePara.current);
      homeImages(homeImage.current);
      homeImages(homeImageMobile.current);
      setAnimated(true);
    } else if (intersection && intersection.intersectionRatio === 0) {
      setAnimated(false);
    }
  }, [intersection, animated]);
  return (
    <div className="home-page">
      <div className="home-content">
        <p className="ahead-text" ref={homePara}>
          Ahead app
        </p>
        <h1 className="home-head" ref={homeHead}>
          Master your life by mastering your emotions
        </h1>
        <img
          src="https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg"
          className="home-image home-in-mobile"
          alt="home"
          ref={homeImageMobile}
        />
        <div className="app-and-rating">
          <img
            src="https://brandeps.com/logo-download/D/Download-on-the-App-Store-logo-vector-01.svg"
            className="app-store-image"
            alt="app store"
          />
          <div className="rating-container">
            <img
              src="https://t3.ftcdn.net/jpg/06/04/56/52/360_F_604565205_NMEgtTykGn8oEcqS0nHzVwDvvgWQbkhI.jpg"
              className="five-star-image"
              alt="five star"
            />
            <p className="rating">100+ AppStore reviews</p>
          </div>
        </div>
      </div>
      <img
        src="https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg"
        className="home-image"
        alt="home"
        ref={homeImage}
      />
    </div>
  );
};

export default HomePage;
