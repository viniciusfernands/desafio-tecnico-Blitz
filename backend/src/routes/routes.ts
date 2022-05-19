import { Router } from 'express';

const router = Router();

router.post('/tasks');

router.get('/tasks');

router.get('/tasks/:id');

router.patch('/tasks/:id');

router.delete('/tasks/:id');

export default router;
