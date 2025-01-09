import express from 'express';
import {
  getTeamMembers,
  getTeamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember
} from '../controllers/teamController.js';

const router = express.Router();

router.get('/', getTeamMembers);
router.get('/:id', getTeamMember);
router.post('/', createTeamMember);
router.patch('/:id', updateTeamMember);
router.delete('/:id', deleteTeamMember);

export default router; 