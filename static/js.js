var ctx = document.getElementById('chart').getContext('2d');
var pollChart = new Chart(ctx, {

        type: 'doughnut',
        data: {
            labels: ['Max Verstappen', 'Lewis Hamilton', 'Valtteri Bottas', 'Lando Norris', 'Sergio Perez',
                 'Carlos Sainz', 'Charles Leclerc', 'Daniel Ricciardo', 'Pierre Gasly', 'Fernando Alonso', 'Esteban Ocon',
                 'Sebastian Vettel', 'Lance Stroll', 'Yuki Tsunoda', 'George Russell', 'Nicholas Latifi', 'Kimi Räikkönen',
                 'Antonio Giovinazzi', 'Mick Schumacher', 'Robert Kubica', 'Nikita Mazepin'],
            datasets: [{
                label: 'Total points of the season',
                data: [262.5, 256.5, 177, 145, 145, 116.5, 116, 95, 74, 58, 46, 35, 26, 18, 16, 7, 6, 1, 0, 0, 0],
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




    function load_data(query) {
        $.ajax({
            url:"fetch",
            method:"POST",
            data:{query:query},
            success:function(data) {
                $('#result').html(data);
            }
        });
    }


    var names = new Array('2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011');
$(".btn").bind("click",function(e) {
    var btn = this.id.split('_');
    var data=( show_mssg(btn[1]) );
    load_data(data);
});



function show_mssg(id) {
    return names[id];
}