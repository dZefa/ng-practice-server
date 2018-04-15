import {
  createTask
} from '../../../database/controller/taskController';

const addTask = async (req, res) => {
  createTask(req.body)
    .then(result => {
      res.status(201).send({ result });
    })
    .catch(err => {
      res.status(500).send({ result: err });
    });
};

export { addTask };
