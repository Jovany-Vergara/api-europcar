const express = require('express');
const app = express();
const morgan = require('morgan');
const { login } = require('./services/AuthService')
const { getStationList } = require('./services/StationService')
const cors = require("cors");

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors( { origin: '*' }));

//Nuestro primer WS Get
app.post('/login', async (req, res) => {
  const {ContractId, Password} = req.body;
  try {
    const result = await login(ContractId, Password)
    res.json(result.data)
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
})

app.post('/getstationlist', async (req, res) => {
  const {SessionId} = req.body;
  try {
    const result = await getStationList(SessionId)
    res.json(result.data)
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
})
//Iniciando el servidor
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});
