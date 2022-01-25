import express from "express";
import morgan from "morgan";
import cors from 'cors';
import apiRoutes from './routes/api.routes';
import config from './config/config.dev';

const {
  port,
} = config;

const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connection control
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// mis endpoints
app.use('/employee', apiRoutes);

app.listen(port, () => console.log('Server listo! √ en puerto: ', port));

export default app;