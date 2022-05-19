import { Router } from 'express';

import tasks from '../controllers/tasks.controllers';
import statusMiddleware from '../middlewares/status.middleware';
import taskMiddleware from '../middlewares/task.middleware';
import idMiddleware from '../middlewares/id.middleware';
import updateMiddleware from '../middlewares/update.middleware';

const router = Router();

router.post('/tasks', taskMiddleware, statusMiddleware, tasks.create);

router.get('/tasks', tasks.getAll);

router.get('/tasks/:id', idMiddleware, tasks.getById);

router.patch('/tasks/:id', idMiddleware, updateMiddleware, statusMiddleware, tasks.update);

router.delete('/tasks/:id', idMiddleware, tasks.destroy);

export default router;
