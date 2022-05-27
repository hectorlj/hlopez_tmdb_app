import express from 'express';
import cors from'cors';
import path from'path';
import 'dotenv/config';
const app = express();
app.use(cors());
import movieRoutes from'./api/routes/movies.js';
app.use("/imdb", movieRoutes);

app.listen(5001, () => {
	console.log('Listening on port 5001');
})