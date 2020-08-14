var ctx = document.getElementById('myChart').getContext('2d');

const form = document.getElementById("inputForm");

var moeda = document.getElementById('moeda');

var intialDay = document.getElementById('day');
intialDay.value = 30;

apiCash(moeda.value, intialDay.value);
form.addEventListener("submit", e => {
  e.preventDefault();
  apiCash(moeda.value, intialDay.value);

});










// listar a API.

async function apiCash(coin, days) {
  var burl = "https://economia.awesomeapi.com.br";
  var query = `/json/daily/${coin}/${days}`;
  var url = burl + query;
  var results = [];
  var label = [];
  
  await fetch(url)
    .then(response => { response.json()
      .then((data) => {
        data.forEach(element => {
          results.push(Number(element.bid));
          label.push('');
      });

    graphic(results, label);

    }).catch(e => console.log(e))

  }).catch(e => console.log(e))

  }

function graphic(data, label) {
  var chart = new Chart(ctx, {
      type: 'line',

      data: {
          labels: label,
          datasets: [{
              label: 'Dollar',
              backgroundColor: 'transparent',
              borderColor: 'blue',
              data: data,
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