"use server";

import type { ContactFormValues } from '@/components/contact/ContactForm';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10).max(500),
});

export async function handleContactFormSubmission(
  values: ContactFormValues
): Promise<{ success: boolean; error?: string }> {
  try {
    const validatedData = formSchema.parse(values);

    // Simulate API call or email sending
    console.log("Form data received:", validatedData);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    // In a real application, you would send an email or save to a database here.
    // For example, using Nodemailer or an email API service.
    // If email sending fails, throw an error or return { success: false, error: "Email service error" }

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Log detailed validation errors for debugging
      console.error("Validation Error:", error.flatten().fieldErrors);
      // Return a generic error or more specific if needed
      return { success: false, error: "Invalid form data. Please check your inputs." };
    }
    console.error("Error submitting contact form:", error);
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}
