// Web Design
var webDesignChart = new Chart(document.getElementById('web-design-chart'), {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [90, 10],
        backgroundColor: ['#fdb157', '#eaeaea'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '80%',
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false
      }
    }
  });
  
  // HTML5
  var html5Chart = new Chart(document.getElementById('html5-chart'), {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [80, 20],
        backgroundColor: ['#9473e6', '#eaeaea'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '80%',
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false
      }
    }
  });
  
  // CSS3
  var css3Chart = new Chart(document.getElementById('css3-chart'), {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [85, 15],
        backgroundColor: ['#bdecf6', '#eaeaea'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '80%',
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false
      }
    }
  });
  
  // JavaScript
  var javascriptChart = new Chart(document.getElementById('javascript-chart'), {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [50, 50],
        backgroundColor: ['#ffbcaa', '#eaeaea'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '80%',
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false
      }
    }
  });