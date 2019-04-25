import { PROD_URL } from 'network/setting';

const CITIZEN_URL = PROD_URL + 'rrafols/mobile_test/master/data.json';

export const getCitizens = () => {
  return fetch(CITIZEN_URL, {
    method: 'GET',
    cache: 'force-cache',
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error('Error when tries to pick the data');
    }
  });
};
