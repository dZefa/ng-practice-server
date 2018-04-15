import db from '../index';
import Task from '../models/task';

const sync = (bool=false) => {
  db.authenticate()
    .then(() => {
      console.log(`Database authenticated`);
      Task.sync({ force: bool })
        .then(() => {
          console.log(`Task model synced`);
        })
        .catch(err => {
          console.log(`Error syncing Task model. ${err}`);
        });
    })
    .catch(err => {
      console.log(`Error authenticating database. ${err}`);
    });
};

export default sync;
