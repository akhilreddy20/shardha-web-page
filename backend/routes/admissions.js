import express from 'express';
import {
  createAdmission,
  getAllAdmissions,
  getStats,
  updateStatus,
} from '../controllers/admissionController.js';

const router = express.Router();

router.post('/',                createAdmission);   
router.get('/',                 getAllAdmissions);   
router.get('/stats',            getStats);           
router.patch('/:id/status',     updateStatus);       

export default router;