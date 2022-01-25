import dotenv from 'dotenv';

dotenv.config();

const config = {};

config.port = process.env.PORT || 5050;
config.dbUser = process.env.dbUser ;
config.dbPass = process.env.dbPass;
config.dbHost = process.env.dbHost;
config.dbName = process.env.dbName;
config.enviroment = process.env.enviroment;

export default config;