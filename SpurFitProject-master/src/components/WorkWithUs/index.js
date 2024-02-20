import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

import WorkWithUsRightCardItem from "../WorkWithUsRightCardItem";

import "./index.css";

const workWithUsLeftCardDetails = [
  {
    id: 1,
    title: "Power through, even when the going gets tough",
    description:
      "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
  },
  {
    id: 2,
    title: "Power through, even when the going gets tough",
    description:
      "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
  },
  {
    id: 3,
    title: "Power through, even when the going gets tough",
    description:
      "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
  },
  {
    id: 4,
    title: "Power through, even when the going gets tough",
    description:
      "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
  },
];

const WorkWithUs = () => {
  const workWithTitleRef = useRef(null);
  const workWithSideTitleRef = useRef(null);
  const workWithUsImage = useRef(null);
  const [animated, setAnimated] = useState(false);
  const intersection = useIntersection(workWithTitleRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  const element = workWithUsImage.current;
  const tl = gsap.timeline();

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.3 && !animated) {
      gsap.from(workWithTitleRef.current, {
        duration: 1,
        x: -70,
        ease: "power2.in",
      });
      gsap.from(workWithSideTitleRef.current, {
        duration: 1,
        x: 70,
        ease: "power2.in",
      });
      tl.to(element, {
        duration: 1,
        x: "20%",
        ease: "power1.inOut",
      }).to(element, {
        duration: 1,
        x: "-20%",
        ease: "power1.inOut",
      });

      setAnimated(true);
    } else if (intersection && intersection.intersectionRatio === 0) {
      setAnimated(false);
    }
  }, [intersection, animated]);

  return (
    <div className="work-with-us-container">
      <header className="work-with-us-header">
        <h1 className="work-with-us-title" ref={workWithTitleRef}>
          Work with us
        </h1>
        <h3 className="work-with-us-side-title" ref={workWithSideTitleRef}>
          ahead
        </h3>
      </header>
      <div className="work-with-us-cards">
        <div className="work-with-us-left-card">
          <div className="about-card">
            <img
              src="https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg"
              className="work-with-us-image"
              alt="meet ahead"
              ref={workWithUsImage}
            />
            <p className="about-product-text">About</p>
            <p className="product-about-description">
              At ahead our goal is to make self improvement fun and lasting. We
              know there's a way how to make it work. And that's what aHead is
              all about!
            </p>
          </div>
          <div className="product-card">
            <p className="about-product-text">Product</p>
            <p className="product-about-description">
              At ahead our goal is to make self improvement fun and lasting. We
              know there's a way how to make it work. And that's what aHead is
              all about!
            </p>
          </div>
        </div>
        <ul className="work-with-us-right-card">
          {workWithUsLeftCardDetails.map((leftCardItem) => (
            <WorkWithUsRightCardItem
              key={leftCardItem.id}
              cardDetails={leftCardItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkWithUs;
