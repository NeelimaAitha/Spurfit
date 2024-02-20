import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

import "./index.css";

const RateYourSkills = () => {
  const ratingBox = useRef([]);
  const whiteCard = useRef(null);
  const [animated, setAnimated] = useState(false);
  const intersection = useIntersection(whiteCard, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.3 && !animated) {
      ratingBox.current.forEach((element, index) => {
        gsap.from(element, {
          duration: 1,
          x: -60,
          ease: "power.in",
          delay: index * 0.2,
        });
        gsap.set(element, { x: 0 });
      });

      setAnimated(true);
    } else if (intersection && intersection.intersectionRatio === 0) {
      if (animated === true) {
        setAnimated(false);
      }
    }
  }, [intersection, animated]);
  return (
    <div className="rating-skills-container">
      <p className="rating-skills-top-text">
        Let your friends, family and co-workers (anonymously) rate your skills.
      </p>
      <h1 className="rating-skills-title">
        Ever wondered what others think of you?
      </h1>
      <div className="rating-skills-white-card" ref={whiteCard}>
        <div className="rating-skills-timeline-containers">
          <div className="rating-time-line-dot you-dot"></div>
          <div
            className="rating-skills-timeline-items you-box"
            ref={(el) => ratingBox.current.push(el)}
          >
            <p>You</p>
          </div>
        </div>
        <div className="rating-skills-timeline-containers">
          <div className="rating-time-line-dot one-dot"></div>
          <div
            className="rating-skills-timeline-items anonymous-bottom anonymous1"
            ref={(el) => ratingBox.current.push(el)}
          >
            <p>Anonymous 1</p>
          </div>
        </div>
        <div className="rating-skills-timeline-containers">
          <div className="rating-time-line-dot two-dot"></div>
          <div
            className="rating-skills-timeline-items anonymous2"
            ref={(el) => ratingBox.current.push(el)}
          >
            <p>Anonymous 2</p>
          </div>
        </div>
        <div className="rating-skills-timeline-container-last">
          <div className="rating-time-line-dot three-dot"></div>
          <div
            className="rating-skills-timeline-items anonymous-bottom anonymous3"
            ref={(el) => ratingBox.current.push(el)}
          >
            <p>Anonymous 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateYourSkills;
