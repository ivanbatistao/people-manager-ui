# People Manager UI

A modern React application for managing people records with a sleek Material-UI interface, built with TypeScript. Features Redux Toolkit for state management and RxJS for reactive programming, creating a robust and responsive user experience.

## 🚀 Features

- **Data Management**
  - Material-UI Data Grid for efficient data display
  - Advanced filtering and sorting capabilities
  - Type-safe development with TypeScript

- **Favorites System**
  - Quick access to favorite records
  - Persistent storage using localStorage
  - Real-time updates with RxJS Observables
  - Accessible through navbar icon button

- **Modern UI/UX**
  - Responsive Material Design components
  - Custom modal dialogs with RxJS state management
  - Clean and intuitive navigation
  - Consistent styling with MUI theme system

## 🛠️ Tech Stack

- React 19
- TypeScript 5.8
- Material-UI (MUI) v7
- Redux Toolkit 2.8
- RxJS 7.8
- Vite 7.0
- Styled Components 6.1

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd people-manager-ui
```

2. Install dependencies:
```bash
pnpm install
```

## 🚀 Development

Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 🔨 Build

Create a production build:
```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

## 🧪 Linting

Run ESLint:
```bash
pnpm lint
```

## 📦 Package Manager

This project uses `pnpm` as the package manager. If you don't have pnpm installed, you can install it using:
```bash
npm install -g pnpm
```

## 📁 Project Structure

```
people-manager-ui/
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── customDialog/            # Modal dialog with RxJS
│   │   └── navbar/                  # Navigation component
│   ├── data/                        # Static data and mock services
│   ├── docs/                        # Project documentation and diagrams
│   │   └── architecture.excalidraw  # Project architecture diagram
│   ├── models/                      # TypeScript interfaces and types
│   ├── pages/                       # Page components
│   │   └── home/                    # Main page with people table
│   ├── redux/                       # Redux store and state slices
│   │   ├── states/                  # Redux state definitions
│   │   └── store.ts                 # Redux store configuration
│   └── utilities/                   # Helper functions and utilities
├── package.json
└── tsconfig.json
```

## ✨ Key Features Explained

### Data Grid Implementation
- Advanced sorting with multiple column support
- Interactive checkbox selection for bulk actions
- In-line editable fields with validation
- Responsive layout adaptation

### Favorites Management System
- One-click favorite toggling through icon button
- Persistent storage with localStorage integration
- Real-time state synchronization across components
- Optimized updates using RxJS Observables
- Dedicated favorites view in modal dialog

### Custom Dialog System
- RxJS-powered state management for reliable control
- Decoupled component communication
- Reusable dialog component with TypeScript generics
- Clean and maintainable implementation
- Smooth animations and transitions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

