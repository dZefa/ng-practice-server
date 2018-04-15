import { Router } from 'express';

import {
  addTask
} from './controller/taskController';

const router = Router();

router.route('/task')
  .post(addTask);

export default router;
