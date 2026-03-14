import express from 'express';
import { getPlacements, getPlacementById } from '../controllers/placementController.js';

const router = express.Router();

router.get('/',    getPlacements);
router.get('/:id', getPlacementById);

export default router;