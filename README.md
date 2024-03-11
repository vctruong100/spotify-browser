# Spotify Music Browser for IN4MATX 133

This repository contains a music browsing application, developed as part of the coursework for IN4MATX 133 at the University of California, Irvine. It features an Express/Node.js backend and an Angular frontend to communicate with the Spotify API and enable dynamic browsing of music content.

## Features

### Express/Node.js Backend
- Handles communication with the Spotify API.
- `webserver` directory includes all the necessary backend code.

### Angular Frontend
- Allows users to interactively browse music using the Spotify service.
- `client-starter` directory includes the core Angular application.

### Security
- Includes `.gitignore` configurations to prevent uploading secret keys.
- Requires the creation of `client_secret.json` and `tokens.json` for API interaction.

## Getting Started

### Prerequisites
- Node.js version 20.11.0 or later.
- Spotify Developer account for API keys.

### Setup
1. Clone the repository.
2. Navigate to the `webserver` directory and run `npm install`.
3. Start the backend server with `npm start`.
4. Set up the Angular CLI with `npm install -g @angular/cli`.
5. Create a new Angular client in the project root with `ng new client`.
6. Configure the client as per the instructions and move necessary files from `client-starter`.

### Running the Application
- Run the backend server from the `webserver` folder using `npm start`.
- Run the Angular client from the `client` folder using `ng serve --open`.

## File Structure

- `webserver/` - Contains the backend code. No JavaScript file changes needed.
- `client-starter/` - Contains the Angular frontend template.
  - `app/components/` - Contains components to be edited.
  - `app/pages/` - Contains pages for album, artist, and track details.
  - `app/services/` - Contains `spotify-service` to be edited for API interaction.
  - `app/data/` - Contains `track-features.ts` class for editing.

## Additional Instructions

- Do not commit `client_secret.json` and `tokens.json` as they contain sensitive information.
- Follow the instructions for setting up the Spotify Developer account and retrieving API keys.
- Ensure all client-side dependencies are installed with `npm install` within the `client` directory.

## License

This project is licensed under the terms of the UCI academic integrity policy.

## Acknowledgments

- UC Irvine for providing the learning experience and project outline.
- Spotify for their API and developer tools.
