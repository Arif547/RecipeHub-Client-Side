Here’s a professional and complete `README.md` file for your **RecipeHub** project, following all the assignment requirements:

---

````markdown
# RecipeHub 🍽️

**Live Website:** [RecipeHub Live](https://aquamarine-bavarois-13cd20.netlify.app/)

RecipeHub is a user-friendly, dynamic Recipe Book App that allows users to discover, share, and manage delicious recipes from around the world. It features top liked recipes, personalized recipe management, and social interaction through likes and user accounts.

---

## 🚀 Features

- 🔐 **Authentication**: Secure user authentication using Firebase (Email/Password and Google Sign-in).
- 📚 **Recipe Management**: Users can add, update, and delete their own recipes through a private dashboard.
- ❤️ **Like System**: Users can like recipes to increase popularity — except for their own.
- 📊 **Top Recipes Display**: Automatically displays the top 6 recipes with the most likes on the homepage.
- 🎨 **Unique, Responsive Design**: Fully responsive design across mobile, tablet, and desktop devices.
- 🌓 **Dark/Light Theme Toggle**: User-friendly toggle between dark and light modes.
- 🔍 **Filter by Cuisine**: Filter all recipes by cuisine type via a dropdown.
- ⚙️ **Realtime Updates**: Recipes dynamically update across the site without the need for refresh.
- 💬 **Interactive UI**: Integrated with libraries like `React Awesome Reveal`, `React Tooltip`, and `React Simple Typewriter` for rich user interactions.

---

## 🧪 Technologies Used

### Client Side
- React
- React Router
- Firebase Authentication
- TailwindCSS
- React Icons
- React Hot Toast
- Lottie React
- React Simple Typewriter
- React Awesome Reveal
- React Tooltip
- Netlify Deployment

### Server Side
- Node.js
- Express.js
- MongoDB
- CORS
- Dotenv
- Vercel Deployment

---

## 📁 Folder Structure


---

## 🔒 Environment Variables

To keep sensitive information secure, environment variables are used to store Firebase config and MongoDB credentials. These variables are managed in `.env` files and are not exposed publicly.

---

## 🔑 Key Pages & Functionality

* **Home Page**: Banner, top 6 liked recipes, static sections, dark/light toggle.
* **Login & Register**: Secure forms with validation. Google login supported.
* **Add Recipe**: Private route to add a new recipe with detailed form inputs.
* **All Recipes**: View all recipes with filtering by cuisine and details view.
* **My Recipes**: View, update, and delete your own recipes.
* **Recipe Details**: Full recipe view with like functionality and restriction from liking own recipe.
* **404 Page**: Food-themed custom error page without navbar/footer.

---

## 🔧 Installation & Setup

1. Clone the repositories:

   * Client: `git clone https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-Arif547.git`
   * Server: `git clone https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-Arif547.git`

2. Install dependencies:

   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

3. Set up your `.env` files with Firebase and MongoDB credentials.

4. Start the development server:

   * Client: `npm run dev`
   * Server: `npm run start`

---

## 📌 Important Notes

* Avoids any "Lorem Ipsum" placeholder text.
* All alerts and errors are shown using toast or SweetAlert, not `alert()`.
* Routes are protected using Firebase auth and React Router.
* Reloading on private routes will not log users out or redirect them.
* Deployment:

  * **Client**: [Netlify](https://aquamarine-bavarois-13cd20.netlify.app/)
  * **Server**: [Vercel](https://vercel.com/)

---

## 📜 License

This project is developed as part of an educational assignment and is not intended for commercial use.

---
