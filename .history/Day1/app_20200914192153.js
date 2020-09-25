// console.log(document) // DOM


// let col_name = ['Name', 'Prize', 'Qty', 'Total']

// let row_name = ['Prathmesh', 'Parag', 'Vaibhav', 'Siddiq']


// let table = document.getElementById('table')

// // Add Columns
// for (let i = 0; i < col_name.length; i++) {
//     let td = document.createElement('td')
//     td.style.border = '1px solid black'
//     td.textContent = col_name[i]
//     table.appendChild(td)
// }

// // Add Names rows
// for (let i = 0; i < row_name.length; i++) {
//     let tr = document.createElement('tr')
//     tr.textContent = row_name[i]
//     table.appendChild(tr)
// }



// //
// //homework day 1 - table with dynamic rows, columns name , price, qty and total





function AddRow() {
    var Name = document.sample.Name.value;
    var Prize = document.sample.Prize.value;
    var Qty = document.sample.Qty.value;
    var Total = document.sample.Total.value

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));


    td1.innerHTML = Name;
    td2.innerHTML = Prize;
    td3.innerHTML = Qty;
    td4.innerHTML = Total;

    document.getElementById('table').appendChild(tr);
}