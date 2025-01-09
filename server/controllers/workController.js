import Work from '../models/Work.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all works
export const getWorks = async (req, res) => {
  try {
    const works = await Work.find({ isActive: true }).sort('order');
    res.status(200).json(works);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single work
export const getWork = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.status(200).json(work);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new work
export const createWork = async (req, res) => {
  try {
    const { title, tags, isLatest, order } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    if (!image) {
      return res.status(400).json({ message: 'Work image is required' });
    }

    const work = new Work({
      title,
      image,
      tags: tags ? JSON.parse(tags) : [],
      isLatest: isLatest === 'true',
      order: order || 0
    });

    const newWork = await work.save();
    res.status(201).json(newWork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a work
export const updateWork = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }

    // If there's a new file, delete the old one and update the path
    if (req.file) {
      // Delete old file if it exists
      if (work.image) {
        const oldFilePath = path.join(__dirname, '../public', work.image);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
      work.image = `/uploads/${req.file.filename}`;
    }

    // Update other fields
    if (req.body.title) work.title = req.body.title;
    if (req.body.tags) work.tags = JSON.parse(req.body.tags);
    if (req.body.isLatest !== undefined) work.isLatest = req.body.isLatest === 'true';
    if (req.body.order !== undefined) work.order = req.body.order;

    const updatedWork = await work.save();
    res.status(200).json(updatedWork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a work (soft delete)
export const deleteWork = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }
    work.isActive = false;
    await work.save();
    res.status(200).json({ message: 'Work deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 