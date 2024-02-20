import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

import VacancyItem from "../VacancyItem";

import "./index.css";

const vacanciesList = [
  {
    id: 1,
    role: "Senior Full-Stack Engineer",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "65-85k, 0.5-1.50% equity share options",
  },
  {
    id: 2,
    role: "Senior Full-Stack Engineer",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "65-85k, 0.5-1.50% equity share options",
  },
  {
    id: 3,
    role: "Senior Full-Stack Engineer",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "65-85k, 0.5-1.50% equity share options",
  },
];

const Vacancies = () => {
  const vacanciesTitle = useRef(null);
  const [animated, setAnimated] = useState(false);
  const intersection = useIntersection(vacanciesTitle, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.3 && !animated) {
      gsap.from(vacanciesTitle.current, {
        duration: 1,
        x: "-70",
        ease: "power4.out",
      });
      setAnimated(true);
    } else if (intersection && intersection.intersectionRatio === 0) {
      if (animated === true) {
        setAnimated(false);
      }
    }
  }, [intersection, animated]);
  return (
    <div className="vacancies-container">
      <h1 className="vacancies-title" ref={vacanciesTitle}>
        Open vacancies
      </h1>
      <ul className="vacancies-list">
        {vacanciesList.map((vacancy) => (
          <VacancyItem key={vacancy.id} vacancyDetails={vacancy} />
        ))}
      </ul>
    </div>
  );
};

export default Vacancies;
