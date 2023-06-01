// Web Design Chart
//Habilidades grafico
var webDesignChart = new Chart(document.getElementById('web-design-chart'), {
    type: 'doughnut',
    data: {
      labels: ['Web Design'],
      datasets: [{
        data: [90],
        backgroundColor: ['#fdb157']
      }]
    },
    options: {
      cutoutPercentage: 80,
      legend: {
        display: false
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: '#fff',
          fontSize: 12,
          precision: 0
        }
      }
    }
  });

  var html5Chart = new Chart(document.getElementById('html5-chart'), {
    type: 'doughnut',
    data: {
      labels: ['HTML5'],
      datasets: [{
        data: [80],
        backgroundColor: ['#9473e6']
      }]
    },
    options: {
      cutoutPercentage: 80,
      legend: {
        display: false
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: '#fff',
          fontSize: 12,
          precision: 0
        }
      }
    }
  });

  var css3Chart = new Chart(document.getElementById('css3-chart'), {
    type: 'doughnut',
    data: {
      labels: ['CSS3'],
      datasets: [{
        data: [85],
        backgroundColor: ['#bdecf6']
      }]
    },
    options: {
      cutoutPercentage: 80,
      legend: {
        display: false
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: '#fff',
          fontSize: 12,
          precision: 0
        }
      }
    }
  });

  var javascriptChart = new Chart(document.getElementById('javascript-chart'), {
    type: 'doughnut',
    data: {
      labels: ['JavaScript'],
      datasets: [{
        data: [60],
        backgroundColor: ['#ffbcaa']
      }]
    },
    options: {
      cutoutPercentage: 80,
      legend: {
        display: false
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: '#fff',
          fontSize: 12,
          precision: 0
        }
      }
    }
  });
//  fim do grafico

  
    // Initialize Carousel
    $('.carousel').carousel();
  