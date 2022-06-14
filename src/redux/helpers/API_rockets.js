const fetchRockets = async () => {
  const result = await fetch('https://api.spacexdata.com/v3/rockets');
  const json = await result.json();
  const rockets = json.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    img: rocket.flickr_images[0],
  }));
  return rockets;
};

console.log(fetchRockets());

export default fetchRockets;
