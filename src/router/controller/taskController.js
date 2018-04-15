import {
  createTask
} from '../../../database/controller/taskController';

const addTask = async (req, res) => {
  let created = await createTask(req.body);

  if (created.success) {
    res.status(201).send({ result: `Task added` });
  } else {
    res.status(500).send({ result: `Error adding task` });
  }
};

export { addTask };
