import express from 'express';
import {
  getWorks,
  getWork,
  createWork,
  updateWork,
  deleteWork
} from '../controllers/workController.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/', getWorks);
router.get('/:id', getWork);
router.post('/', upload.single('image'), createWork);
router.patch('/:id', upload.single('image'), updateWork);
router.delete('/:id', deleteWork);

export default router; 