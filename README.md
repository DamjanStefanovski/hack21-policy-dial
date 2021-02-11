# hack21-policy-dial
BigID hackathon 2021 - Idea - Policy Dial

### Assumption:
BigID tool already provides many ways to define Privacy/Protection/Perspective oriented policies using meta-data/tags/classifiers defined/captured by BigID during scans. Use the captured policy findings within BigID to develop a Policy tracking app that shows how teams are making progress to resolve policy findings.  

### Policy Dial: 
A dial based App/Visualization designed for stakeholders (e.g. data-stewards) to show/track data-remediation progress of policies findings (that are already captured in BigID) against a preset time period (daily/weekly/monthly).

### Implementation: 
Visualization is rendered using an intuitive dial that provides stats on progress made on addressing policy findings. At the highest level it provides summary stats showing latest triggered policies findings v/s total policies defined. Under it you also see a couple additional dials showing historical stats on the same. You can drilldown (click/navigate/swipe) from here to see several similar latestest vs historical policy-type level summary dials. Further drill down from here provides latestest vs historical details of individual policy findings under a specific category.

### Running the Application

#### Prerequisites 
NodeJS version 14.x

#### Building & running the app locally
Clone the project (or download the zip)
Goto the project folder & run command `npm install` followed by `npm start`
App should be up on http://localhost:3000/
