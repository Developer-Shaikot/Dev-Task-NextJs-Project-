import Partner from '../models/Partner.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all partners
export const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find({ isActive: true }).sort('order');
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single partner
export const getPartner = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }
    res.status(200).json(partner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new partner
export const createPartner = async (req, res) => {
  try {
    const { name, order } = req.body;
    const logo = req.file ? `/uploads/${req.file.filename}` : null;

    if (!logo) {
      return res.status(400).json({ message: 'Logo image is required' });
    }

    const partner = new Partner({
      name,
      logo,
      order: order || 0
    });

    const newPartner = await partner.save();
    res.status(201).json(newPartner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a partner
export const updatePartner = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    // If there's a new file, delete the old one and update the path
    if (req.file) {
      // Delete old file if it exists
      if (partner.logo) {
        const oldFilePath = path.join(__dirname, '../public', partner.logo);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
      partner.logo = `/uploads/${req.file.filename}`;
    }

    // Update other fields
    if (req.body.name) partner.name = req.body.name;
    if (req.body.order !== undefined) partner.order = req.body.order;

    const updatedPartner = await partner.save();
    res.status(200).json(updatedPartner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a partner (soft delete)
export const deletePartner = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }
    partner.isActive = false;
    await partner.save();
    res.status(200).json({ message: 'Partner deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 