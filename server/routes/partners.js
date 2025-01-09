import express from 'express';
import {
  getPartners,
  getPartner,
  createPartner,
  updatePartner,
  deletePartner
} from '../controllers/partnerController.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/', getPartners);
router.get('/:id', getPartner);
router.post('/', upload.single('logo'), createPartner);
router.patch('/:id', upload.single('logo'), updatePartner);
router.delete('/:id', deletePartner);

export default router; 