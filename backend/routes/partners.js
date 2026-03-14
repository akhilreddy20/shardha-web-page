import express from 'express';
import { getPartners, getPartnerById } from '../controllers/partnerController.js';

const router = express.Router();

router.get('/',    getPartners);
router.get('/:id', getPartnerById);

export default router;