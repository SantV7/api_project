import { Sequelize } from 'sequelize';

import { Model } from 'sequelize';

class Users extends Model {
   static init(sequelize) {
      super.init(
        {
          name: Sequelize.STRING,
          user_name: Sequelize.STRING,
          email: Sequelize.STRING,
          avatar: Sequelize.STRING,
          gender:Sequelize.STRING,
          bio: Sequelize.STRING,
          password_hash: Sequelize.STRING,
          created_at: Sequelize.DATE,
          updated_at: Sequelize.DATE                   
        }
      )
   }
}

