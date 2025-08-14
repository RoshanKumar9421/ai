// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import { clerkMiddleware, requireAuth } from '@clerk/express'
// import aiRouter from './routes/aiRoutes.js';
// import connectCloudinary from './configs/cloudinary.js';
// import userRouter from './routes/userRoutes.js';

// const app = express();

// await connectCloudinary()

// app.use(cors())
// app.use(express.json())
// app.use(clerkMiddleware())

// app.get('/',(req, res)=>res.send('server is live'))

// app.use(requireAuth())

// app.use('/api/ai', aiRouter)
// app.use('/api/ai', userRouter)


// const PORT=process.env.PORT ||3000;

// app.listen(PORT, ()=>{
//   console.log('server is running on port', PORT);
// })

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express();

// Connect Cloudinary
await connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Test route
app.get('/', (req, res) => res.send('server is live'));

// Protected routes
app.use(requireAuth());
app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter); // Changed to /api/user instead of /api/ai for clarity

// Export the app for Vercel
export default app;


