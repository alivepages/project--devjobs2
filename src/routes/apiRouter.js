const Router = require('express').Router;
const Job = require('../models/Job.js');
const Company = require('../models/Company.js');

const apiRouter = Router();

function getAllJobs (req, res) {
  Job
    .query()
    .then(data => res.json(data));
}

function getJobById (req, res) {
  Job
    .query()
    .findById(req.params.id)
    .then(jobData => {
      return res.json(jobData).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}

function createJob (req, res) {
  Job
    .query()
    .insert(req.body)
    .then(newJob => {
      return res.json(newJob).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}

function updateJob (req, res) {
  Job
    .query()
    .updateAndFetchById(req.params.id, req.body)
    .then(JobUpdated => {
      return res.json(JobUpdated).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })
}

function deleteJobById (req, res) {
  Job
    .query()
    .deleteById(req.params.id)
    .then(jobDeleted => {
      return res.json({
        rowsDeleted: jobDeleted
      }).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })
}

// Companies

function getAllCompanies (req, res) {
  Company
    .query()
    .eager('job')
    .then(data => res.json(data));
}

function createCompany (req, res) {
  Company
    .query()
    .insert(req.body)
    .then(newCompany => {
      return res.json(newCompany).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}

function updateCompany (req, res) {
  Company
    .query()
    .updateAndFetchById(req.params.id, req.body)
    .then(CompanyUpdated => {
      return res.json(CompanyUpdated).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })
}

function deleteCompanyById (req, res) {
  Company
    .query()
    .deleteById(req.params.id)
    .then(CompanyDeleted => {
      return res.json({
        rowsDeleted: CompanyDeleted
      }).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })
}

function deleteCompanyById (req, res) {
  Company
    .query()
    .deleteById(req.params.id)
    .then(companiesDeleted => {
      return res.json({
        rowsDeleted: companiesDeleted
      }).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })
}

function deleteCompanyAndRelatedJobsById (req, res) {
  // Get User to delete from DB.
  Company
    .query()
    .where('id', req.params.id)
    .first()
    .returning('*')
    .then(companyToDelete => {
      // Delete all tweets from this User.
      return companyToDelete
        .$relatedQuery('job') // eager name declared in the relation
        .delete()
        .where('companyId', companyToDelete.id)
        .returning('*')
        .then(jobsDeleted => {
          return companyToDelete
        })
        .catch(error => {
          return res.send(error).status(500);
        });
    })
    .then(companyData => {
      return Company
        .query()
        .deleteById(companyData.id)
        .then(() => {
          return companyData;
        })
    })
    .then(companyDeleted => {
      res.json(companyDeleted).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}

// Jobs Endpoints
apiRouter
  .get('/jobs', getAllJobs)
  .get('/jobs/:id', getJobById)
  .post('/jobs', createJob)
  .put('/jobs/:id', updateJob)
  .delete('/jobs/:id', deleteJobById);

// Company Endpoints
apiRouter
  .get('/companies', getAllCompanies)
  // .get('/companies/:id', getCompanyById)
  // .post('/companies', createCompany)
  // .put('/companies/:id', updateCompany)
  .delete('/companies/:id', deleteCompanyAndRelatedJobsById);

module.exports = apiRouter;
