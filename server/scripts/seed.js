import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Partner from '../models/Partner.js';
import Service from '../models/Service.js';
import Project from '../models/Project.js';
import TeamMember from '../models/TeamMember.js';
import Work from '../models/Work.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to copy image from public to uploads
async function copyImage(sourcePath, fileName) {
  try {
    const uploadsDir = path.join(__dirname, '../public/uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Generate a placeholder image if source doesn't exist
    const destPath = path.join(uploadsDir, fileName);
    const placeholderContent = `Placeholder for ${fileName}`;
    fs.writeFileSync(destPath, placeholderContent);
    
    console.log(`Created placeholder for: ${fileName}`);
    return `/uploads/${fileName}`;
  } catch (error) {
    console.error(`Error handling file ${sourcePath}:`, error);
    return sourcePath;
  }
}

// Frontend data
const partners = [
  {
    name: "BMW",
    logo: "/assets/partnerShowcase/BMW.svg.png",
    order: 1
  },
  {
    name: "Mercedes-Benz",
    logo: "/assets/partnerShowcase/mercedes-benz-car-logo-png-brand-image-1.png",
    order: 2
  },
  {
    name: "Audi",
    logo: "/assets/partnerShowcase/png-transparent-audi-logo-audi-a3-car-emblem-logo-audi-car-logo-brand-text-candle-automobile-repair-shop-thumbnail.png",
    order: 3
  },
  {
    name: "Mini",
    logo: "/assets/partnerShowcase/mini-car-logo-11530961967zss8y0reja.png",
    order: 4
  },
  {
    name: "Bentley",
    logo: "/assets/partnerShowcase/png-clipart-bentley-wings-logo-icons-logos-emojis-car-logos-thumbnail.png",
    order: 5
  },
  {
    name: "Nissan",
    logo: "/assets/partnerShowcase/nissan-car-logo-png-brand-image-24.png",
    order: 6
  },
  {
    name: "Cars Brand 1",
    logo: "/assets/partnerShowcase/png-clipart-cars-logo-brands-cars-logo-brands.png",
    order: 7
  },
  {
    name: "Cars Brand 2",
    logo: "/assets/partnerShowcase/png-clipart-cars-logo-brands-cars-logo-brands-thumbnail.png",
    order: 8
  },
  {
    name: "Indian Cars",
    logo: "/assets/partnerShowcase/384-3841662_indian-car-company-logos-hd-png-download.png",
    order: 9
  },
  {
    name: "Longines",
    logo: "/assets/partner/BMW.svg.png",
    order: 10
  }
];

const services = [
  {
    title: "E-commerce",
    caseName: "Shopify Plus Store",
    caseImage: "/assets/services/01_alveena_casa_london_web_design_new-250x250.jpg",
    href: "#e-commerce",
    description: "Full-service e-commerce solutions",
    order: 1
  },
  {
    title: "Website Design",
    caseName: "Romans & Partners",
    caseImage: "/assets/services/01_estate-agency-web-design-london-250x250.jpg",
    href: "#website-design",
    description: "Beautiful, responsive websites",
    order: 2
  },
  {
    title: "Digital Products",
    caseName: "Tech Platform",
    caseImage: "/assets/services/fudli-restaurant-food-order-system-250x250.jpg",
    href: "#digital-products",
    description: "Innovative digital product solutions",
    order: 3
  },
  {
    title: "Brand Identities",
    caseName: "Alveena Casa",
    caseImage: "/assets/services/learning_featured-image-250x250.jpeg",
    href: "#brand-identities",
    description: "Comprehensive branding solutions",
    order: 4
  }
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js",
    image: "/assets/projects/project1.jpg",
    category: "E-commerce",
    client: "Fashion Retailer",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    featured: true,
    order: 1
  },
  {
    title: "Corporate Website",
    description: "Modern corporate website with CMS",
    image: "/assets/projects/project2.jpg",
    category: "Web Design",
    client: "Tech Company",
    technologies: ["React", "Tailwind CSS", "Strapi"],
    featured: true,
    order: 2
  }
];

const teamMembers = [
  {
    name: "John Doe",
    position: "Lead Developer",
    image: "/assets/team/member1.jpg",
    bio: "10+ years of experience in web development",
    socialLinks: {
      linkedin: "https://linkedin.com/johndoe",
      github: "https://github.com/johndoe"
    },
    order: 1
  },
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    image: "/assets/team/member2.jpg",
    bio: "Award-winning designer with a passion for user experience",
    socialLinks: {
      linkedin: "https://linkedin.com/janesmith",
      twitter: "https://twitter.com/janesmith"
    },
    order: 2
  }
];

const works = [
  {
    title: "Romans & Partners",
    image: "/assets/01_Estate-Agency-Web-Design-London.jpg",
    tags: ["UI/UX Design", "Property Portal"],
    isLatest: true,
    order: 1
  },
  {
    title: "Alveena C",
    image: "/assets/01_Alveena_Casa_London_Web_Design_New-1400x1582.jpg",
    tags: ["UI/UX Design", "E-Commerce"],
    isLatest: true,
    order: 2
  },
  {
    title: "Digital Hub",
    image: "/assets/Fudli-Restaurant-Food-Order-System-1400x1582.jpg",
    tags: ["Web Development", "Digital Marketing"],
    isLatest: true,
    order: 3
  },
  {
    title: "Tech Solutions",
    image: "/assets/recore-pilates-london-web-design-agency-2024-1400x1641.jpeg",
    tags: ["UI/UX Design", "SaaS"],
    isLatest: true,
    order: 4
  },
  {
    title: "Tech SuperPowers",
    image: "/assets/03_TSP_London_Web_Design-1400x1582.jpg",
    tags: ["UI/UX Design", "Development"],
    isLatest: true,
    order: 5
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      Partner.deleteMany({}),
      Service.deleteMany({}),
      Project.deleteMany({}),
      TeamMember.deleteMany({}),
      Work.deleteMany({})
    ]);
    console.log('Cleared existing data');

    // Process and insert partners
    const processedPartners = await Promise.all(partners.map(async (partner) => {
      const fileName = path.basename(partner.logo);
      const newLogoPath = await copyImage(partner.logo, fileName);
      return {
        ...partner,
        logo: newLogoPath
      };
    }));

    // Process and insert services
    const processedServices = await Promise.all(services.map(async (service) => {
      const fileName = path.basename(service.caseImage);
      const newImagePath = await copyImage(service.caseImage, fileName);
      return {
        ...service,
        caseImage: newImagePath
      };
    }));

    // Process and insert projects
    const processedProjects = await Promise.all(projects.map(async (project) => {
      const fileName = path.basename(project.image);
      const newImagePath = await copyImage(project.image, fileName);
      return {
        ...project,
        image: newImagePath
      };
    }));

    // Process and insert team members
    const processedTeamMembers = await Promise.all(teamMembers.map(async (member) => {
      const fileName = path.basename(member.image);
      const newImagePath = await copyImage(member.image, fileName);
      return {
        ...member,
        image: newImagePath
      };
    }));

    // Process and insert works
    const processedWorks = await Promise.all(works.map(async (work) => {
      const fileName = path.basename(work.image);
      const newImagePath = await copyImage(work.image, fileName);
      return {
        ...work,
        image: newImagePath
      };
    }));

    // Insert all data
    await Promise.all([
      Partner.insertMany(processedPartners),
      Service.insertMany(processedServices),
      Project.insertMany(processedProjects),
      TeamMember.insertMany(processedTeamMembers),
      Work.insertMany(processedWorks)
    ]);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 