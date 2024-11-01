// petRoutes.ts file - to define routes for the Pet entity

// Define Basic Routes
// Import express and create a router:
import express from 'express';
const router = express.Router();

// Add routes. For example, add a route to get all pets:
router.get('/pets', (req, rec) => {
    res.json({ message: 'List of all pets' });
});

// Export the router
export default router;