import { Router } from 'express';

import tasks from '../controllers/tasks.controllers';
import statusMiddleware from '../middlewares/status.middleware';
import taskMiddleware from '../middlewares/task.middleware';

const router = Router();

router.post('/tasks', taskMiddleware, statusMiddleware, tasks.create);

router.get('/tasks');

router.get('/tasks/:id');

router.patch('/tasks/:id');

router.delete('/tasks/:id');

export default router;
