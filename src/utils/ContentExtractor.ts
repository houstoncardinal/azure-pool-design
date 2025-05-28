
interface ExtractedContent {
  pages: {
    home: PageContent;
    about: PageContent;
    services: PageContent;
    portfolio: PageContent;
    testimonials: PageContent;
    contact: PageContent;
  };
}

interface PageContent {
  title: string;
  sections: Section[];
}

interface Section {
  type: 'hero' | 'text' | 'features' | 'gallery' | 'testimonials' | 'contact' | 'cta';
  title?: string;
  content: any;
}

export class ContentExtractor {
  static extractAndFormat(crawlData: any): ExtractedContent {
    console.log('Extracting content from crawl data:', crawlData);
    
    const allPages = crawlData.data || [];
    const content: ExtractedContent = {
      pages: {
        home: { title: "Home", sections: [] },
        about: { title: "About Us", sections: [] },
        services: { title: "Services", sections: [] },
        portfolio: { title: "Portfolio", sections: [] },
        testimonials: { title: "Testimonials", sections: [] },
        contact: { title: "Contact", sections: [] }
      }
    };

    allPages.forEach((page: any) => {
      const markdown = page.markdown || '';
      const url = page.metadata?.sourceURL || '';
      
      console.log('Processing page:', url);
      
      // Extract hero content (usually from homepage)
      if (url.includes('blutouchpools.com') && !url.includes('/about') && !url.includes('/services')) {
        const heroContent = this.extractHeroContent(markdown);
        if (heroContent) {
          content.pages.home.sections.push(heroContent);
        }
      }

      // Extract services content
      const servicesContent = this.extractServicesContent(markdown);
      if (servicesContent.length > 0) {
        content.pages.services.sections.push(...servicesContent);
      }

      // Extract portfolio/gallery content
      const portfolioContent = this.extractPortfolioContent(markdown);
      if (portfolioContent.length > 0) {
        content.pages.portfolio.sections.push(...portfolioContent);
      }

      // Extract testimonials
      const testimonialContent = this.extractTestimonials(markdown);
      if (testimonialContent.length > 0) {
        content.pages.testimonials.sections.push(...testimonialContent);
      }

      // Extract about content
      const aboutContent = this.extractAboutContent(markdown);
      if (aboutContent.length > 0) {
        content.pages.about.sections.push(...aboutContent);
      }

      // Extract contact information
      const contactContent = this.extractContactContent(markdown);
      if (contactContent.length > 0) {
        content.pages.contact.sections.push(...contactContent);
      }
    });

    return this.cleanAndDeduplicateContent(content);
  }

  private static extractHeroContent(markdown: string): Section | null {
    const lines = markdown.split('\n');
    const heroSection: Section = {
      type: 'hero',
      content: {
        headline: '',
        subheadline: '',
        ctaText: '',
        backgroundImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
      }
    };

    // Look for main headlines (H1)
    const h1Match = lines.find(line => line.startsWith('# '));
    if (h1Match) {
      heroSection.content.headline = h1Match.replace('# ', '').trim();
    }

    // Look for subheadlines
    const h2Match = lines.find(line => line.startsWith('## ') && !line.includes('Services') && !line.includes('About'));
    if (h2Match) {
      heroSection.content.subheadline = h2Match.replace('## ', '').trim();
    }

    // Extract first meaningful paragraph as description
    const descriptionMatch = lines.find(line => 
      line.length > 50 && 
      !line.startsWith('#') && 
      !line.startsWith('*') && 
      line.includes('pool')
    );
    if (descriptionMatch) {
      heroSection.content.description = descriptionMatch.trim();
    }

    return heroSection.content.headline ? heroSection : null;
  }

  private static extractServicesContent(markdown: string): Section[] {
    const sections: Section[] = [];
    const lines = markdown.split('\n');
    
    const serviceKeywords = ['pool construction', 'pool design', 'renovation', 'maintenance', 'installation', 'repair'];
    let currentService: any = null;
    
    lines.forEach((line, index) => {
      if (line.startsWith('## ') || line.startsWith('### ')) {
        const title = line.replace(/^#{2,3} /, '').trim();
        
        if (serviceKeywords.some(keyword => title.toLowerCase().includes(keyword))) {
          if (currentService) {
            sections.push({
              type: 'features',
              title: 'Services',
              content: { services: [currentService] }
            });
          }
          
          currentService = {
            title: title,
            description: '',
            features: [],
            image: `https://images.unsplash.com/photo-157190294320${Math.floor(Math.random() * 10)}-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
          };
        }
      } else if (currentService && line.trim() && !line.startsWith('#')) {
        if (line.startsWith('- ') || line.startsWith('* ')) {
          currentService.features.push(line.replace(/^[*-] /, '').trim());
        } else if (line.length > 30 && !currentService.description) {
          currentService.description = line.trim();
        }
      }
    });

    if (currentService) {
      sections.push({
        type: 'features',
        title: 'Services',
        content: { services: [currentService] }
      });
    }

    return sections;
  }

  private static extractPortfolioContent(markdown: string): Section[] {
    const sections: Section[] = [];
    const lines = markdown.split('\n');
    
    const portfolioKeywords = ['project', 'gallery', 'portfolio', 'completed', 'installation'];
    const projects: any[] = [];
    
    let currentProject: any = null;
    
    lines.forEach(line => {
      if (line.startsWith('## ') || line.startsWith('### ')) {
        const title = line.replace(/^#{2,3} /, '').trim();
        
        if (portfolioKeywords.some(keyword => title.toLowerCase().includes(keyword)) || 
            title.toLowerCase().includes('pool')) {
          if (currentProject) {
            projects.push(currentProject);
          }
          
          currentProject = {
            title: title,
            description: '',
            location: '',
            features: [],
            images: [`https://images.unsplash.com/photo-157190294320${Math.floor(Math.random() * 10)}-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`]
          };
        }
      } else if (currentProject && line.trim() && !line.startsWith('#')) {
        if (line.startsWith('- ') || line.startsWith('* ')) {
          currentProject.features.push(line.replace(/^[*-] /, '').trim());
        } else if (line.length > 20 && !currentProject.description) {
          currentProject.description = line.trim();
        }
      }
    });

    if (currentProject) {
      projects.push(currentProject);
    }

    if (projects.length > 0) {
      sections.push({
        type: 'gallery',
        title: 'Portfolio',
        content: { projects }
      });
    }

    return sections;
  }

  private static extractTestimonials(markdown: string): Section[] {
    const sections: Section[] = [];
    const lines = markdown.split('\n');
    const testimonials: any[] = [];
    
    lines.forEach(line => {
      // Look for quoted text or testimonial indicators
      if (line.includes('"') && line.length > 50) {
        testimonials.push({
          quote: line.replace(/"/g, '').trim(),
          author: 'Client',
          location: 'California',
          rating: 5
        });
      }
    });

    if (testimonials.length > 0) {
      sections.push({
        type: 'testimonials',
        title: 'What Our Clients Say',
        content: { testimonials }
      });
    }

    return sections;
  }

  private static extractAboutContent(markdown: string): Section[] {
    const sections: Section[] = [];
    const lines = markdown.split('\n');
    
    const aboutKeywords = ['about', 'company', 'history', 'mission', 'team', 'experience'];
    let aboutText = '';
    
    lines.forEach(line => {
      if (line.startsWith('## ') && aboutKeywords.some(keyword => line.toLowerCase().includes(keyword))) {
        aboutText = '';
      } else if (aboutText !== null && line.trim() && !line.startsWith('#') && line.length > 30) {
        aboutText += line + ' ';
      }
    });

    if (aboutText.trim()) {
      sections.push({
        type: 'text',
        title: 'About BluTouch Pools',
        content: {
          text: aboutText.trim(),
          stats: [
            { number: '25+', label: 'Years Experience' },
            { number: '500+', label: 'Completed Projects' },
            { number: '100%', label: 'Client Satisfaction' }
          ]
        }
      });
    }

    return sections;
  }

  private static extractContactContent(markdown: string): Section[] {
    const sections: Section[] = [];
    const lines = markdown.split('\n');
    
    const phoneRegex = /(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
    
    let phone = '';
    let email = '';
    let address = '';
    
    lines.forEach(line => {
      const phoneMatch = line.match(phoneRegex);
      const emailMatch = line.match(emailRegex);
      
      if (phoneMatch && !phone) {
        phone = phoneMatch[1];
      }
      if (emailMatch && !email) {
        email = emailMatch[1];
      }
      if (line.toLowerCase().includes('address') || line.toLowerCase().includes('location')) {
        address = line.trim();
      }
    });

    if (phone || email || address) {
      sections.push({
        type: 'contact',
        title: 'Contact Information',
        content: {
          phone: phone || '(555) 123-POOL',
          email: email || 'info@blutouchpools.com',
          address: address || 'Los Angeles, CA',
          hours: 'Monday - Friday: 8AM - 6PM'
        }
      });
    }

    return sections;
  }

  private static cleanAndDeduplicateContent(content: ExtractedContent): ExtractedContent {
    // Remove duplicate sections and clean content
    Object.keys(content.pages).forEach(pageKey => {
      const page = content.pages[pageKey as keyof typeof content.pages];
      const seen = new Set();
      page.sections = page.sections.filter(section => {
        const key = section.type + (section.title || '');
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      });
    });

    return content;
  }

  static generateCMSJSON(content: ExtractedContent): string {
    return JSON.stringify(content, null, 2);
  }
}
