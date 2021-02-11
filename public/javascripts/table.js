function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Value');
    data.addRows([
        ['Policy Type', policyDetails.policyType],
        ['Trigger Threshold', policyDetails.triggerThreshold.toString()],
        ['Number Of Findings', policyDetails.noOfFindings.toString()],
        ['Last Trigger Time', policyDetails.lastTriggerTime]
    ]);

    var table = new google.visualization.Table(document.getElementById('details_div'));

    table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
}
