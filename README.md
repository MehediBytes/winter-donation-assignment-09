# **Warm-Hearts**: Winter Clothing Donation Website ✨

## Project Overview
The **Warm-Hearts** is a single-page web application designed to connect donors with volunteers in Bangladesh, facilitating the donation of winter clothing to people in need. The platform helps provide warmth to vulnerable communities, especially in rural and low-income areas, during the cold winter months.

## Key Features
- **Home Page:** A winter-themed homepage with a banner showcasing donation campaigns and how users can contribute.
- **Donation Campaigns:** Display various donation campaigns with detailed descriptions and "Donate Now" buttons.
- **Donation Details Page:** Accessible after logging in, allows users to submit donations through a form.
- **Authentication System:** Users can log in via email/password or Google Authentication.
- **User Dashboard:** Display profile information and allow users to update their profile details.
- **Responsive Design:** The website is fully responsive, ensuring optimal user experience across mobile, tablet, and desktop devices.
- **Environment Variables:** Firebase configuration is secured through environment variables.
- **Firebase Hosting:** The project is deployed on Firebase for easy hosting.

## 🔧 Technologies Used
- **HTML, CSS, and JavaScript**: For front-end development.
- **React.js**: For building the UI components.
- **Firebase**: For user authentication and hosting.
- **Tailwind CSS**: For styling the application.
- **Daisy UI**: For UI components like buttons, forms, and sliders.
- **React Router**: For routing and navigating between pages.
- **React Toastify**: For displaying notifications and toast messages.
- **React icons**: For using icons.
- **Animate.css**: For using various eyecatching animation.
- **React-Helemt**: For dynamic title.
- **React-Snowfall**: For snowfall effect and give the website a winter-themed vibe.

## 📦 Dependencies  
- **animate.css**: `^4.1.1`  
- **firebase**: `^11.0.2`  
- **localforage**: `^1.10.0`  
- **match-sorter**: `^8.0.0`  
- **react**: `^18.3.1`  
- **react-dom**: `^18.3.1`  
- **react-helmet-async**: `^2.0.5`  
- **react-icons**: `^5.3.0`  
- **react-router-dom**: `^6.28.0`  
- **react-snowfall**: `^2.1.1`  
- **react-toastify**: `^10.0.6`  
- **sort-by**: `^1.2.0`  
- **swiper**: `^11.1.14`  

## 🛠️ DevDependencies  
- **@eslint/js**: `^9.13.0`  
- **@types/react**: `^18.3.12`  
- **@types/react-dom**: `^18.3.1`  
- **@vitejs/plugin-react**: `^4.3.3`  
- **autoprefixer**: `^10.4.20`  
- **daisyui**: `^4.12.14`  
- **eslint**: `^9.13.0`  
- **eslint-plugin-react**: `^7.37.2`  
- **eslint-plugin-react-hooks**: `^5.0.0`  
- **eslint-plugin-react-refresh**: `^0.4.14`  
- **globals**: `^15.11.0`  
- **postcss**: `^8.4.49`  
- **tailwindcss**: `^3.4.15`  
- **vite**: `^5.4.10`

---

### 🖼️ Project Screenshot  

![Crowdcube Screenshot 1](https://i.ibb.co.com/W6MDxFH/warm-1.png)  
![Crowdcube Screenshot 2](https://i.ibb.co.com/N70S6J7/warm-2.png) 

---

### ⚙️ How to Run the Project Locally  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/MehediBytes/crowd-cube-client.git
   cd crowd-cube-client
   ```

2. **Install Dependencies**:  
   ```bash
   npm install
   ```

3. **Setup Firebase**:  
   - Go to [Firebase Console](https://console.firebase.google.com/).  
   - Create a new project and add your Firebase config to `src/firebaseConfig.js`.  

4. **Run the Development Server**:  
   ```bash
   npm run dev
   ```

5. **Access the App**:  
   Open your browser and navigate to `http://localhost:5173`.

---

### 🚀 Live Links  

- **Live Website**:[Warm-Hearts](https://winter-donation-09.web.app/)

---

### 🖋️ Additional Notes  
- For production deployment, use Firebase Hosting or Vercel for optimal performance.

### 🖋️ Future Implementations

1. **Backend Integration with MongoDB Atlas**:  
   - Implement a robust backend using **MongoDB Atlas** for securely storing donation data, user profiles, and campaign details. This will enable dynamic campaign creation, donation tracking, and better scalability.

2. **JWT Token Authentication**:  
   - Transition to using **JWT tokens** for secure and stateless authentication on the platform. This will improve the security of user logins, allowing for seamless authentication across multiple devices and better session management.

3. **Advanced Campaign Filtering & Sorting**:  
   - Introduce more advanced filtering and sorting options for donation campaigns, allowing users to easily find campaigns by category, location, urgency, and more.

4. **Donation History for Users**:  
   - Implement a feature for users to view and manage their donation history, showing all their past contributions and providing them with updates on the status of those campaigns.

5. **User Role Management**:  
   - Add user roles (e.g., admin, volunteer, donor) with specific permissions, allowing better control over campaign creation, approval, and management.

6. **Real-Time Donation Tracking**:  
   - Integrate real-time donation tracking for campaigns, providing both campaign organizers and donors with live updates on the total amount raised and remaining goal.

7. **Admin Dashboard for Campaign Management**:  
   - Build a dedicated **admin dashboard** that allows administrators to manage campaigns, monitor donations, and generate reports for tracking impact.

8. **Email Notifications & Updates**:  
   - Set up automated email notifications for users when their donation is received, or when a campaign reaches certain milestones.

9. **Volunteer Sign-up System**:  
   - Implement a **volunteer sign-up system** that allows users to register as volunteers to help with campaign promotions, distribution, or organizing local events.

10. **Mobile App Development**:  
    - Build a native mobile app for **iOS and Android**, offering a more engaging and convenient experience for users to track donations and interact with campaigns on the go.

11. **Multi-Language Support**:  
    - Add support for multiple languages, making the platform accessible to a wider audience across Bangladesh and beyond.

12. **Advanced Search Functionality**:  
    - Implement advanced search functionality to allow users to find campaigns based on keyword search, donation amount, location, and campaign status.
