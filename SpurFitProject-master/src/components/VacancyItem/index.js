import "./index.css";

const VacancyItem = (props) => {
  const { vacancyDetails } = props;
  const { role, type, location, salary } = vacancyDetails;
  return (
    <li className="vacancy-item">
      <p className="role">{role}</p>
      <ul className="vacancy-details">
        <li className="vacancy-type">{type}</li>
        <li className="vacancy-location">{location}</li>
        <li className="vacancy-salary">&#8364;{salary}</li>
      </ul>
    </li>
  );
};

export default VacancyItem;
