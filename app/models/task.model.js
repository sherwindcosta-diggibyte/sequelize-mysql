module.exports = (sequelize, Sequelize) => {

  const task = sequelize.define("task",{
    task: {
      type: Sequelize.DataTypes.STRING,
    },
    status: {
      type: Sequelize.DataTypes.STRING,
    },
    estimated_hours: {
      type: Sequelize.DataTypes.INTEGER
    },
    hours_spent: {
      type: Sequelize.DataTypes.INTEGER
    },
    priority : {
      type: Sequelize.DataTypes.STRING
    },
    project_name: {
      type: Sequelize.DataTypes.STRING
    },
    start_date: {
      type: Sequelize.DataTypes.DATE
    },
    end_date: {
      type: Sequelize.DataTypes.DATE
    }
  })

}