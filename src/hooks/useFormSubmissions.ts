
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const submitContact = async (formData: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
  }) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      return { success: true };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { submitContact, isLoading };
};

export const useQuoteForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const submitQuote = async (formData: {
    name: string;
    email: string;
    phone?: string;
    address?: string;
    project_type: string;
    pool_size?: string;
    features?: string[];
    timeline?: string;
    notes?: string;
    contact_method: string;
    preferred_callback_time?: string;
  }) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('quote_requests')
        .insert([{
          ...formData,
          features: formData.features || []
        }]);

      if (error) throw error;

      toast({
        title: "Quote request submitted!",
        description: "We'll contact you soon with your custom quote.",
      });
      
      return { success: true };
    } catch (error) {
      console.error('Error submitting quote request:', error);
      toast({
        title: "Error submitting request",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { submitQuote, isLoading };
};

export const useNewsletterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const submitNewsletter = async (email: string) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter.",
          });
          return { success: false };
        }
        throw error;
      }

      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest updates and offers.",
      });
      
      return { success: true };
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error subscribing",
        description: "Please try again later.",
        variant: "destructive",
      });
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { submitNewsletter, isLoading };
};
