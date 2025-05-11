# City-HitPlay
Our website is inspired by youtube, where users are able to watch videos, upload content, comment, share like as well as creating an acount viewing details and more. To present this to you, we have built it with: HTML, CSS, JavaScript, Node.js, and Express.

---

## Features

- Upload vids with thumbnails
- Watch videos
- Search and browse content
- Leave comments (stored in browser `localStorage`)
- Fully responsive for mobile and desktop
- responsive share options
- functional login system linked to profile page 
- other pages include: (Profile, Subscriptions, Settings, History)

---

## How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Sikcro/City-HitPlay-Full.git
cd City-HitPlay-Full
```
OR Download from Zip

### 2. Install Dependencies

```bash
npm install
```

This will install:
- Express (for serving files)
- Multer (for video uploads)
- CORS (to allow resource sharing)

### 3. Start the Server

```bash
node server.js
```

The app will run on:
```
http://localhost:3000/index.html
```

> this will let you upload videos via `/create.html` and browse the website.

---

## Folder Structure

```
City-HitPlay-Full/
│
├── public/              # Static frontend files
│   ├── index.html
│   ├── create.html
│   ├── settings.html
│   ├── subscriptions.html
│   ├── video.html
│   ├── styles.css
│   ├── videos/          # Uploaded videos
│   └── thumbnails/      # Uploaded thumbnails
│
├── UserProfile/         # Profile and account pages
├── Icons/               # UI icons used across pages
├── server.js            # Node + Express backend
├── package.json         # Project dependencies
└── README.md
```

we have also attatched the website link in report for you. 