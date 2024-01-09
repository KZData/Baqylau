// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Function to convert CSV data to HTML table
    function csvToTable(csvData) {
        const rows = csvData.split('\n');
        let tableHTML = '<table>';

        rows.forEach(row => {
            tableHTML += '<tr>';
            const columns = row.split(',');

            columns.forEach(column => {
                tableHTML += `<td>${column}</td>`;
            });

            tableHTML += '</tr>';
        });

        tableHTML += '</table>';
        return tableHTML;
    }

    // Fetch the CSV file and display the data in HTML
    fetch('Data/Transformed_MAIN.csv') // Adjust the path if needed
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('table-container');
            tableContainer.innerHTML = csvToTable(data);
        })
        .catch(error => {
            console.error('Error fetching the CSV file:', error);
        });
});
