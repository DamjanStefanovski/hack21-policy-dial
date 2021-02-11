module.exports = {
    // Summary
    policySummary: {
        "totalPoliciesCount": 21,
        "triggeredPoliciesCount": 7,
        "totalCategoryCount": 3,
        "categoriesWithFinding": ["Privacy", "Protection"],
        "policyScorePercent": 33
    },
    policySummaryWeek: {
        "totalPoliciesCount": 21,
        "triggeredPoliciesCount": 5,
        "totalCategoryCount": 3,
        "categoriesWithFinding": ["Privacy", "Protection"],
        "policyScorePercent": 23
    },
    policySummaryMonth: {
        "totalPoliciesCount": 21,
        "triggeredPoliciesCount": 10,
        "totalCategoryCount": 3,
        "categoriesWithFinding": ["Privacy", "Protection"],
        "policyScorePercent": 48
    },

    // Policy types
    policyPrivacy: {
        "policyType": "Privacy",
        "totalPoliciesCount": 8,
        "triggeredPoliciesCount": 4,
        "triggeredPolicies": ["SSN", "RetentionExpired", "Medical", "Address"],
        "policyScorePercent": 50
    },
    policyPrivacyWeek: {
        "policyType": "Privacy",
        "totalPoliciesCount": 8,
        "triggeredPoliciesCount": 5,
        "triggeredPolicies": ["SSN", "RetentionExpired", "Medical", "Address"],
        "policyScorePercent": 50
    },
    policyPrivacyMonth: {
        "policyType": "Privacy",
        "totalPoliciesCount": 8,
        "triggeredPoliciesCount": 6,
        "triggeredPolicies": ["SSN", "RetentionExpired", "Medical", "Address"],
        "policyScorePercent": 50
    },
    policyProtection: {
        "policyType": "Protection",
        "totalPoliciesCount": 7,
        "triggeredPoliciesCount": 3,
        "triggeredPolicies": ["OpenAccess", "Token", "Duplicates"],
        "policyScorePercent": 43
    },
    policyProtectionWeek: {
        "policyType": "Protection",
        "totalPoliciesCount": 7,
        "triggeredPoliciesCount": 5,
        "triggeredPolicies": ["OpenAccess", "Token", "Duplicates"],
        "policyScorePercent": 43
    },
    policyProtectionMonth: {
        "policyType": "Protection",
        "totalPoliciesCount": 7,
        "triggeredPoliciesCount": 1,
        "triggeredPolicies": ["OpenAccess", "Token", "Duplicates"],
        "policyScorePercent": 43
    },

    // Individual policy finding details
    privacySSNpolicy: {
        "name": "SSN",
        "policyType": "Privacy",
        "triggerThreshold": 1,
        "noOfFindings": 12,
        "lastTriggerTime": "12/14/2020, 10:42:04 AM"
    },
    privacyRetentionExpiredPolicy: {
        "name": "RetentionExpired",
        "policyType": "Privacy",
        "triggerThreshold": 10,
        "noOfFindings": 123,
        "lastTriggerTime": "12/14/2020, 10:42:04 AM"
    },
    privacyMedicalPolicy: {
        "name": "Medical",
        "policyType": "Privacy",
        "triggerThreshold": 10,
        "noOfFindings": 16,
        "lastTriggerTime": "12/14/2020, 10:42:04 AM"
    },
    privacyAddressPolicy: {
        "name": "Address",
        "policyType": "Privacy",
        "triggerThreshold": 100,
        "noOfFindings": 345,
        "lastTriggerTime": "12/14/2020, 10:42:04 AM"
    },
    protectionOpenAccessPolicy: {
        "name": "OpenAccess",
        "policyType": "Protection",
        "triggerThreshold": 50,
        "noOfFindings": 145,
        "lastTriggerTime": "12/14/2020, 10:42:04 AM"
    },
    protectionTokenolicy: {
        "name": "Token",
        "policyType": "Protection",
        "triggerThreshold": 100,
        "noOfFindings": 1234,
        "lastTriggerTime": "12/14/2020, 10:42:04 AM"
    },
    protectionDuplicatesPolicy: {
        "name": "Duplicates",
        "policyType": "Protection",
        "triggerThreshold": 1000,
        "noOfFindings": 2234,
        "lastTriggerTime": "12/14/2020, 10:42:04 AM"
    }
}