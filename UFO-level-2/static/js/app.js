// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var tbody = d3.select("#table-area").select("tbody");
button.on("click", filterSightings);

function filterSightings() {
    d3.event.preventDefault();

    var dateInputValue = d3.select("#datetime").property("value");
    var cityInputValue = d3.select("#city").property("value");
    var stateInputValue = d3.select("#state").property("value");
    var countryInputValue = d3.select("#country").property("value");
    var shapeInputValue = d3.select("#shape").property("value");

    var inputValues = [
        dateInputValue,
        cityInputValue,
        stateInputValue,
        countryInputValue,
        shapeInputValue
    ];

    var filteredData = tableData;
    var filterKeys = Object.keys(tableData[0]).slice(0,5);

    for (i=0; i<inputValues.length; i++) {
        if (inputValues[i] !== "") {
            var partialFilter = filteredData.filter(sighting => inputValues[i].toLowerCase() == sighting[filterKeys[i]]);
            console.log(partialFilter);
            filteredData = partialFilter;
        }
    };

    addTable(filteredData);
}

function addTable(sightings) {
    tbody.selectAll("tr").remove();
    sightings.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

addTable(tableData);