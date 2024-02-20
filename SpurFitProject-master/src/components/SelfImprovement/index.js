import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

import "./index.css";

const selfImprovementsList = [
  {
    id: 1,
    title: "It's not as easy as 1-2-3.",
    description:
      "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
  {
    id: 2,
    title: "It's not as easy as 1-2-3.",
    description:
      "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
  {
    id: 3,
    title: "It's not as easy as 1-2-3.",
    description:
      "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
  {
    id: 4,
    title: "It's not as easy as 1-2-3.",
    description:
      "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
];

const SelfImprovement = () => {
  const selfImprovementHeader = useRef(null);
  const selfImprovementTimeline = useRef(null);
  const [animated, setAnimated] = useState(false);
  const intersection = useIntersection(selfImprovementHeader, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.3 && !animated) {
      gsap.from(selfImprovementHeader.current, {
        duration: 1,
        x: "-100px",
        ease: "power.in",
      });
      gsap.from(selfImprovementTimeline.current, {
        opacity: 0,
        duration: 2,
        y: -70,
        ease: "power.in",
      });
      setAnimated(true);
    } else if (intersection && intersection.intersectionRatio === 0) {
      setAnimated(false);
    }
  }, [intersection, animated]);
  return (
    <div className="self-improvement-container">
      <header className="self-improvement-header" ref={selfImprovementHeader}>
        <p className="self-improvement-top-title">
          Wrong with self-improvement & how we're fixing it.
        </p>
        <h1 className="self-improvement-title">Self-improvement. Ugh.</h1>
      </header>
      <div className="self-improvement-timeline" ref={selfImprovementTimeline}>
        {selfImprovementsList.map((item) => (
          <div className="timeline-container" key={item.id}>
            <div className="time-line-dot"></div>
            <div className="timeline-details">
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="be-the-best-container">
        <h3>Be the best you wit EQ</h3>
        <p>
          Not having your own emotions under control might be holding you back.
        </p>
        <p>
          Additionally, not understanding those of others stops you from being
          parent, friend you can be.
        </p>
      </div>
    </div>
  );
};
export default SelfImprovement;
