module.exports = function (sequelize, DataTypes) {
  const Weather = sequelize.define('Weather',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATEONLY
      },
      indicativo: {
        type: DataTypes.STRING
      },
      nombre: {
        type: DataTypes.STRING
      },
      provincia: {
        type: DataTypes.STRING
      },
      altitud: {
        type: DataTypes.DECIMAL
      },
      tmed: {
        type: DataTypes.DECIMAL
      },
      prec: {
        type: DataTypes.STRING
      },
      tmin: {
        type: DataTypes.DECIMAL
      },
      tmax: {
        type: DataTypes.DECIMAL
      },
      dir: {
        type: DataTypes.DECIMAL
      },
      velmedia: {
        type: DataTypes.DECIMAL
      },
      racha: {
        type: DataTypes.DECIMAL
      },
      sol: {
        type: DataTypes.DECIMAL
      },
      presMax: {
        type: DataTypes.DECIMAL
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'weather',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Weather.associate = function (models) {

  }

  return Weather
}
