const API_KEY = 'YOUR_API_KEY'; // Substitua com sua API Key
const SPREADSHEET_ID = '1HheOwOtQPNJcf_wt1T9lwYi4_GAhatQCW5I16KHMc9g'; // Substitua com o ID da sua planilha
const RANGE = 'Sheet1!A1:D10'; // Ajuste para o intervalo desejado na sua planilha

function fetchSheetData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

    $.getJSON(url, function(data) {
    const values = data.values;
    let tableHtml = '<table border="1">';
    values.forEach(row => {
        tableHtml += '<tr>';
        row.forEach(cell => {
        tableHtml += `<td>${cell}</td>`;
        });
        tableHtml += '</tr>';
    });
    tableHtml += '</table>';

    $('#tableContainer').html(tableHtml);
    });
}

$(document).ready(function() {
    fetchSheetData();
});