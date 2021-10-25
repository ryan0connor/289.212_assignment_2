    var ctx = document.getElementById('chart').getContext('2d');
var pollChart = new Chart(ctx, {
   
    type: 'doughnut',
    data: {
        labels: ['Lewis Hamilton', 'Valtteri Bottas', 'Max Verstappen', 'Sergio Perez', 'Daniel Ricciardo',
                'Carlos Sainz', 'Alexander Albon', 'Charles Leclerc', 'Lando Norris', 'Pierre Gasly', 'Lance Stroll',
                'Esteban Ocon', 'Sebastian Vettel', 'Daniil Kvyat', 'Nico Hulkenberg', 'Kimi Räikkönen', 'Antonio Giovinazzi',
                'George Russell', 'Romain Grosjean', 'Kevin Magnussen', 'Nicholas Latifi', 'Jack Aitken', 'Pietro Fittipaldi'],
      
            datasets: [
                {
                    label: 'Total points of the season',
                    data: [347, 223, 214, 125, 119, 105, 105, 98, 97, 75, 75, 62, 33, 32, 10, 4, 4, 3, 2, 1, 0, 0, 0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                cutout: 50,
                animation: {
                    animateScale: true     
                }
                
            }
        });





    const years = document.getElementById('years');
        years.addEventListener('change', different_years);
    function different_years(){
        const label = years.options[years.selectedIndex].test;
        graph.data.datasets[0].label = label;
        graph.data.datasets[0].data = years.value.split(',');

        graph.update();
       
        console.log(years.value);
    }