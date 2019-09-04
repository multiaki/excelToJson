var xlsx1 = require("xlsx");

/**
 * @return {string}
 */
exports.Exceltojson = function (FileIn, schema) {

  const wb = xlsx1.readFile(FileIn);
  const ws = wb.Sheets["layer1"];

  const range = xlsx1.utils.decode_range(ws['!ref']);

  let schemaArr = [];
  let n = schema.length;
  j = 0;
  for (let i = 1; i <= n; i++) {
    if (schema.charAt(i - 1) !== ' ') {
      schemaArr[j] = schema.charAt(i - 1);
      j = j + 1;
    }
  }

  var ln = schemaArr.length;
  var row = 0;
  var TotalCol = schemaArr.reduce((count, schema) => count += schema === 'c' ? 1 :  schema === 'o' ? 1 : schema === 'o' ? 1 : 0 , 0);
  var colArr = [];
/*
  for (var k = 1; k <= ln; k++) {
    if (k + 3 < ln) {
      if (schemaArr[k] === 'c' && schemaArr[k + 1] === 'o' && schemaArr[k + 2] === 'l') {
        colArr[TotalCol] = parseInt(schemaArr[k + 3]);
        TotalCol = TotalCol + 1;
      }
    }
  }*/
  let data = " { ";
  for (let rowNum = 0; rowNum <= range.e.r - 1; rowNum++) {
    var b = rowNum;

    row = row + 1;
    for (let m = 0; m < TotalCol-1; m++) {
      const header = ws[xlsx1.utils.encode_cell({r: 0, c: colArr[m]})];
      data += header.v + " : ";
      const dataval = ws[xlsx1.utils.encode_cell({r: row, c: colArr[m]})];
      data += "'" + dataval.v + "' ,";
    }
    data += " }, \n";
    m = b;
  }
  data += "] }";
  return data;
}


