import { Router } from 'express';

import tasks from '../controllers/tasks.controllers';

const router = Router();

router.post('/tasks', tasks.create);

router.get('/tasks');

router.get('/tasks/:id');

router.patch('/tasks/:id');

router.delete('/tasks/:id');

export default router;
