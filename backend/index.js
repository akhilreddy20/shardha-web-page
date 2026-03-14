import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import admissionsRouter from './routes/admissions.js';
import programsRouter   from './routes/programs.js';
import placementsRouter from './routes/placements.js';
import partnersRouter   from './routes/partners.js';

// Load .env variables FIRST before anything else reads them
dotenv.config();

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status:  'OK',
    message: 'Sharda University API is running',
    mongo:   mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    port:    PORT,
  });
});

app.use('/api/admissions', admissionsRouter);
app.use('/api/programs',   programsRouter);
app.use('/api/placements', placementsRouter);
app.use('/api/partners',   partnersRouter);

// ── 404 handler ───────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

// ── Global error handler ──────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// ── Start server then connect DB ──────────────────────────────────────
app.listen(PORT, async () => {
  console.log(`\n🚀 Server        → http://localhost:${PORT}`);
  console.log(`🏥 Health check  → http://localhost:${PORT}/api/health\n`);
  await connectDB();
});

export default app;

// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import admissionsRouter from './routes/admissions.js';
// import programsRouter from './routes/programs.js';
// import placementsRouter from './routes/placements.js';
// import partnersRouter from './routes/partners.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Health check
// app.get('/api/health', (req, res) => {
//   res.json({ status: 'OK', message: 'Sharda University API is running' });
// });

// // Routes
// app.use('/api/admissions', admissionsRouter);
// app.use('/api/programs',   programsRouter);
// app.use('/api/placements', placementsRouter);
// app.use('/api/partners',   partnersRouter);

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error('❌ Error:', err.message);
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || 'Internal Server Error',
//   });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
//   console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
// });

// export default app;