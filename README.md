# NewsEye

NewsEye is a React-based web application that fetches and displays the latest news articles from various categories. The app leverages the NewsAPI to provide up-to-date headlines and news content. Users can browse news articles from categories such as Technology, Business, Health, Sports, and Entertainment.

# Features

**Dynamic News Content:** Fetches the latest news articles based on selected categories.<br>
**Responsive Design:** Uses Bootstrap for a modern and responsive layout.<br>
**Error Handling:** Handles image loading errors with fallback images.<br>
**Sticky Navbar:** A sticky navbar that remains at the top of the viewport when scrolling.<br>
**Ellipsis for Text Overflow:** Truncates long titles and descriptions for a clean look.<br>

# Tech Stack

**React:** Frontend library for building user interfaces.<br>
**Bootstrap:** CSS framework for responsive design and styling.<br>
**NewsAPI:** API service for fetching news articles.<br>
**JavaScript (ES6):** Modern JavaScript features for functionality.<br>

# Installation

**1. Clone the repository:** <br>
git clone https://github.com/your-username/NewsEye.git<br>
cd NewsEye

**2. Install the dependencies:**<br>
npm install

**3. Create a .env file in the root directory based on the .env.example file:**<br>
cp .env.example .env

**4. Add your NewsAPI key to the .env file:**<br>
VITE_API_KEY=your_newsapi_key_here

**5. Run the application:**<br>
npm run dev

**6. Open your browser and navigate to http://localhost:5173 to view the application.**

# Usage

**Select Category:** Click on any category in the navbar to view news articles from that category.<br>
**Read More:** Click the "Read More" button on any news card to read the full article on the source website.

# Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any feature additions or bug fixes. Make sure to follow the code style and include tests where applicable.

# Acknowledgements

**NewsAPI** for providing the news data.<br>
**Bootstrap** for the responsive design framework.

