import Task from '../models/task';

const createTask = async (task) => {
  await Task.create(task)
    .then(() => {
      return { success: true };
    })
    .catch(err => {
      return { success: false };
    });
};

export { createTask };
