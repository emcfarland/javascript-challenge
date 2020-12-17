// from data.js
var tableData = data;

var tbody = d3.select("#table-area").select("tbody");

// YOUR CODE HERE!
data.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

