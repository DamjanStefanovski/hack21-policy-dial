
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Now', policySummary.totalPoliciesCount]
    ]);
    var options = {
        width: 700,
        height: 300,
        greenFrom: 0,
        greenTo: (policySummary.totalPoliciesCount / 3),
        yellowFrom: (policySummary.totalPoliciesCount / 3),
        yellowTo: ((policySummary.totalPoliciesCount / 3) * 2),
        redFrom: ((policySummary.totalPoliciesCount / 3) * 2),
        redTo: policySummary.totalPoliciesCount,
        minorTicks: policySummary.totalPoliciesCount,
        majorTicks: ['0', policySummary.totalPoliciesCount],
        max: policySummary.totalPoliciesCount,
        animation: {
            duration: 1000,
            easing: 'out',
        },
    };
    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
    data.setValue(0, 1, policySummary.triggeredPoliciesCount);
    chart.draw(data, options);

    var historyData = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Last Week', policySummaryWeek.totalPoliciesCount]
    ]);
    var historyWeekOptions = {
        width: 400,
        height: 150,
        greenFrom: 0,
        greenTo: (policySummaryWeek.totalPoliciesCount / 3),
        yellowFrom: (policySummaryWeek.totalPoliciesCount / 3),
        yellowTo: ((policySummaryWeek.totalPoliciesCount / 3) * 2),
        redFrom: ((policySummaryWeek.totalPoliciesCount / 3) * 2),
        redTo: policySummaryWeek.totalPoliciesCount,
        minorTicks: policySummaryWeek.totalPoliciesCount,
        majorTicks: ['0', policySummaryWeek.totalPoliciesCount],
        max: policySummaryWeek.totalPoliciesCount,
        animation: {
            duration: 1000,
            easing: 'out',
        },
    };
    var historyChart = new google.visualization.Gauge(document.getElementById('week_chart_div'));
    historyData.setValue(0, 1, policySummaryWeek.triggeredPoliciesCount);
    historyChart.draw(historyData, historyWeekOptions);

    var historyMonthData = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Last Month', policySummaryMonth.totalPoliciesCount]
    ]);
    var historyMonthOptions = {
        width: 400,
        height: 150,
        greenFrom: 0,
        greenTo: (policySummaryMonth.totalPoliciesCount / 3),
        yellowFrom: (policySummaryMonth.totalPoliciesCount / 3),
        yellowTo: ((policySummaryMonth.totalPoliciesCount / 3) * 2),
        redFrom: ((policySummaryMonth.totalPoliciesCount / 3) * 2),
        redTo: policySummaryMonth.totalPoliciesCount,
        minorTicks: policySummaryMonth.totalPoliciesCount,
        majorTicks: ['0', policySummaryMonth.totalPoliciesCount],
        max: policySummaryMonth.totalPoliciesCount,
        animation: {
            duration: 1000,
            easing: 'out',
        },
    };
    var historyMonthChart = new google.visualization.Gauge(document.getElementById('month_chart_div'));
    historyMonthData.setValue(0, 1, policySummaryMonth.triggeredPoliciesCount);
    historyMonthChart.draw(historyMonthData, historyMonthOptions);

    setInterval(function () {
        data.setValue(0, 1, Math.round(policySummary.totalPoliciesCount * Math.random()));
        chart.draw(data, options);
    }, 3000);
}
