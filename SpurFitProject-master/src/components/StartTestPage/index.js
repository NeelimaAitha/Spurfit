import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

import "./index.css";

const StartTestPage = () => {
  const startTestBtn = useRef(null);
  const [animated, setAnimated] = useState(false);
  const intersection = useIntersection(startTestBtn, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  useEffect(() => {
    if (intersection && intersection.intersectionRatio ===1 && !animated) {
      gsap.fromTo(
        startTestBtn.current,
        {
          opacity: 0,
        },
        {
          duration: 3,
          opacity: 1,
        }
      );
      setAnimated(true);
    } else if (intersection && intersection.intersectionRatio !== 1) {
      setAnimated(false);
    }
  }, [intersection, animated]);
  return (
    <div className="start-test-container">
      <p className="start-test-text1">We take privacy seriously</p>
      <h1 className="start-test-text2">Before you get started</h1>
      <p className="start-test-text3">
        "We wont share your answers with anyone (and won't ever tell you which
        friends said what about you)""
      </p>
      <p className="with-love-text">
        with love, <span className="with-love-sign">Team ahead</span>
      </p>
      <button className="start-test-btn" ref={startTestBtn}>
        Start a test
      </button>
      <p className="test-duration">Take only 5 minutes</p>
    </div>
  );
};

export default StartTestPage;
