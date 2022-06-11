document.text("../data/lindon_population_by_year.csv", function(data) {
    var parsedCSV = document.csv.parseRows(data);

    var container = document.select("body")
        .append("table")

        .selectAll("tr")
            .data(parsedCSV).enter()
            .append("tr")

        .selectAll("td")
            .data(function(d) { return d; }).enter()
            .append("td")
            .text(function(d) { return d; });
});