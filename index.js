import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js';
import imagesRoutes from './routes/imagesRoutes.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = () => {
  connectDB()
    .then(() =>
      app.listen(PORT, () =>
        console.log(
          `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
        )
      )
    )
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
startServer();

const app = express();

app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/images', imagesRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);

const __dirname = path.resolve();

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);
