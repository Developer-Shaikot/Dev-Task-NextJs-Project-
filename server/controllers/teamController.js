import TeamMember from '../models/TeamMember.js';

// Get all team members
export const getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find({ isActive: true }).sort('order');
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single team member
export const getTeamMember = async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);
    if (!teamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    res.status(200).json(teamMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new team member
export const createTeamMember = async (req, res) => {
  const teamMember = new TeamMember(req.body);
  try {
    const newTeamMember = await teamMember.save();
    res.status(201).json(newTeamMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a team member
export const updateTeamMember = async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);
    if (!teamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    Object.assign(teamMember, req.body);
    const updatedTeamMember = await teamMember.save();
    res.status(200).json(updatedTeamMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a team member (soft delete)
export const deleteTeamMember = async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);
    if (!teamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }
    teamMember.isActive = false;
    await teamMember.save();
    res.status(200).json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 