const base64 = content => window.btoa(unescape(encodeURIComponent(content)))

const data2excel = (column, data, title, filename = 'download.xlsx') => {
  let str = '<tr>'
  if(title) {
    const type = typeof title
    if(type === 'string') {
      str+=`<td>${title}</td></tr><tr>`
    }else {
      str+=`<td style="${title.style}">${title.name}</td></tr><tr>`
    }
  }
  for(let i = 0; i < column.length; i++) {
    str+=`<td style="${column[i].style}">${column[i].name}</td>`
  }
  str+='</tr>'
  for(let j = 0; j < data.length; j++ ){
    str+=`<tr style="${data[j].style}">`
    console.log(str)
    for(let item in data[j]){
      if(item !== 'style') {
        str+=`<td>${data[j][item] + '\t'}</td>`;    
      }
    }
    str+='</tr>'
  }
  const uri = 'data:application/vnd.ms-excel;base64,';
  var template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
    xmlns:x="urn:schemas-microsoft-com:office:excel" 
    xmlns="http://www.w3.org/TR/REC-html40">
    <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
    <x:Name>${filename}</x:Name>
    <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
    </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
    </head><body><table>${str}</table></body></html>`;
  let a = document.createElement('a')
  a.href = uri + base64(template)
  a.download = filename
  a.click()
}

export { data2excel }