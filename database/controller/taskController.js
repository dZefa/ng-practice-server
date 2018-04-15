import Promise from 'bluebird';

import Task from '../models/task';

const createTask = (task) => {
  return new Promise((resolve, reject) => {
    Task.create(task)
      .then(() => {
        resolve({ success: true });
      })
      .catch(err => {
        reject({ success: false, error: err });
      });
  });
};

export { createTask };
