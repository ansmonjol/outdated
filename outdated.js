// var json

// function loadJSON(callback) {
//   var xobj = new XMLHttpRequest()
//   xobj.overrideMimeType('application/json')
//   xobj.open('GET', 'outdated.json', true) // Replace 'my_data' with the path to your file
//   xobj.setRequestHeader('Access-Control-Allow-Origin', '*')
//   xobj.onreadystatechange = function() {
//     if (xobj.readyState == 4 && xobj.status == '200') {
//       // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//       callback(xobj.responseText)
//     }
//   }
//   xobj.send(null)
// }

const json = fetch('http://localhost:3000/public/outdated.json')
  .then(function(response) {
    console.log('response', response)
    return response.json()
  })
  .then(function(json) {
    console.log('json', json)
    return json
  })

var app4 = new Vue({
  el: '#app',
  data: {
    datas: json
  }
})
