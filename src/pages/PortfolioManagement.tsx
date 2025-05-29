import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  PlusCircle,
  Trash2,
  Edit3,
  BookOpen,
  Image as ImageIcon,
  MapPin,
  Tag,
  Ruler,
  FileText
} from 'lucide-react';

// Temporarily import projects data - this would ideally come from a backend API
import { projects as initialProjects } from './Portfolio';

const PortfolioManagement = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [newProject, setNewProject] = useState({
    id: '',
    title: '',
    location: '',
    image: '',
    description: ''
  });
  const [editingProject, setEditingProject] = useState(null);

  // Placeholder functions for management
  const handleAddProject = () => {
    // In a real app, you'd send this to a backend
    console.log('Adding project:', newProject);
    setProjects([...projects, { ...newProject, id: newProject.title.toLowerCase().replace(/\s+/g, '-') }]);
    setNewProject({ id: '', title: '', location: '', image: '', description: '' });
  };

  const handleDeleteProject = (projectId) => {
    // In a real app, you'd send a delete request to a backend
    console.log('Deleting project:', projectId);
    setProjects(projects.filter(project => project.id !== projectId));
  };

  const handleEditProject = (project) => {
    setEditingProject({ ...project });
  };

  const handleUpdateProject = () => {
    // In a real app, you'd send an update request to a backend
    console.log('Updating project:', editingProject);
    setProjects(projects.map(project => 
      project.id === editingProject.id ? editingProject : project
    ));
    setEditingProject(null);
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
  };

  const handlePublishProject = (projectId) => {
    // This would involve logic to make the project visible on the public portfolio page
    console.log('Publishing project:', projectId);
    alert(`Project ${projectId} would be published.`);
  };

  return (
    <div className="min-h-screen font-inter bg-gray-100">
      <Navbar />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Portfolio Management</h1>

          {/* Add New Project Form */}
          <Card className="mb-8 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Project</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Input 
                  placeholder="Project Title"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} 
                />
                 <Input 
                  placeholder="Location"
                  value={newProject.location}
                  onChange={(e) => setNewProject({ ...newProject, location: e.target.value })} 
                />
                 <Input 
                  placeholder="Image URL or Path"
                  value={newProject.image}
                  onChange={(e) => setNewProject({ ...newProject, image: e.target.value })} 
                />
                 <Input 
                  placeholder="Project ID (optional, auto-generated if empty)"
                  value={newProject.id}
                  onChange={(e) => setNewProject({ ...newProject, id: e.target.value })} 
                />
              </div>
              <Textarea 
                placeholder="Project Description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} 
                className="mb-6"
              />
              <Button onClick={handleAddProject}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Project
              </Button>
            </CardContent>
          </Card>

           {/* Editing Project Form */}
           {editingProject && (
            <Card className="mb-8 shadow-lg border-blue-500 border-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Project: {editingProject.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Input 
                  placeholder="Project Title"
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })} 
                />
                 <Input 
                  placeholder="Location"
                  value={editingProject.location}
                  onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })} 
                />
                 <Input 
                  placeholder="Image URL or Path"
                  value={editingProject.image}
                  onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })} 
                />
                 <Input 
                  placeholder="Project ID"
                  value={editingProject.id}
                  onChange={(e) => setEditingProject({ ...editingProject, id: e.target.value })} 
                  disabled // ID should ideally not be changeable easily
                />
              </div>
              <Textarea 
                placeholder="Project Description"
                value={editingProject.description}
                onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })} 
                className="mb-6"
              />
              <div className="flex space-x-4">
                <Button onClick={handleUpdateProject}><Edit3 className="mr-2 h-4 w-4" /> Save Changes</Button>
                <Button variant="outline" onClick={handleCancelEdit}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
           )}

          {/* Existing Projects List */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Existing Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Card key={project.id} className="shadow-lg flex flex-col">
                <img 
                  src={project.image || '/placeholder.svg'} // Use a placeholder if no image is provided
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{project.title}</h3>
                   <div className="text-sm text-gray-600 mb-3 space-y-1">
                    <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-500" /> {project.location}</p>
                    <p className="flex items-center"><FileText className="w-4 h-4 mr-2 text-blue-500" /> {project.description}</p>
                   </div>
                  
                </CardContent>
                 <div className="p-4 border-t bg-gray-50 flex space-x-2 justify-end">
                   <Button variant="outline" size="sm" onClick={() => handleEditProject(project)}><Edit3 className="mr-2 h-4 w-4"/> Edit</Button>
                   <Button variant="outline" size="sm" onClick={() => handlePublishProject(project.id)}><BookOpen className="mr-2 h-4 w-4"/> Publish</Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteProject(project.id)}><Trash2 className="mr-2 h-4 w-4"/> Delete</Button>
                 </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioManagement; 