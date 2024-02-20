import "./index.css";

const WorkWithUsRightCardItem = (props) => {
  const { cardDetails } = props;
  const { title, description } = cardDetails;
  return (
    <li className="work-with-us-right-card-item">
      <h1 className="work-with-us-right-card-item-title">{title}</h1>
      <p className="work-with-us-right-card-item-description">{description}</p>
    </li>
  );
};

export default WorkWithUsRightCardItem;
