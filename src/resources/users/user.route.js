import { Router } from 'express';
import controller from './user.controller.js';
import { verifyPaystack } from '../../utils/paystack.js';

const router = Router();

router.route('/').get(controller.getMany);
router.route('/:id').post(verifyPaystack, controller.createOne);
router.route('/count').get(controller.getCount);

export default router;
