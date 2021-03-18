var user_flow_chart_ctx;
var user_flow_chart;
var age_chart_ctx;
var age_chart;
var gender_chart_ctx;
var gender_chart;
var engagement_chart_ctx;
var engagement_chart;
var attention_chart_ctx;
var attention_chart;
var presence_along_video_with_engagement_chart_ctx;
var presence_along_video_with_engagement_chart;
var emotions_chart_ctx;
var emotions_chart;
var valence_chart_ctx;
var valence_chart;
var emotions_along_video_with_valence_chart_ctx;
var emotions_along_video_with_valence_chart_chart;

 user_flow_chart_ctx = document.getElementById('user_flow_chart').getContext('2d');
 user_flow_chart = new Chart(user_flow_chart_ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)'
                
            ],
            borderColor: 
                'rgba(99, 255, 132, 1)'
                
            ,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// For age  chart
 age_chart_ctx = document.getElementById('age_chart').getContext('2d');

 age_chart = new Chart(age_chart_ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [10, 20, 30],
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
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    },
    
    options: {
        //cutoutPercentage: 40,
     responsive: true,
 
   }
});


// For gender  chart
 gender_chart_ctx = document.getElementById('gender_chart').getContext('2d');

 gender_chart = new Chart(gender_chart_ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 20, 30],
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
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    },
    
    options: {
        //cutoutPercentage: 40,
     responsive: true,
 
   }
});



//for engagement chart
 engagement_chart_ctx = document.getElementById('engagement_chart').getContext('2d');
 engagement_chart = new Chart(engagement_chart_ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


// For attention  chart
 attention_chart_ctx = document.getElementById('attention_chart').getContext('2d');

 attention_chart = new Chart(attention_chart_ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [10, 20, 30],
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
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    },
    
    options: {
        //cutoutPercentage: 40,
     responsive: true,
 
   }
});


//for presence_along_video_with_engagement_chart 
 presence_along_video_with_engagement_chart_ctx = document.getElementById('presence_along_video_with_engagement_chart').getContext('2d');
 presence_along_video_with_engagement_chart = new Chart(presence_along_video_with_engagement_chart_ctx, {
    type: 'bar',
   
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            backgroundColor:'rgba(75, 192, 192, 1)',
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            yAxisID: 'A',
            order: 2,
            
        }, {
            label: 'Line Dataset',
            data: [50, 30, 50, 50],
            
            borderColor: [
                'rgba(0, 255, 90,1)'
                
            ],
            backgroundColor: [
                'rgba(255, 255, 255, 0)',
              
            ],
            yAxisID: 'B',

            // Changes this dataset to become a line
            type: 'line',
            order: 1
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        //cutoutPercentage: 40,
     responsive: true,
     maintainAspectRatio:false,
     scales: {
        yAxes: [{
          id: 'A',
          type: 'linear',
          position: 'left',
        }, {
          id: 'B',
          type: 'linear',
          position: 'right',
          ticks: {
            max: 100,
            min:1
          }
        }]
      }
 
   }
});



// For emotions  chart
 emotions_chart_ctx = document.getElementById('emotions_chart').getContext('2d');

 emotions_chart = new Chart(emotions_chart_ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 20, 30],
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
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    },
    
    options: {
        //cutoutPercentage: 40,
     responsive: true,
 
   }
});



//for valence chart
 valence_chart_ctx = document.getElementById('valence_chart').getContext('2d');
 valence_chart = new Chart(valence_chart_ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


//for emotions_along_video_with_valence_chart 
 emotions_along_video_with_valence_chart_ctx = document.getElementById('emotions_along_video_with_valence_chart').getContext('2d');
 emotions_along_video_with_valence_chart_chart = new Chart(emotions_along_video_with_valence_chart_ctx, {
    type: 'bar',
   
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            backgroundColor:'rgba(75, 192, 192, 1)',
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            yAxisID: 'A',
            order: 2,
            
        }, {
            label: 'Line Dataset',
            data: [50, 30, 50, 50],
            
            borderColor: [
                'rgba(0, 255, 90,1)'
                
            ],
            backgroundColor: [
                'rgba(255, 255, 255, 0)',
              
            ],
            yAxisID: 'B',

            // Changes this dataset to become a line
            type: 'line',
            order: 1
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        //cutoutPercentage: 40,
        esponsive: true,
        maintainAspectRatio:false,
     scales: {
        yAxes: [{
          id: 'A',
          type: 'linear',
          position: 'left',
        }, {
          id: 'B',
          type: 'linear',
          position: 'right',
          ticks: {
            max: 100,
            min:1
          }
        }]
      }
 
   }
});

$(document).ready(function() {
    jQuery.ajax({
        async: true,
        url: "https://mioraapi.emojlab.com:5002/emojWebeTrack/databaseApi/userflow/v1.0",
        timeout: 5000,
        type: 'post',
        data: {videoId:""},
        dataType: 'json',
        error: function(e){
            console.log("fail sending rating");
            

        },
        success: function(json) {
            
            console.log(json);
        }
     }, 'json');
    
    console.log("ciao");
 });