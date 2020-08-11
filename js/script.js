// criar o grafico.

var array = [];

var value = 1;

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    data: {
        labels: ['02/2020', '03/2020', '04/2020', '05/2020', '06/2020', '07/2020', '08/2020'],
        datasets: [{
            label: 'Dollar',
            backgroundColor: 'transparent',
            borderColor: 'blue',
            data: array,
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

  setInterval( ()=> {
    array.push(value);
    chart.dataset
    value +=1;
    console.log(array)

  }, 2000);


  

// colocar dados básicos pra ver.

// injetar um dado de cada vez.

// listar a API.

