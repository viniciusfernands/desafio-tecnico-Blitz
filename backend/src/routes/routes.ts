import { Router } from 'express';

import tasks from '../controllers/tasks.controllers';
import statusMiddleware from '../middlewares/status.middleware';
import taskMiddleware from '../middlewares/task.middleware';
import idMiddleware from '../middlewares/id.middleware';

const router = Router();

router.post('/tasks', taskMiddleware, statusMiddleware, tasks.create);

router.get('/tasks', tasks.getAll);

router.get('/tasks/:id', idMiddleware, tasks.getById);

router.patch('/tasks/:id');

router.delete('/tasks/:id');

export default router;
