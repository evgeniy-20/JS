function createTableByArr(array) {
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";

    array.forEach(rowData => {
        const row = document.createElement("tr");
        rowData.forEach(cellData => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            cell.style.border = "1px solid black";
            cell.style.textAlign = "center";
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    return table;
}

let div = document.querySelector('#elem');
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let table = createTableByArr(arr);

div.appendChild(table);
