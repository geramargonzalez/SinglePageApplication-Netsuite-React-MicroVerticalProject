# netsuite-spa-typescript

## Overview
This project is a Single Page Application (SPA) built using TypeScript, designed to interact with NetSuite. It utilizes a modern front-end architecture to provide a seamless user experience.

## Features
- Client-side routing for navigating between different views.
- API integration with NetSuite for data fetching and manipulation.
- Responsive design with custom CSS styles.
- Modular architecture with separate components for better maintainability.

## Project Structure
```
netsuite-spa-typescript
├── src
│   ├── FileCabinet
│   │   └── SuiteApps
│   │       └── com.yourcompany.spaapp
│   │           ├── spa
│   │           │   ├── assets
│   │           │   │   ├── css
│   │           │   │   │   └── styles.css
│   │           │   │   └── images
│   │           │   ├── client
│   │           │   │   ├── components
│   │           │   │   │   └── App.tsx
│   │           │   │   ├── services
│   │           │   │   │   └── api.ts
│   │           │   │   └── SpaClient.ts
│   │           │   └── server
│   │           │       └── SpaServer.ts
│   │           └── Objects
│   │               └── custspa_yourspaid.xml
│   ├── types
│   │   └── index.d.ts
│   └── manifest.xml
├── webpack.config.js
├── tsconfig.json
├── package.json
├── suitecloud.config.js
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using npm:
   ```
   npm install
   ```
4. Build the project using Webpack:
   ```
   npm run build
   ```
5. Deploy the application to your NetSuite account using SuiteCloud CLI.

## Usage
- Access the application via the designated URL in your NetSuite environment.
- Use the navigation to explore different features of the SPA.
- Interact with the data displayed in the application, which is fetched from NetSuite.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.#   S i n g l e P a g e A p p l i c a t i o n - N e t s u i t e - R e a c t - M i c r o V e r t i c a l P r o j e c t  
 