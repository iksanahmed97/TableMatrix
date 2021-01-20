let size=0;
function generateSoal(nilaimatrix){
    size=nilaimatrix;
    createtable(nilaimatrix,"matrix1");
    createtable(nilaimatrix,"matrix2");
}

function createtable(sizematrix, namamatrix){
let tableHtml = "";

if (namamatrix === "matrix2"){
    tableHtml += `<p>Ditambah dengan matrix 2 </p><br>`;
}
tableHtml += "<table>";
//baris
for(let i=0 ; i < sizematrix; i++){
    tableHtml = tableHtml + "<tr>"
//kolom
for (let j =0; j < sizematrix;j++){
tableHtml = tableHtml + `<td><input type="text" id="${namamatrix+i+j}" /></td>`;
}
tableHtml = tableHtml + "</tr>"

}
tableHtml += "</table>";

if(namamatrix ==="matrix2"){
    tableHtml += `<p><button onclick="calculation()">Kalkulasi</button><br>`;
}

document.getElementById(namamatrix).innerHTML = tableHtml;
}


function calculation(){
    let tableHtml = "";
    tableHtml += "<table>";
    
    //baris
    for(let i=0 ; i < size; i++){
        tableHtml = tableHtml + "<tr>"
    //kolom
    for (let j =0; j < size;j++){
let nilaiTambah = parseInt (document.getElementById("matrix1"+i+j).value) + parseInt (document.getElementById("matrix2"+i+j).value) ;
        tableHtml = tableHtml + `<td><input type="text" value="${nilaiTambah}" /></td>`;
    }
    tableHtml = tableHtml + "</tr>"
    
    }
    tableHtml += "</table>";
document.getElementById("matrixHasil").innerHTML = tableHtml;
}

