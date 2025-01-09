import express from 'express';
import {
  getServices,
  getService,
  createService,
  updateService,
  deleteService
} from '../controllers/serviceController.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/', getServices);
router.get('/:id', getService);
router.post('/', upload.single('caseImage'), createService);
router.patch('/:id', upload.single('caseImage'), updateService);
router.delete('/:id', deleteService);

export default router; 