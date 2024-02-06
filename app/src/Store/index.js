import { writable } from "svelte/store";

export const user = writable(null);
export const isLoading = writable(true);
export const startLoading = () => isLoading.set(true);
export const stopLoading = () => isLoading.set(false);

export const userInput = writable({});
export const resume = writable({
  contact: {
    fullName: "Rehan H",
    title: "Lead Development Manager",
    phone: "000-000-0000",
    email: "thesrs02@gmail.com",
    linkedInProfileURL: "",
    personalWebsiteURL: "",
    address: "XYZ street block 53, city, country",
  },

  profileSummary:
    "Reliable, adaptable, detail-focused, and safety-oriented work, health and safety professional with over 9 years of experience. Offering proven leadership capacity with a strong focus on safety, wellbeing, and quality assurance; established and maintained a solid track record of success in ensuring safety and regulatory compliance, quality control, design, planning, development, and project management. Recognised as a strong leader and a high achiever, consistently completing projects on time and under budget. Committed to delivering first-rate whs support, accurate data analysis and proficient quality assurance in accordance with organisational objectives. Developed outstanding communication skills, leveraging abilities to build and maintain productive professional relationships with a range of stakeholders from all levels and with diverse cultural backgrounds.",
});
