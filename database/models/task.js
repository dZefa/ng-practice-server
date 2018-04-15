import Sequelize from 'sequelize';

import db from '../index';

const Task = db.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  detail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Task;
