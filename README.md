# React News Website with NewsAPI

A fully functional, responsive news website built using **React.js** and integrated with **NewsAPI** to fetch live news articles in real-time.

## 🚀 Features

- Live news updates using [NewsAPI](https://newsapi.org/)
- Clean and modern user interface
- Fully responsive design (Mobile, Tablet, Desktop)
- No backend needed — runs entirely on the frontend
- Built using React functional components and hooks
- Easy to deploy on Netlify, Vercel, etc.

## 📦 Tech Stack

- React.js
- HTML / CSS / JavaScript
- NewsAPI (for fetching news data)

## 🔧 Setup Instructions

1. Clone or download this project.
2. Run `npm install` to install all dependencies.
3. Get your free API key from [https://newsapi.org/](https://newsapi.org/).
4. Replace the default API key inside the code (likely in `App.js` or `config.js`).
5. Run `npm start` to launch the app on `http://localhost:3000`.

## 📁 Folder Structure

/news
│
├── /public
│   ├── index.html              # Main HTML file
│   ├── _redirects              # 
│   ├── manifest.json
│   ├── favicon.ico             # Favicon
│   └── robots.txt              # SEO file (optional)
│
├── /src
│   ├── /Images                # Static files like images, icons, etc.
│   │   └── DAILY_NEWS_LOGO.png
│   │
│   ├── /components             # Reusable React components
│   │   ├── Finance.js          # Finance Page
│   │   ├── NewsDetail.js       # News Detail Page
│   │   ├── Politics.js         # Politic Page
│   │   ├── Technology.js       # Technology Page
│   │   └── Sports.js           # Sports Page
│   │
│   ├── App.js                  # Main app component
│   ├── App.css                 # App-level styles
│   ├── index.js                # Entry point for the React app
│   ├── index.css               # Global styles
│   ├── 404.js                  # Error Page
│   ├── Footer.js               # Footer
│   ├── Home.js                 # Home Page
│   ├── Loading.js              # Loading Animation Page
│   └── Navbar.js               # Navigation Bar Page
│
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Project dependencies and scripts
├── README.md                   # Project instructions and details
└── .gitignore                  # Gitignore file (if you use Git)



## 🌐 Live Demo

👉 [Check it out here](https://dailynewsin.netlify.app)

## 📄 License

This code is provided for **personal and commercial use**. You may modify and use it in your own projects. However, **reselling or redistributing this code as-is is not allowed**.

---

Happy coding! 💻✨

