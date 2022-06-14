const url = 'https://api.spacexdata.com/v3/missions';

const getApiMissions = async () => {
  const response = await fetch(url, {
    method: 'GET',
  }).catch((error) => error.message);

  const res = await response.json();
  const data = res.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  return data;
};

export default getApiMissions;
