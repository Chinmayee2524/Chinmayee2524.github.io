import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static HTML files from the root directory
  app.use(express.static(path.join(process.cwd())));
  
  // Routes for specific HTML files
  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });
  
  app.get('/about', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'about.html'));
  });
  
  app.get('/projects', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'projects.html'));
  });
  
  app.get('/blog', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'blog.html'));
  });
  
  app.get('/contact', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'contact.html'));
  });

  // Create the HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
