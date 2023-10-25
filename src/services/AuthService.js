const { fetchApi } = require('../api/eurocarApi');

const login = (ContractId, Password) => {
  return fetchApi({
    url: '/ejercicio/rest/',
    method: 'POST',
    data: {
      ContractId,
      Password,
      Function: 'LogIn',
      LanguageId: 'ES',
    }
  });
}

module.exports = {
  login,
}
