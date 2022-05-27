import express from 'express';
import * as movieController from '../controller/movieController.js';
const router = express.Router();

router.get("/searchMovies", movieController.getters.searchMovies)

export default router;