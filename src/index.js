import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());

app.listen(3000, () =>
    console.log('Policy Dial - Hack-21 @ BigID!')
);

app.get('/', (req, res) => {
    res.send('Welcome to Policy Dial!');
});


// curl -X GET http://localhost:3000/dial/policies
const policiesSummary = {
    "totalPoliciesCount": 31,
    "triggeredPoliciesCount": 17,
    "totalCategoryCount": 3,
    "categoriesWithFinding": ["t1", "t3"],
    "policyScorePercent": 70
};

app.get('/dial/policies', (req, res) => {
    return res.send(policiesSummary);
});

// curl -X GET http://localhost:3000/dial/policytypes/t1
const policyT1 = {
    "policyType": "t1",
    "totalPoliciesCount": 10,
    "triggeredPolicies": ["p1", "p4", "p9"],
    "policyScorePercent": 70
};

app.get('/dial/policytypes/t1', (req, res) => {
    return res.send(policyT1);
});

// /dial/policies/p1
const policyP1 = {
    "name": "p1",
    "policyType": "t1",
    "triggerThreshold": 10,
    "noOfFindings": 123,
    "lastTriggerTime": "12/14/2020, 10:42:04 AM"
};

app.get('/dial/policies/p1', (req, res) => {
    return res.send(policyP1);
});
