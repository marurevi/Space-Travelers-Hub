const url = 'https://api.spacexdata.com/v3/missions';

const getApiMissions = async () => {
  const response = await fetch(url, {
    method: 'GET',
  }).catch((error) => error.message);

  const res = await response.json();
  const data = res.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  return data;
};

export default getApiMissions;
