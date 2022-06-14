const rocket = (props) => {
  const { name, img, description } = props;
  return (
    <div>
      <div>
        <img src={img} alt="rocket" />
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  );
};

export default rocket;
