import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
  '../public/assets/partnerShowcase',
  '../public/assets/services',
  '../public/assets/projects',
  '../public/assets/team',
  '../public/uploads'
];

// Create directories
directories.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${fullPath}`);
  }
});

// Create placeholder files
const placeholders = {
  '../public/assets/partnerShowcase/BMW.svg.png': 'BMW Logo',
  '../public/assets/services/01_alveena_casa_london_web_design_new-250x250.jpg': 'Service Image 1',
  '../public/assets/projects/project1.jpg': 'Project Image 1',
  '../public/assets/team/member1.jpg': 'Team Member 1'
};

Object.entries(placeholders).forEach(([file, content]) => {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
    console.log(`Created placeholder file: ${fullPath}`);
  }
}); 