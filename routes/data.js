
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
  