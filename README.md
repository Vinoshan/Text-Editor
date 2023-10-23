# PWA - Text Editor (Just A Text Editor)

## Description

The Text Editor is a modern web application that allows users to create and edit text notes and code snippets, with or without an internet connection. This Progressive Web Application (PWA) leverages advanced web technologies, including IndexedDB for data persistence, service workers for offline functionality, and Webpack for bundling JavaScript files. It's designed to provide a seamless experience for users, whether they're online or offline, by ensuring their content is always accessible and up to date.

## Table of Contents
- [Text Editor](#text-editor)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## User Story

As a developer, I want to create notes or code snippets with or without an internet connection so that I can reliably retrieve them for later use.

## Features

- **Offline Functionality**: The application works even when there's no internet connection, thanks to service workers and data caching.

- **IndexedDB Integration**: Utilizes IndexedDB to store and retrieve text editor content, ensuring data persistence.

- **Automatic Saving**: Your content inside the text editor is automatically saved when the window loses focus, so you never lose your work.

- **Install as PWA**: You can install the application as a Progressive Web App for easy access from your device's home screen.

- **Webpack Bundling**: JavaScript files are bundled using Webpack, optimizing performance and loading speed.

- **Modern JavaScript**: The application utilizes next-gen JavaScript features and is transpiled with Babel for broad browser compatibility.

- **Manifest File**: Includes a generated `manifest.json` file that enhances the user experience when installed as a PWA.

## Installation

To run the PWA Text Editor on your local machine, follow these steps:

1. Clone the repository to your computer using Git:
   ```
   git clone https://github.com/Vinoshan/Text-Editor.git

   ```

2. Navigate to the project directory:
   ```
   cd pwa-text-editor
   ```

3. Install the project dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application by running:
   ```
   npm run start
   ```

2. Open your web browser and go to `http://localhost:3000` to access the PWA Text Editor.

3. Create, edit, and save your notes and code snippets.

4. You can also install the application as a Progressive Web App for convenient offline access.

## Technologies Used

- HTML
- CSS
- JavaScript
- IndexedDB
- Service Workers (Workbox)
- Webpack
- Babel
- Express.js (for server)
- Heroku (for deployment)

## Deployment
You can access the deployed app on Heroku: [J.A.T.E](https://j-a-t-e-texteditor-432342f95c11.herokuapp.com/)

## Contributing

Contributions to this project are welcome! If you find any issues or have ideas for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact
If you have any questions, feedback, or inquiries, feel free to contact the developer:

Email: vinoshan@outlook.com 
GitHub: github.com/vinoshan 
LinkedIn: https://www.linkedin.com/in/vinoshank/
