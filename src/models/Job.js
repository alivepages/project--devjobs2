const { Model } = require('objection');

class Job extends Model {
  static get tableName () {
    return 'job';
  }
}

module.exports = Job;
