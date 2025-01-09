import Service from '../models/Service.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all services
export const getServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort('order');
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single service
export const getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new service
export const createService = async (req, res) => {
  try {
    const { title, caseName, href, description, order } = req.body;
    const caseImage = req.file ? `/uploads/${req.file.filename}` : null;

    if (!caseImage) {
      return res.status(400).json({ message: 'Case image is required' });
    }

    const service = new Service({
      title,
      caseName,
      caseImage,
      href,
      description,
      order: order || 0
    });

    const newService = await service.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a service
export const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    // If there's a new file, delete the old one and update the path
    if (req.file) {
      // Delete old file if it exists
      if (service.caseImage) {
        const oldFilePath = path.join(__dirname, '../public', service.caseImage);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
      service.caseImage = `/uploads/${req.file.filename}`;
    }

    // Update other fields
    if (req.body.title) service.title = req.body.title;
    if (req.body.caseName) service.caseName = req.body.caseName;
    if (req.body.href) service.href = req.body.href;
    if (req.body.description) service.description = req.body.description;
    if (req.body.order !== undefined) service.order = req.body.order;

    const updatedService = await service.save();
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a service (soft delete)
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    service.isActive = false;
    await service.save();
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 