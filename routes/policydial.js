var express = require('express');
var policydata = require('./data.js');
var app = express.Router();

// Summary
const policySummary = {
  "totalPoliciesCount": 21,
  "triggeredPoliciesCount": 7,
  "totalCategoryCount": 3,
  "categoriesWithFinding": ["Privacy", "Protection"],
  "policyScorePercent": 33
};
const policySummaryWeek = {
  "totalPoliciesCount": 21,
  "triggeredPoliciesCount": 5,
  "totalCategoryCount": 3,
  "categoriesWithFinding": ["Privacy", "Protection"],
  "policyScorePercent": 23
};
const policySummaryMonth = {
  "totalPoliciesCount": 21,
  "triggeredPoliciesCount": 10,
  "totalCategoryCount": 3,
  "categoriesWithFinding": ["Privacy", "Protection"],
  "policyScorePercent": 48
};

/* GET home page. */
app.get('/', function (req, res, next) {
  res.render('index', { title: 'Policy Dial!', 
  policySummary: policySummary,
  policySummaryWeek: policySummaryWeek,
  policySummaryMonth: policySummaryMonth
 });
});

// curl -X GET /policydial
app.get('/data', (req, res) => {
  return res.send({ title: 'Policy Dial!', 
  policySummary: policySummary,
  policySummaryWeek: policySummaryWeek,
  policySummaryMonth: policySummaryMonth
 });
});

// curl -X GET /policydial/policytypes
app.get('/policytypes', (req, res) => {
  return res.send(["Privacy", "Protection", "Perspective"]);
});

// curl -X GET /policydial/policytypes/Privacy
app.get('/policytypes/:policyType', (req, res) => {
  if (req.params.policyType.toLowerCase() === "privacy") {
    return res.send(policyPrivacy);
  } else if (req.params.policyType.toLowerCase() === "protection") {
    return res.send(policyProtection);
  }

  return res.send("");
});

// curl -X GET /policydial/ssn
app.get('/:policyName', (req, res) => {
  if (req.params.policyName.toLowerCase() === "ssn") {
    return res.send(privacySSNpolicy);
  } else if (req.params.policyName.toLowerCase() === "retentionexpired") {
    return res.send(privacyRetentionExpiredPolicy);
  } else if (req.params.policyName.toLowerCase() === "medical") {
    return res.send(privacyMedicalPolicy);
  } else if (req.params.policyName.toLowerCase() === "address") {
    return res.send(privacyAddressPolicy);
  } else if (req.params.policyName.toLowerCase() === "openaccess") {
    return res.send(protectionOpenAccessPolicy);
  } else if (req.params.policyName.toLowerCase() === "token") {
    return res.send(protectionTokenolicy);
  } else if (req.params.policyName.toLowerCase() === "duplicates") {
    return res.send(protectionDuplicatesPolicy);
  }

  return res.send("");
});

module.exports = app;
