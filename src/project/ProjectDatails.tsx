import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const drone_id = useParams().drone_id;

  console.log({ drone_id });

  const data = getSignData(Number(drone_id));
  return (
    <div>
      <div className="details">
        <div className="details-container">
          <img className="image" src={data?.img} alt="" />

          <div className="info">
            <h4>{data?.title}</h4>

            <ul>
              {data?.features.map((feature, index) => {
                return <li key={index}>{feature}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
