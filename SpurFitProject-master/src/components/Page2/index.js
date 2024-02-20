import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

import EmotionCard from "../EmotionCard";

import "./index.css";

const emotionsList = [
  {
    id: "ANGRY",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/13/10/72/240_F_513107205_l8D8VdOmX22Sr0C4zatNMPay3h5TjNJk.jpg",
    title: "You argue with a colleague",
    description:
      "You get angry and defensive, instead of staying open and working towards common ground",
    cardColor: "#cde4f7",
  },
  {
    id: "WONDER",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/13/10/72/240_F_513107205_l8D8VdOmX22Sr0C4zatNMPay3h5TjNJk.jpg",
    title: "You argue with a colleague",
    description:
      "You get angry and defensive, instead of staying open and working towards common ground",
    cardColor: "#eedefc",
  },
  {
    id: "DOUBT",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/13/10/72/240_F_513107205_l8D8VdOmX22Sr0C4zatNMPay3h5TjNJk.jpg",
    title: "You argue with a colleague",
    description:
      "You get angry and defensive, instead of staying open and working towards common ground",
    cardColor: "#5f1ef7",
  },
  {
    id: "DISAPPOINT",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/13/10/72/240_F_513107205_l8D8VdOmX22Sr0C4zatNMPay3h5TjNJk.jpg",
    title: "You argue with a colleague",
    description:
      "You get angry and defensive, instead of staying open and working towards common ground",
    cardColor: "#fccfb1",
  },
  {
    id: "NERVOUS",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/13/10/72/240_F_513107205_l8D8VdOmX22Sr0C4zatNMPay3h5TjNJk.jpg",
    title: "You argue with a colleague",
    description:
      "You get angry and defensive, instead of staying open and working towards common ground",
    cardColor: "#fcf9c5",
  },
];

const Page2 = () => {
  const emotionTitle = useRef(null);
  const [animated, setAnimated] = useState(false);
  const intersection = useIntersection(emotionTitle, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.3 && !animated) {
      gsap.from(emotionTitle.current, {
        duration: 1,
        x: "-100px",
        ease: "power.in",
      });
      setAnimated(true);
    } else if (intersection && intersection.intersectionRatio === 0) {
      setAnimated(false);
    }
  }, [intersection, animated]);
  return (
    <div className="page2-container">
      <div className="eq-beats-iq-container">
        <h3 className="eq-beats-iq-title">EQ beats IQ</h3>
        <p className="eq-beats-iq-desciptions">
          People with high emotional intelligence(EQ) live more fulfilled
          lives.They tend to be happier and have more healthier relationships.
        </p>
        <p className="eq-beats-iq-desciptions">
          People with high emotional intelligence(EQ) live more fulfilled
          lives.They tend to be happier and have more healthier relationships.
        </p>
      </div>
      <div className="emotions-container">
        <h1 className="does-this-sound-text" ref={emotionTitle}>Does this sound familiar...</h1>
        <ul className="emotions-list">
          {emotionsList.map((emotion) => (
            <EmotionCard
              key={emotion.id}
              emotionDetails={emotion}
              isHilighted={emotion.id === "DOUBT"}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page2;
