var ctx = document.getElementById('myChart').getContext('2d');

var array = [];

function graphic(data, label) {
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
var label = 0;
var ttt = []
ttt.push(1, 5.3825, 777, 5.4378, 5.4374, 5.3291, 5.2902, 5.289, 5.3205, 5.2215, 5.222, 5.155, 5.17, 5.1627, 5.149);
console.log(ttt);
console.log(ttt[2]);

async function apiCash() {

var url = burl + query;

await fetch(url)
.then(response => { response.json()
 .then((data) => {
       data.forEach(element => {
      //  console.log(element.bid);
        label = Number(element.bid);
        results.push(label);

     
   });
  console.log(results);
   
 }).catch(e => console.log(e))

}).catch(e => console.log(e))

}



// function getValue(value) {
//   results.push(value);
// }







console.log(results)
apiCash();
graphic(results, label);

  // setInterval( ()=> {
  //   // console.log(apiCash())
  //   array.push(apiCash());
  //   graphic(array);
  //   value +=1;
  //   console.log(array)

  // }, 5000);