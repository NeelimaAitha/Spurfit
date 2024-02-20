import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

import "./index.css";

const MeetAhead = () => {
  const meetAheadHeader = useRef(null);
  const meetAheadImage = useRef(null);
  const [animated, setAnimated] = useState(false);
  const intersection = useIntersection(meetAheadHeader, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.3 && !animated) {
      gsap.from(meetAheadHeader.current, {
        duration: 1,
        x: "-70",
        ease: "power.in",
      });
      gsap.from(meetAheadImage.current, {
        duration: 2,
        opacity: 0,
        rotate: 360,
        ease: "power1.inOut",
      });
      setAnimated(true);
    } else if (intersection && intersection.intersectionRatio === 0) {
      if (animated === true) {
        setAnimated(false);
      }
    }
  }, [intersection, animated]);
  return (
    <div className="meet-ahead-container">
      <header className="meet-ahead-header" ref={meetAheadHeader}>
        <p className="meet-ahead-top-text">Built out of frustation</p>
        <h1 className="meet-ahead-title">Meet the ahead app</h1>
      </header>
      <div className="meet-ahead-body">
        <img
          src="https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg"
          className="meet-ahead-image"
          alt="meet ahead"
          ref={meetAheadImage}
        />
        <p className="meet-ahead-content">
          A personalized pocket coach that provides bite-sized, science-driven
          tools to boost emotional intelligent.
          <br /> Think of it as a pocket cheerleader towards a better, more
          fulfilling.
        </p>
      </div>
    </div>
  );
};
export default MeetAhead;
