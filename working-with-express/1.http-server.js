const http = require('http');
const PORT = 3000;
const HOSTNAME = 'localhost';

// Sample data for men and women products
const menProducts = [
  { id: 1, name: "Men's T-shirt", brand: 'ABC', price: 19.99, color: 'blue', size: "M", category: "clothing"},
  { id: 2, name: "Men's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
  { id: 3, name: "Men's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
  { id: 4, name: "Men's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
  { id: 5, name: "Men's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
  { id: 6, name: "Men's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
  { id: 7, name: "Men's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
  { id: 8, name: "Men's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
  { id: 9, name: "Men's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
  { id: 10, name: "Men's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
 
];

const womenProducts = [
    { id: 1, name: "Women's T-shirt", brand: 'ABC', price: 19.99, color: 'blue', size: "M", category: "clothing"},
    { id: 2, name: "Women's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
    { id: 3, name: "Women's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
    { id: 4, name: "Women's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
    { id: 5, name: "Women's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
    { id: 6, name: "Women's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
    { id: 7, name: "Women's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
    { id: 8, name: "Women's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
    { id: 9, name: "Women's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
    { id: 10, name: "Women's T-shirt", brand: 'HFG', price: 20.12, color: 'yellow', size: "A", category: "clothing" },
   
  
];

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the content type to JSON
  res.setHeader('Content-Type', 'application/json');

  // Handle different endpoints
  if (req.url === '/') {
    // Root endpoint
    res.end(JSON.stringify('Welcome to Men & Women Dummy Data' ));
  } else if (req.url === '/men') {
    // Endpoint for men products
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    // Endpoint for women products
    res.end(JSON.stringify(womenProducts));
  } else {
    // Endpoint not found
    res.statusCode = 500;
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

// Set the server to listen on port 3000

server.listen(PORT, () => {
  console.log(`Server running at ${HOSTNAME}:${PORT}`);
});
