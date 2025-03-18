### **How to Start a React Frontend Project?**
If you want to use **React, Bootstrap, HTML, and CSS**, follow these steps:

---

## **1️⃣ Initializing a React Project**
To create a new frontend project, run the following commands in the terminal:
```sh
cd frontend
npx create-react-app my-app
cd my-app
npm install
```
Or, to set up a faster React project using **Vite**:
```sh
cd frontend
npm create vite@latest my-app --template react
cd my-app
npm install
```
Once the project is set up, start the development server:
```sh
npm start
```
📌 **Local Server:** `http://localhost:3000`

---

## **2️⃣ Recommended Project Structure**
For better organization, structure your React project as follows:

```
/frontend
 ├── /my-app
 │   ├── /public        # Static assets (images, icons)
 │   ├── /src
 │   │   ├── /components  # Reusable UI components
 │   │   ├── /pages       # Page components (Home, Login, Dashboard)
 │   │   ├── /assets      # Images, CSS, and other resources
 │   │   ├── /services    # API requests
 │   │   ├── App.js       # Main App component
 │   │   ├── index.js     # Root file
 │   ├── package.json     # React dependencies
 │   ├── .gitignore       # Ignore file for Git
```
**📌 Key points:**  
- `components/` - Store buttons, navbars, and UI elements.  
- `pages/` - Define individual pages (Home, Login, Dashboard).  
- `services/` - Store API calls using `fetch` or `Axios`.

---

## **3️⃣ Installing Bootstrap and CSS**
### **1. Install Bootstrap**
Run the following command in the terminal:
```sh
npm install bootstrap
```
Then, import Bootstrap in `index.js` or `App.js`:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```
### **2. Create a Custom CSS File**
For example, create `src/assets/style.css` and add:
```css
.container {
  max-width: 1200px;
  margin: auto;
}
```
Import the CSS file in `App.js`:
```javascript
import './assets/style.css';
```

---

## **4️⃣ Creating Pages**
Each page should be inside `src/pages/`.

✅ **Example: `Home.js` (`src/pages/Home.js`)**
```javascript
import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to YOLO Detection</h1>
      <p>Upload an image and detect objects using YOLO.</p>
    </div>
  );
};

export default Home;
```

✅ **Example: `Login.js` (`src/pages/Login.js`)**
```javascript
import React from "react";

const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" className="form-control mb-2" />
      <input type="password" placeholder="Password" className="form-control mb-2" />
      <button className="btn btn-primary">Login</button>
    </div>
  );
};

export default Login;
```

---

## **5️⃣ Adding React Router (Multiple Pages)**
If you need multiple pages (`Home`, `Login`, `Dashboard`), install `react-router-dom`:
```sh
npm install react-router-dom
```
Modify `App.js` to include routes:
```javascript
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
```
📌 Now, `http://localhost:3000/` will load Home, and `http://localhost:3000/login` will load the Login page.

---

## **6️⃣ Adding a Navbar**
Create a **Navbar** component in `src/components/Navbar.js`:
```javascript
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">YOLO Detector</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```
Import it inside `App.js`:
```javascript
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
```
Now, the navbar will appear on all pages.

---

## **7️⃣ Connecting to the Backend (Later Stage)**
If the frontend needs to communicate with the backend, create `src/services/api.js`:
```javascript
import axios from "axios";

const API_URL = "http://localhost:8000"; // Backend URL

export const detectImage = async (imageData) => {
  const response = await axios.post(`${API_URL}/detect`, { image: imageData });
  return response.data;
};
```
Use it in frontend components:
```javascript
import { detectImage } from "../services/api";

const handleImageUpload = async () => {
  const result = await detectImage(imageData);
  console.log(result);
};
```
📌 This will send an image to the backend's YOLO model.

---

## **Summary: Steps to Build the Frontend**
1️⃣ **Create a React project (`npx create-react-app`).**  
2️⃣ **Organize files (`components`, `pages`, `assets`).**  
3️⃣ **Use Bootstrap and custom CSS for styling.**  
4️⃣ **Set up React Router for multiple pages.**  
5️⃣ **Implement a navbar for navigation.**  
6️⃣ **Prepare API calls for backend integration.**  

Following these steps will help you build a well-structured frontend! 🚀

If you have any questions, feel free to ask! 🔥

