import React, { useState, useEffect } from 'react';
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
  FileText,
  XCircle
} from 'lucide-react';

// Temporarily import projects data - this would ideally come from a backend API
import { projects as initialProjects } from './Portfolio';

// Define a type for the project structure in this component
interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  images: (string | File)[]; // Array can contain both URLs (strings) and File objects
}

const PortfolioManagement = () => {
  // Map initial projects to conform to the new structure with an images array
  const formattedInitialProjects: Project[] = initialProjects.map(project => ({
    id: project.id,
    title: project.title,
    location: project.location,
    description: project.description,
    images: project.image ? [project.image] : [], // Convert single image to array
  }));

  const [projects, setProjects] = useState<Project[]>(formattedInitialProjects);
  const [newProject, setNewProject] = useState<Project>({
    id: '',
    title: '',
    location: '',
    description: '',
    images: [] // Use an array to store multiple image files/URLs
  });
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProjectFiles, setNewProjectFiles] = useState<File[]>([]); // State for files in the Add form
  const [editingProjectFiles, setEditingProjectFiles] = useState<(string | File)[]>([]); // State for files in the Edit form

  // Effect to initialize editingProjectFiles with existing images
  useEffect(() => {
    if (editingProject) {
      // Initialize editingProjectFiles with existing image URLs (strings) and any File objects
      // Ensure we copy the array to avoid modifying the original project object directly
      setEditingProjectFiles([...editingProject.images]);
    } else {
      setEditingProjectFiles([]);
    }
  }, [editingProject]);

  // Handle file selection for adding new project
  const handleNewProjectFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []) as File[];
    setNewProjectFiles(files);
  };

  // Handle file selection for editing project
  const handleEditingProjectFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []) as File[];
     // For editing, add new files to the existing list (which might contain URLs or previous file objects)
    setEditingProjectFiles([...editingProjectFiles, ...files]);
  };

   // Remove an image preview/file from the new project form
  const handleRemoveNewProjectFile = (indexToRemove: number) => {
    setNewProjectFiles(newProjectFiles.filter((_, index) => index !== indexToRemove));
  };

  // Remove an image preview/file from the editing project form
  const handleRemoveEditingProjectFile = (indexToRemove: number) => {
    setEditingProjectFiles(editingProjectFiles.filter((_, index) => index !== indexToRemove));
  };

  // Placeholder functions for management
  const handleAddProject = () => {
    // In a real app, you'd upload newProjectFiles and get their URLs
    // For now, create temporary URLs for display
    const newFileUrls = newProjectFiles.map(file => URL.createObjectURL(file)); 
    const finalImages = [...newProject.images, ...newFileUrls]; // Combine any existing with new

    console.log('Adding project:', { ...newProject, images: finalImages });

    // For now, just add to local state with placeholder URLs
    setProjects([...projects, { 
      ...newProject,
      id: newProject.id || newProject.title.toLowerCase().replace(/\s+/g, '-'), // Generate ID if not provided
      images: finalImages 
    }]);

    // Reset form
    setNewProject({ id: '', title: '', location: '', description: '', images: [] });
    setNewProjectFiles([]);
  };

  const handleDeleteProject = (projectId: string) => {
    // In a real app, you'd send a delete request to a backend
    console.log('Deleting project:', projectId);
    setProjects(projects.filter(project => project.id !== projectId));
  };

  const handleEditProject = (project: Project) => {
    setEditingProject({ ...project });
    // Initialize editingProjectFiles with existing image URLs
    // Ensure we copy the array to avoid modifying the original project object directly
    setEditingProjectFiles([...project.images]);
  };

  const handleUpdateProject = () => {
    if (!editingProject) return;

    // In a real app, you'd upload new files in editingProjectFiles (if any are File objects)
    // and combine their URLs with existing URLs (if any are strings)
    // For now, handle files and URLs in state

    console.log('Updating project:', { ...editingProject, images: editingProjectFiles });

     // For now, update local state with the current editingProjectFiles
    setProjects(projects.map(project => 
      project.id === editingProject.id ? { ...editingProject, images: editingProjectFiles } : project
    ));
    setEditingProject(null);
    setEditingProjectFiles([]); // Clear editing files after update
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
    setEditingProjectFiles([]);
  };

  const handlePublishProject = (projectId: string) => {
    // This would involve logic to make the project visible on the public portfolio page
    console.log('Publishing project:', projectId);
    alert(`Project ${projectId} would be published.`);
  };

  return (
    <div className="min-h-screen font-inter bg-gray-100">
      <Navbar />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-10">Portfolio Management</h1>

          {/* Add New Project Form */}
          <Card className="mb-10 shadow-xl border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Add New Project</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <Input 
                  placeholder="Project Title"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} 
                  className="col-span-1"
                />
                 <Input 
                  placeholder="Location"
                  value={newProject.location}
                  onChange={(e) => setNewProject({ ...newProject, location: e.target.value })} 
                   className="col-span-1"
                />
                 <div className="col-span-1 md:col-span-2">
                   <label htmlFor="new-project-images" className="block text-sm font-medium text-gray-700 mb-2">Upload Images</label>
                   <Input 
                    id="new-project-images"
                    type="file"
                    multiple
                    onChange={handleNewProjectFileChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                   />
                    {/* Image Previews */}
                   {newProjectFiles.length > 0 && (
                     <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                       {newProjectFiles.map((file, index) => (
                         <div key={index} className="relative group">
                           <img 
                             src={URL.createObjectURL(file)}
                             alt={`Preview ${index + 1}`}
                             className="h-24 w-full object-cover rounded-md border border-gray-300"
                           />
                            <button 
                             onClick={() => handleRemoveNewProjectFile(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                              aria-label="Remove image"
                           >
                             <XCircle className="h-4 w-4" />
                           </button>
                         </div>
                       ))}
                     </div>
                   )}
                 </div>
              </div>
              <Textarea 
                placeholder="Project Description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} 
                className="mb-6 min-h-[100px]"
              />
              <Button onClick={handleAddProject} className="w-full sm:w-auto">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Project
              </Button>
            </CardContent>
          </Card>

           {/* Editing Project Form */}
           {editingProject && (
            <Card className="mb-10 shadow-xl border-2 border-blue-500 bg-blue-50">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Edit Project: {editingProject.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <Input 
                  placeholder="Project Title"
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })} 
                   className="col-span-1"
                />
                 <Input 
                  placeholder="Location"
                  value={editingProject.location}
                  onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })} 
                   className="col-span-1"
                />
                 <div className="col-span-1 md:col-span-2">
                    <label htmlFor="edit-project-images" className="block text-sm font-medium text-gray-700 mb-2">Upload New Images</label>
                    <Input 
                      id="edit-project-images"
                      type="file"
                      multiple
                      onChange={handleEditingProjectFileChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                     {/* Image Previews/Existing Images */}
                    {(editingProjectFiles.length > 0) && (
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {editingProjectFiles.map((fileOrUrl, index) => (
                           <div key={index} className="relative group">
                             <img 
                               src={typeof fileOrUrl === 'string' ? fileOrUrl : URL.createObjectURL(fileOrUrl)}
                               alt={`Image ${index + 1}`}
                               className="h-24 w-full object-cover rounded-md border border-gray-300"
                             />
                              <button 
                               onClick={() => handleRemoveEditingProjectFile(index)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                aria-label="Remove image"
                             >
                               <XCircle className="h-4 w-4" />
                             </button>
                           </div>
                         ))}
                      </div>
                    )}
                 </div>
              </div>
              <Textarea 
                placeholder="Project Description"
                value={editingProject.description}
                onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })} 
                className="mb-6 min-h-[100px]"
              />
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button onClick={handleUpdateProject} className="w-full sm:w-auto"><Edit3 className="mr-2 h-4 w-4" /> Save Changes</Button>
                <Button variant="outline" onClick={handleCancelEdit} className="w-full sm:w-auto">Cancel</Button>
              </div>
            </CardContent>
          </Card>
           )}

          {/* Existing Projects List */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Existing Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map(project => (
              <Card key={project.id} className="shadow-lg flex flex-col border border-gray-200">
                {/* Displaying only the first image for simplicity in this list view */}
                {project.images && project.images.length > 0 ? (
                   <img 
                    src={typeof project.images[0] === 'string' ? project.images[0] : URL.createObjectURL(project.images[0])}
                    alt={`${project.title} Image 1`}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                   <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                     <ImageIcon className="h-12 w-12 text-gray-500" />
                   </div>
                )}
                
                <CardContent className="p-4 sm:p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{project.title}</h3>
                   <div className="text-sm text-gray-600 mb-3 space-y-1">
                    <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-500" /> {project.location}</p>
                    <p className="flex items-center"><FileText className="w-4 h-4 mr-2 text-blue-500" /> {project.description}</p>
                   </div>
                  
                </CardContent>
                 <div className="p-4 sm:p-6 border-t bg-gray-50 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-end items-stretch sm:items-center">
                   <Button variant="outline" size="sm" onClick={() => handleEditProject(project)} className="w-full sm:w-auto"><Edit3 className="mr-2 h-4 w-4"/> Edit</Button>
                   <Button variant="outline" size="sm" onClick={() => handlePublishProject(project.id)} className="w-full sm:w-auto"><BookOpen className="mr-2 h-4 w-4"/> Publish</Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteProject(project.id)} className="w-full sm:w-auto"><Trash2 className="mr-2 h-4 w-4"/> Delete</Button>
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