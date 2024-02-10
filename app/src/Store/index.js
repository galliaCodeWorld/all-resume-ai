import { writable } from "svelte/store";

export const user = writable(null);
export const isLoading = writable(true);
export const startLoading = () => isLoading.set(true);
export const stopLoading = () => isLoading.set(false);

export const userInput = writable({});
export const resume = writable({
  title: "",
  contact: {
    fullName: "",    
    phone: "",
    email: "",
    linkedInUrl: "",
    websiteUrl: "https://www.gatesnotes.com/Home",
    address: "",
  },
  summary: "",
  expertise: "",
});
export const updateResume= (item)=> {
  resume.update(items => ({...items, ...item}));
}

export const template = writable({
  a: {expertise: `class="flex flex-col gap-2"`},
  b: {}
});
export const focusedTemplate = writable("a");

