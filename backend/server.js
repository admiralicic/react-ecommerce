import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);


const environment = process.env.NODE_ENV;
const port = process.env.PORT;

app.listen(port, () =>
  console.log(`Server running in ${environment} mode on port ${port}`)
);
