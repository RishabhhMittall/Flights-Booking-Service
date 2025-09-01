const express = require('express');

const { PORT } = require('./config')
const {ServerConfig, Logger} = require('./config')

const apiRoutes = require('./routes')

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
});