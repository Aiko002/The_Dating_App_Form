# Vido - Dating App

A modern, responsive dating application built with React, TypeScript, and Tailwind CSS. Features a comprehensive multi-step form for user onboarding and profile creation.

## 🚀 Features

- **Multi-step Form**: Interactive form with chapters and screens for comprehensive user profiling
- **Modern UI**: Built with Radix UI components and Tailwind CSS for a polished experience
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Form Validation**: Client-side validation with customizable rules
- **Toast Notifications**: User feedback with Sonner toast notifications
- **React Router**: Client-side routing for navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form
- **Build Tool**: CRACO (Create React App Configuration Override)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

You can check your versions by running:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd vido
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required dependencies including:
- React and React DOM
- TypeScript
- Tailwind CSS
- Radix UI components
- React Router DOM
- React Query
- And many more...

### 3. Start the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`. The page will automatically reload when you make changes to the code.

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
vido/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── form/          # Form-specific components
│   │   └── UI/            # Base UI components (buttons, inputs, etc.)
│   ├── config/            # Configuration files
│   │   └── formConfig.ts  # Form structure and questions
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Main application component
│   ├── Home.tsx           # Home page component
│   └── index.tsx          # Application entry point
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── craco.config.js        # CRACO configuration
```

## 🎯 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run tailwind:init` - Initializes Tailwind CSS configuration

## 🔧 Configuration

### Form Configuration

The dating form is configured in `src/config/formConfig.ts`. You can customize:

- Form title and subtitle
- Chapters and screens structure
- Question types (text, radio, checkbox)
- Validation rules
- Required fields

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`. The design system includes:

- Custom color palette
- Typography scales
- Component variants
- Responsive breakpoints

## 🎨 UI Components

The app uses a comprehensive set of UI components built on Radix UI:

- **Form Components**: Input, Textarea, Checkbox, Radio Group
- **Layout Components**: Card, Button, Progress
- **Feedback Components**: Toast, Tooltip
- **Navigation Components**: Various interactive elements

## 📱 Features Overview

### Welcome Page
- Clean landing page with call-to-action
- Responsive design

### Multi-Step Form
- **Chapter 1: The Basics**
  - Personal information (name, age)
  - Location and gender identity

- **Chapter 2: What You're Looking For**
  - Relationship preferences
  - Age and distance preferences

- **Chapter 3: Show Your Personality**
  - Interests and hobbies
  - Lifestyle choices
  - Personal bio

### Form Success
- Completion confirmation
- Option to start over

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build folder contains the production-ready files that can be deployed to any static hosting service.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Your app will be live!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
```

**Node modules issues:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
- Make sure all dependencies are properly installed
- Check that your TypeScript version is compatible
- Restart your development server

## 📞 Support

If you encounter any issues or have questions, please:

1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information about your problem

---

**Happy coding! 🎉**