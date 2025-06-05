const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRouter = require('./routers/taskRouter');
const userRouter = require('./routers/userRouter');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/tasks', taskRouter);
app.use('/users',userRouter);

mongoose.connect('mongodb://localhost:27017/kanbanboard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error("MongoDB connection error:", err));
