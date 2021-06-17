/* global initSqlJs createData log getInput clearLog */

var db;

log('Welcome to a simple application to learn the basics of SQL. Type your query below and hit "Run SQL"')

initSqlJs()
    .then(function (SQL) {
        //Create the database
        db = new SQL.Database();

        db.run("CREATE TABLE customer (customer_id INTEGER, zip VARCHAR, city VARCHAR, accepts_marketing INTEGER);");
        db.run("CREATE TABLE order_head (order_id VARCHAR, customer_id INTEGER, order_date DATE, financial_status VARCHAR, payment_type VARHCAR);");
        db.run("CREATE TABLE order_item (order_id VARCHAR, sku VARCHAR, product_title DATE, vendor VARCHAR, price REAL, quantity INTEGER);");

        createData(db);
    })
    .catch(e => {
        log(e.message);
    });

function runSQL() {
    let statement = editor.getValue();

    try {
        var stmt = db.prepare(statement);
        stmt.getAsObject();
    } catch (e) {
        log("Error " + e.message);
        return;
    }

    let rows = [];
    while (stmt.step()) {
        var row = stmt.getAsObject();

        //log(JSON.stringify(row));
        rows.push(row);
    }

    log("Query returned >" + rows.length + "< rows")

    createResultTable(rows);

    stmt.free();
}

function createResultTable(rows) {
    let table = document.createElement("table");
    table.classList += "table table-bordered table-dark";

    for (let i = 0; i < rows.length; i++) {
        // First row, create header
        if (i === 0) {
            let header = createTableHeader(rows[i]);
            table.appendChild(header);
        }

        let tableRow = document.createElement("tr");

        for (var prop in rows[i]) {
            if (Object.prototype.hasOwnProperty.call(rows[i], prop)) {
                let tableCol = document.createElement("td");

                tableCol.innerHTML = rows[i][prop] === null ? "<i>null</i>" : rows[i][prop];

                tableRow.appendChild(tableCol);
            }
        }

        table.appendChild(tableRow);
    }

    document.querySelector("#queryResult").innerHTML = "";
    document.querySelector("#queryResult").append(table);
}

function createTableHeader(row) {
    let tableHeader = document.createElement('thead')
    let tableHeaderRow = document.createElement('tr')

    for (var prop in row) {
        if (Object.prototype.hasOwnProperty.call(row, prop)) {
            let tableHeaderCol = document.createElement("th");
            tableHeaderCol.textContent = prop;
            tableHeaderRow.appendChild(tableHeaderCol);
        }
    }

    tableHeader.appendChild(tableHeaderRow)
    return tableHeader;
}


/* Shortcut functions for common SQL */
function showTables() {
    setEditorContent("-- SQL command to display tables definitions");
    setEditorContent("\nSELECT name, sql FROM sqlite_master WHERE type='table'");
}