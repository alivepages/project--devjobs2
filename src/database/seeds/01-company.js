const dataRows = [
  {
    name: 'Company ABC',
    description: 'Energistically network alternative technology deploying impactful partnerships.',
    imageLink: 'http://www.tinygraphs.com/labs/isogrids/hexa16/nsuaio',
    location: 'Guadalajara'
  },
  {
    name: 'Lossless Enterprises',
    description: 'Quickly strategizing team driven "outside the box" thinking.',
    location: 'Ciudad de Mexico',
    imageLink: 'http://www.tinygraphs.com/labs/isogrids/hexa16/8282',
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('company')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert(dataRows);
    });
};
