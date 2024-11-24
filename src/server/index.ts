import express from 'express';
import cors from 'cors';
import { visitorRouter } from './routes/visitor.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/visitors', visitorRouter);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});