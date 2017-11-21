const { Model } = require('objection');

class Company extends Model {
  static get tableName () {
    return 'company';
  }

  static get relationMappings () {
    const Job = require('./Job.js');

    return {
      job: {
        relation: Model.HasManyRelation,
        modelClass: Job,
        join: {
          from: 'company.id',
          to: 'job.companyId'
        }
      }
    };
  }
}

module.exports = Company;
