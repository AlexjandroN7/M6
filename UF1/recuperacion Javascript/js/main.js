var black = '#000000';


function start() {
    var table = "<table style=\"text-align:center; border-collapse:collapse;\">";
    var tableWidth = 50;

    for (var i = 1; i <= tableWidth; i++) {
        table += "<tr>";
        for (var j = 1; j <= tableWidth; j++) {
            table += "<td onmouseover=\"oscurecer(this)\"></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementsByTagName("body")[0].innerHTML = table;
}

function oscurecer(celda) {

    celda.style.backgroundColor = black;

};
