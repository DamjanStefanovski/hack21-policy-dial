import * as constants from './data.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(3000, () =>
    console.log('Policy Dial - Hack-21 @ BigID!')
);

// curl -X GET http://localhost:3000
app.get('/', (req, res) => {
    res.send('Welcome to Policy Dial!');
});


// curl -X GET http://localhost:3000/dial/policies
app.get('/dial/policies', (req, res) => {
    return res.send(constants.policiesSummary);
});

// curl -X GET http://localhost:3000/dial/policytypes
app.get('/dial/policytypes', (req, res) => {
    return res.send(["Privacy", "Protection", "Perspective"]);
});

// curl -X GET http://localhost:3000/dial/policytypes/Privacy
app.get('/dial/policytypes/:policyType', (req, res) => {
    if (req.params.policyType.toLowerCase() === "privacy") {
        return res.send(constants.policyPrivacy);
    } else if (req.params.policyType.toLowerCase() === "protection") {
        return res.send(constants.policyProtection);
    }

    return res.send("");
});

// curl -X GET http://localhost:3000/dial/policies/ssn
app.get('/dial/policies/:policyName', (req, res) => {
    if (req.params.policyName.toLowerCase() === "ssn") {
        return res.send(constants.privacySSNpolicy);
    } else if (req.params.policyName.toLowerCase() === "retentionexpired") {
        return res.send(constants.privacyRetentionExpiredPolicy);
    } else if (req.params.policyName.toLowerCase() === "medical") {
        return res.send(constants.privacyMedicalPolicy);
    } else if (req.params.policyName.toLowerCase() === "address") {
        return res.send(constants.privacyAddressPolicy);
    } else if (req.params.policyName.toLowerCase() === "openaccess") {
        return res.send(constants.protectionOpenAccessPolicy);
    } else if (req.params.policyName.toLowerCase() === "token") {
        return res.send(constants.protectionTokenolicy);
    } else if (req.params.policyName.toLowerCase() === "duplicates") {
        return res.send(constants.protectionDuplicatesPolicy);
    }

    return res.send("");
});
