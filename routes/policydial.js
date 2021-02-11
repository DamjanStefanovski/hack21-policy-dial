var express = require('express');
var policydata = require('./data.js');
var app = express.Router();

/* Summary Dial */
app.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Policy Dial!',
    policySummary: policydata.policySummary,
    policySummaryWeek: policydata.policySummaryWeek,
    policySummaryMonth: policydata.policySummaryMonth
  });
});

// curl -X GET /data
app.get('/data', (req, res) => {
  return res.send({
    title: 'Policy Dial!',
    policySummary: policydata.policySummary,
    policySummaryWeek: policydata.policySummaryWeek,
    policySummaryMonth: policydata.policySummaryMonth
  });
});

// curl -X GET /policytypes
app.get('/policytypes', (req, res) => {
  return res.send(["Privacy", "Protection", "Perspective"]);
});

/* Category Dial */
app.get('/policytypes/:policyType', (req, res) => {
  if (req.params.policyType.toLowerCase() === "privacy") {
    return res.render('index', {
      title: req.params.policyType + ' Dial!',
      policySummary: policydata.policyPrivacy,
      policySummaryWeek: policydata.policyPrivacyWeek,
      policySummaryMonth: policydata.policyPrivacyMonth
    });
  } else if (req.params.policyType.toLowerCase() === "protection") {
    return res.render('index', {
      title: req.params.policyType + ' Dial!',
      policySummary: policydata.policyProtection,
      policySummaryWeek: policydata.policyProtectionWeek,
      policySummaryMonth: policydata.policyProtectionMonth
    });
  }

  return res.send("");
});

// curl -X GET /policytypes/Privacy/data
app.get('/policytypes/:policyType/data', (req, res) => {
  if (req.params.policyType.toLowerCase() === "privacy") {
    return res.send(policydata.policyPrivacy);
  } else if (req.params.policyType.toLowerCase() === "protection") {
    return res.send(policydata.policyProtection);
  }

  return res.send("");
});

// curl -X GET /ssn
app.get('/:policyName', (req, res) => {
  if (req.params.policyName.toLowerCase() === "ssn") {
    return res.send(policydata.privacySSNpolicy);
  } else if (req.params.policyName.toLowerCase() === "retentionexpired") {
    return res.send(policydata.privacyRetentionExpiredPolicy);
  } else if (req.params.policyName.toLowerCase() === "medical") {
    return res.send(policydata.privacyMedicalPolicy);
  } else if (req.params.policyName.toLowerCase() === "address") {
    return res.send(policydata.privacyAddressPolicy);
  } else if (req.params.policyName.toLowerCase() === "openaccess") {
    return res.send(policydata.protectionOpenAccessPolicy);
  } else if (req.params.policyName.toLowerCase() === "token") {
    return res.send(policydata.protectionTokenolicy);
  } else if (req.params.policyName.toLowerCase() === "duplicates") {
    return res.send(policydata.protectionDuplicatesPolicy);
  }

  return res.send("");
});

// curl -X GET /policydial/ssn/data
app.get('/:policyName/data', (req, res) => {
  if (req.params.policyName.toLowerCase() === "ssn") {
    return res.send(policydata.privacySSNpolicy);
  } else if (req.params.policyName.toLowerCase() === "retentionexpired") {
    return res.send(policydata.privacyRetentionExpiredPolicy);
  } else if (req.params.policyName.toLowerCase() === "medical") {
    return res.send(policydata.privacyMedicalPolicy);
  } else if (req.params.policyName.toLowerCase() === "address") {
    return res.send(policydata.privacyAddressPolicy);
  } else if (req.params.policyName.toLowerCase() === "openaccess") {
    return res.send(policydata.protectionOpenAccessPolicy);
  } else if (req.params.policyName.toLowerCase() === "token") {
    return res.send(policydata.protectionTokenolicy);
  } else if (req.params.policyName.toLowerCase() === "duplicates") {
    return res.send(policydata.protectionDuplicatesPolicy);
  }

  return res.send("");
});

module.exports = app;
