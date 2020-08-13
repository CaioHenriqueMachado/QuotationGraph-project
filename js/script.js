var ctx = document.getElementById('myChart').getContext('2d');

var array = [];

function graphic(data, label) {
  console.log(data.value);
  var chart = new Chart(ctx, {
      type: 'line',

      data: {
          labels: ['', '', '', '', '', '', '','', '', '','','', '', ''],
          datasets: [{
              label: 'Dollar',
              backgroundColor: 'transparent',
              borderColor: 'blue',
              data: data,
              // data: [5.4272, 5.3825, 5.4852, 5.4378, 5.4374, 5.3291, 5.2902, 5.289, 5.3205, 5.2215, 5.222, 5.155, 5.17, 5.1627, 5.149],
              borderColor: '#f1f1f1',
              borderWidth: 4,
              tension: 0.3,
              radius: 1.7,
              border: 1.5,
              angle:0,
          }]
      },
      options: {
          scales: {
            yAxes: [{
                ticks: {
                    fontColor: '#fff',
                    zeroLineWidth: 1
                }
            }]
        },
      },

      legend: {

        labels: {
          fontColor: "#eee",
          fontSize: 30,
          fontStyle: "bold",
          borderColor: '#f1f1f1'

        } 
      },

    });
  }



// listar a API.
var burl = "https://economia.awesomeapi.com.br";
var query = "/json/daily/USD-BRL/15";
var results = [];
var label = [];
var ttt = []
// ttt.push(1, 5.3825, 5.4852, 5.4378, 5.4374, 5.3291, 5.2902, 5.289, 5.3205, 5.2215, 5.222, 5.155, 5.17, 5.1627, 5.149);
var x = [];
// console.log(ttt)
function apiCash() {

var url = burl + query;

var moeda = fetch(url)
.then((response) => {
  response.json()
 .then(data => 
   
  x.push(data.map(data => {
    console.log(data.bid);
    let value = Number(data.bid);
    results.push(value);
    label.push('')
    return data.bid;
  }))
  
)
.catch(e => console.log(e))
 })
}


console.log(x);
console.log('s')
console.log(results);
apiCash();
graphic(results, label);

  // setInterval( ()=> {
  //   // console.log(apiCash())
  //   array.push(apiCash());
  //   graphic(array);
  //   value +=1;
  //   console.log(array)

  // }, 5000);