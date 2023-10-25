const { fetchApi } = require('../api/eurocarApi');

const getStationList = (SessionId) => {
  return fetchApi({
    url: '/ejercicio/rest/',
    method: 'POST',
    data: {
      SessionId,
      Function: 'GetStationList',
      LanguageId: 'ES',
      StationType: 'CheckIn',
    }
  });
}

module.exports = {
  getStationList,
}
