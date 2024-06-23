# Real-Time Chat Application

## Overview

This project is a real-time chat application built using NodeJS, ReactJS, and ChatEngine.io. It includes features such as user authentication, socket connections, real-time messaging, image and file attachments, group chats, direct messages, and read receipts.

## Features

- **User Authentication**: Secure login and signup functionalities.
- **Real-Time Messaging**: Instant messaging with socket connections.
- **Image and File Attachments**: Support for sending and receiving images and files.
- **Group Chats and DMs**: Create and manage group chats as well as direct messages.
- **Read Receipts**: Track when messages are read by recipients.

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: NodeJS, Express
- **Chat Management**: ChatEngine.io

## Project Structure

```sh
realtime-chat-app/
├── backend/
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── request.rest
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/react.svg
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── AuthPage.jsx
│   │   ├── ChatsPage.jsx
│   │   └── main.jsx
│   ├── README.md
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
