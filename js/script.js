var ctx = document.getElementById('myChart').getContext('2d');
// criar o grafico.

var array = [];

var value = 1;

function graphic(data) {
  
  var chart = new Chart(ctx, {
      type: 'line',

      data: {
          labels: ['02/2020', '03/2020', '04/2020', '05/2020', '06/2020', '07/2020', '08/2020'],
          datasets: [{
              label: 'Dollar',
              backgroundColor: 'transparent',
              borderColor: 'blue',
              data: data,
              borderColor: '#f1f1f1',
              borderWidth: 4
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

  setInterval( ()=> {
    // console.log(apiCash())
    array.push(apiCash());
    graphic(array);
    value +=1;
    console.log(array)

  }, 5000);



// listar a API.
var burl = "https://economia.awesomeapi.com.br";
var query = "/json/all/USD-BRL";
function apiCash() {

var url = burl + query;

var moeda = fetch(url)
.then((response) => {
  response.json()
 .then(data => 
   
   console.log (data.USD.bid)
})
.catch(e => console.log(e))


}


// .then((data) => {

//   return data;
// })



// fetch(url)
// .then( (response) => {
//   // console.log(Response.json())
//   return response
// }).then((data) => {
//   console.log(data)
// })


// Aplicar API no grafico

