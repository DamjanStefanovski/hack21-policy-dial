var express = require('express');
var app = express.Router();

// Summary
const policiesSummary = {
  "totalPoliciesCount": 21,
  "triggeredPoliciesCount": 7,
  "totalCategoryCount": 3,
  "categoriesWithFinding": ["Privacy", "Protection"],
  "policyScorePercent": 33
};
const policiesSummaryLastWeek = {
  "totalPoliciesCount": 21,
  "triggeredPoliciesCount": 5,
  "totalCategoryCount": 3,
  "categoriesWithFinding": ["Privacy", "Protection"],
  "policyScorePercent": 23
};
const policiesSummaryLastMonth = {
  "totalPoliciesCount": 21,
  "triggeredPoliciesCount": 10,
  "totalCategoryCount": 3,
  "categoriesWithFinding": ["Privacy", "Protection"],
  "policyScorePercent": 48
};

// Policy types
const policyPrivacy = {
  "policyType": "Privacy",
  "totalPoliciesCount": 8,
  "triggeredPolicies": ["SSN", "RetentionExpired", "Medical", "Address"],
  "policyScorePercent": 50
};
const policyProtection = {
  "policyType": "Protection",
  "totalPoliciesCount": 7,
  "triggeredPolicies": ["OpenAccess", "Token", "Duplicates"],
  "policyScorePercent": 43
};

// Individual policy finding details
const privacySSNpolicy = {
  "name": "SSN",
  "policyType": "Privacy",
  "triggerThreshold": 1,
  "noOfFindings": 12,
  "lastTriggerTime": "12/14/2020, 10:42:04 AM"
};
const privacyRetentionExpiredPolicy = {
  "name": "RetentionExpired",
  "policyType": "Privacy",
  "triggerThreshold": 10,
  "noOfFindings": 123,
  "lastTriggerTime": "12/14/2020, 10:42:04 AM"
};
const privacyMedicalPolicy = {
  "name": "Medical",
  "policyType": "Privacy",
  "triggerThreshold": 10,
  "noOfFindings": 16,
  "lastTriggerTime": "12/14/2020, 10:42:04 AM"
};
const privacyAddressPolicy = {
  "name": "Address",
  "policyType": "Privacy",
  "triggerThreshold": 100,
  "noOfFindings": 345,
  "lastTriggerTime": "12/14/2020, 10:42:04 AM"
};
const protectionOpenAccessPolicy = {
  "name": "OpenAccess",
  "policyType": "Protection",
  "triggerThreshold": 50,
  "noOfFindings": 145,
  "lastTriggerTime": "12/14/2020, 10:42:04 AM"
};
const protectionTokenolicy = {
  "name": "Token",
  "policyType": "Protection",
  "triggerThreshold": 100,
  "noOfFindings": 1234,
  "lastTriggerTime": "12/14/2020, 10:42:04 AM"
};
const protectionDuplicatesPolicy = {
  "name": "Duplicates",
  "policyType": "Protection",
  "triggerThreshold": 1000,
  "noOfFindings": 2234,
  "lastTriggerTime": "12/14/2020, 10:42:04 AM"
};

// curl -X GET /policydial
app.get('/', (req, res) => {
  return res.send(policiesSummary);
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
