const canvas =  document.getElementById('bieuDo');


const config = {
 type: 'bar',
 data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 3
    }]
  },
}

new Chart(canvas, config);