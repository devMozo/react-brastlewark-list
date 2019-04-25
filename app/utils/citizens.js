export const getBestWork = (citizens = []) => {
  const arrayProfessions = [];

  citizens.forEach(citizen => {
    const { professions } = citizen;

    professions &&
      professions.forEach(proffesion => {
        const index = arrayProfessions.findIndex(item => item.value === proffesion);

        if (index >= 0) {
          arrayProfessions[index] = {
            ...arrayProfessions[index],
            total: arrayProfessions[index].total + 1,
          };
        } else {
          arrayProfessions.push({
            value: proffesion,
            total: 1,
          });
        }
      });
  });

  return arrayProfessions.length === 0
    ? 0
    : arrayProfessions.reduce((prev, current) => (prev.total > current.total ? prev : current));
};

export const getAverageAge = (citizens = []) => {
  const lengthCitizens = citizens.length;
  const sumCitizensAge =
    lengthCitizens &&
    citizens.reduce((citizen, otherCitizen) => {
      return {
        age: citizen.age + otherCitizen.age,
      };
    }).age;
  return Math.round(sumCitizensAge / (lengthCitizens > 0 ? lengthCitizens : 1));
};

export const getFullCitizens = (citizens = [], friendNames = []) => {
  const fullFriends = [];

  citizens.forEach(citizen => {
    if (friendNames.includes(citizen.name)) {
      fullFriends.push(citizen);
    }
  });

  return fullFriends.length > 0 ? fullFriends : friendNames;
};
