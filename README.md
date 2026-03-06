# MarketConnect Uganda

A simple full-stack web application that helps small-scale farmers in Uganda connect directly with produce buyers such as traders, restaurants, and shops.

## Features

- **Farmers** can list produce they want to sell
- **Buyers** can browse available produce
- **Users** can view approximate market prices for crops

## Tech Stack

### Backend
- Node.js
- Express.js
- SQLite database

### Frontend
- React (Vite)
- Plain CSS
- Axios for API requests
- React Router for navigation

## Project Structure

```
MarketConnectUganda/
├── backend/
│   ├── server.js           # Main server entry point
│   ├── db.js               # Database configuration and setup
│   ├── package.json        # Backend dependencies
│   ├── routes/
│   │   ├── produceRoutes.js    # Produce API routes
│   │   └── priceRoutes.js      # Price API routes
│   ├── controllers/
│   │   ├── produceController.js    # Produce request handlers
│   │   └── priceController.js      # Price request handlers
│   └── models/
│       └── produceModel.js     # Database operations
│
└── frontend/
    ├── index.html          # HTML entry point
    ├── package.json        # Frontend dependencies
    ├── vite.config.js      # Vite configuration
    └── src/
        ├── main.jsx        # React entry point
        ├── App.jsx         # Root component with routing
        ├── App.css         # Main styles
        ├── index.css       # Global styles
        ├── components/
        │   ├── Navbar.jsx          # Navigation bar
        │   ├── ProduceCard.jsx     # Produce listing card
        │   └── AddProduceForm.jsx  # Form to add produce
        ├── pages/
        │   ├── Home.jsx        # Home page - lists all produce
        │   ├── AddProduce.jsx  # Page to add new produce
        │   └── Prices.jsx      # Market prices page
        └── services/
            └── api.js          # API service functions
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/produce` | Get all produce listings |
| POST | `/api/produce` | Add a new produce listing |
| GET | `/api/prices` | Get all market prices |

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (version 16 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)

To check if Node.js is installed, run:
```bash
node --version
npm --version
```

### Step 1: Clone or Navigate to the Project

```bash
cd MarketConnectUganda
```

### Step 2: Setup and Run the Backend

1. **Open a terminal** and navigate to the backend folder:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the backend server**:
   ```bash
   npm start
   ```

4. The server will start at `http://localhost:5000`

You should see:
```
=================================
MarketConnect Uganda API
Server running on port 5000
http://localhost:5000
=================================
```

### Step 3: Setup and Run the Frontend

1. **Open a NEW terminal** (keep the backend running)

2. **Navigate to the frontend folder**:
   ```bash
   cd frontend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. The frontend will start at `http://localhost:3000`

### Step 4: Open the Application

Open your browser and go to:
```
http://localhost:3000
```

## Usage

### Home Page
- View all available produce listings from farmers
- Each listing shows the crop name, quantity, location, and contact information

### Add Produce Page
- Farmers can add new produce listings
- Fill in the crop name, quantity, location, and contact number
- Click "Add Produce" to submit

### Market Prices Page
- View approximate market prices for various crops
- Prices are shown by crop and town
- Note: Prices are approximate and may vary

## Database

The application uses SQLite for data storage. The database file (`marketconnect.db`) is created automatically in the `backend` folder when you first run the server.

### Tables

**produce** - Stores farmer listings
| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key |
| crop_name | TEXT | Name of the crop |
| quantity | TEXT | Amount available |
| location | TEXT | Farmer's location |
| contact | TEXT | Contact information |
| created_at | DATETIME | When the listing was created |

**market_prices** - Stores market price information
| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key |
| crop_name | TEXT | Name of the crop |
| town | TEXT | Town name |
| average_price | INTEGER | Average price in UGX |

## Sample Data

The database comes pre-loaded with sample market prices for common crops in Uganda, including:
- Maize
- Beans
- Cassava
- Tomatoes
- Bananas (Matooke)
- Rice
- Groundnuts

## Troubleshooting

### Backend won't start
- Make sure you're in the `backend` folder
- Run `npm install` again
- Check if port 5000 is available

### Frontend won't connect to backend
- Make sure the backend is running on port 5000
- Check the browser console for errors
- Verify the API URL in `frontend/src/services/api.js`

### CORS errors
- The backend includes CORS middleware, but if you have issues, make sure the `cors` package is installed

## Development Notes

- The frontend uses React functional components and hooks
- State management is done with `useState` and `useEffect`
- API calls are centralized in the `services/api.js` file
- Styling uses plain CSS with a green color theme to represent agriculture

## License

This project is for educational purposes.

---

**MarketConnect Uganda** - Connecting Farmers with Buyers
