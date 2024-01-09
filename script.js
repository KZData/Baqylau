document.addEventListener('DOMContentLoaded', () => {
    // Function to convert JSON data to HTML table
    function jsonToTable(jsonData) {
        const data = JSON.parse(jsonData);
        let tableHTML = '<table>';

        data.forEach(item => {
            tableHTML += '<tr>';

            Object.values(item).forEach(value => {
                tableHTML += `<td>${value}</td>`;
            });

            tableHTML += '</tr>';
        });

        tableHTML += '</table>';
        return tableHTML;
    }

    // Fetch the JSON file and display the data in HTML
    fetch('Data/transformed.json') // Adjust the path if needed
        .then(response => response.text())
        .then(data => {
            const tableContainer = document.getElementById('table-container');
            tableContainer.innerHTML = jsonToTable(data);
        })
        .catch(error => {
            console.error('Error fetching the JSON file:', error);
        });
});
