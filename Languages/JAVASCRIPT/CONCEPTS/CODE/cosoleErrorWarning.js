const winston = require('winston');
const express = require('express');
const app = express();

// Deprecated function
function oldFunction() {
  console.warn("oldFunction is deprecated. Use newFunction instead.");
  // ...function logic
}



const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

app.get('/old-endpoint', (req, res) => {
    oldFunction();
    res.send("This endpoint is deprecated.");
  });
  
app.get('/data', async (req, res) => {
  try {
    const data = await fetchDataFromDatabase();
    res.json(data);
  } catch (error) {
    logger.error("Failed to fetch data from database:", error);
    res.status(500).send("Internal Server Error");
  }
});

function fetchDataFromDatabase() {
  // Simulating a database fetch operation that might fail
  throw new Error("Database connection failed!");
}

app.listen(3000, () => {
  logger.info('Server running on port 3000');
});
