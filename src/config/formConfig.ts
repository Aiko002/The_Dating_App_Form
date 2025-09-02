export interface Question {
  id: string;
  type: 'text' | 'radio' | 'checkbox';
  question: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
}

export interface Screen {
  id: string;
  title: string;
  subtitle?: string;
  questions: Question[];
}

export interface Chapter {
  id: string;
  title: string;
  screens: Screen[];
}

export interface FormConfig {
  title: string;
  subtitle: string;
  chapters: Chapter[];
}

export const datingFormConfig: FormConfig = {
  title: "Find Your Perfect Match",
  subtitle: "Tell us about yourself so we can help you connect with amazing people",
  chapters: [
    {
      id: "basics",
      title: "The Basics",
      screens: [
        {
          id: "personal-info",
          title: "Let's start with the basics",
          subtitle: "Help us get to know you better",
          questions: [
            {
              id: "name",
              type: "text",
              question: "What's your first name?",
              placeholder: "Enter your first name",
              required: true,
              validation: {
                minLength: 2,
                maxLength: 50
              }
            },
            {
              id: "age",
              type: "text",
              question: "How old are you?",
              placeholder: "Enter your age",
              required: true,
              validation: {
                pattern: "^(?:1[8-9]|[2-9][0-9])$"
              }
            }
          ]
        },
        {
          id: "location-gender",
          title: "A bit more about you",
          subtitle: "This helps us find compatible matches nearby",
          questions: [
            {
              id: "location",
              type: "text",
              question: "Where are you located?",
              placeholder: "City, State",
              required: true,
              validation: {
                minLength: 2,
                maxLength: 100
              }
            },
            {
              id: "gender",
              type: "radio",
              question: "How do you identify?",
              required: true,
              options: ["Woman", "Man", "Non-binary", "Prefer not to say"]
            }
          ]
        }
      ]
    },
    {
      id: "preferences",
      title: "What You're Looking For",
      screens: [
        {
          id: "dating-preferences",
          title: "What are you looking for?",
          subtitle: "Help us understand your dating goals",
          questions: [
            {
              id: "looking-for",
              type: "radio",
              question: "What type of relationship are you seeking?",
              required: true,
              options: [
                "Long-term relationship",
                "Something casual",
                "Not sure yet",
                "New friends",
                "Short-term dating"
              ]
            },
            {
              id: "interested-in",
              type: "checkbox",
              question: "Who are you interested in meeting?",
              required: true,
              options: ["Women", "Men", "Non-binary people"]
            }
          ]
        },
        {
          id: "age-distance",
          title: "Your preferences",
          subtitle: "Help us narrow down your matches",
          questions: [
            {
              id: "age-preference",
              type: "text",
              question: "What age range interests you? (e.g., 25-35)",
              placeholder: "25-35",
              required: true,
              validation: {
                pattern: "^\\d{2}-\\d{2}$"
              }
            },
            {
              id: "max-distance",
              type: "radio",
              question: "Maximum distance for matches?",
              required: true,
              options: ["5 miles", "10 miles", "25 miles", "50 miles", "100+ miles"]
            }
          ]
        }
      ]
    },
    {
      id: "about-you",
      title: "Show Your Personality",
      screens: [
        {
          id: "interests",
          title: "What do you love doing?",
          subtitle: "Select all that apply - this helps find common interests",
          questions: [
            {
              id: "hobbies",
              type: "checkbox",
              question: "What are your hobbies and interests?",
              placeholder: "Choose any 3",
              required: true,
              options: [
                "Travel",
                "Cooking",
                "Fitness & Sports",
                "Reading",
                "Music",
                "Movies & TV",
                "Art & Photography",
                "Gaming",
                "Outdoor Adventures",
                "Dancing",
                "Wine & Dining",
                "Volunteering"
              ]
            }
          ]
        },
        {
          id: "lifestyle",
          title: "Your lifestyle",
          subtitle: "A few more details to help find compatible matches",
          questions: [
            {
              id: "education",
              type: "radio",
              question: "What's your education level?",
              required: true,
              options: [
                "High school",
                "Some college",
                "Bachelor's degree",
                "Master's degree",
                "PhD or higher",
                "Trade school",
                "Prefer not to say"
              ]
            },
            {
              id: "smoking",
              type: "radio",
              question: "Do you smoke?",
              required: true,
              options: ["Never", "Socially", "Regularly", "Trying to quit"]
            },
            {
              id: "drinking",
              type: "radio",
              question: "How often do you drink?",
              required: true,
              options: ["Never", "Rarely", "Socially", "Regularly"]
            }
          ]
        },
        {
          id: "about-me",
          title: "Tell us about yourself",
          subtitle: "This is your chance to shine! Write something that represents you",
          questions: [
            {
              id: "bio",
              type: "text",
              question: "Write a brief bio about yourself",
              placeholder: "Tell potential matches what makes you unique... (or skip for now)",
              required: false,
              validation: {
                minLength: 50,
                maxLength: 500
              }
            }
          ]
        }
      ]
    }
  ]
};