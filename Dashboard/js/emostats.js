jQuery(document).ready(function() {
    var averageFocusedPeople = Math.round((67 / 11)*100);
    var averagePresentPeople = Math.round((85 / 12)*100);
    var percentageSatisfactionValues = [Math.round(11*100), Math.round(10*100), 100-(Math.round(3*100)+Math.round(5*100))];

    drawAttentionPie(averageFocusedPeople);
    drawPresencePie(averagePresentPeople);
			
	drawSatisfactionPie(percentageSatisfactionValues);
    var valenceValue=[];
    valenceValue[0] =2;
    valenceValue[1] =3
	drawValenceChart(valenceValue);
	
	
});


function drawAttentionPie(pieAttention){

	var percentageAttentionData = [pieAttention, 100-pieAttention];	

    var genderctx = document.getElementById("attention-piechart").getContext('2d');
    chart=new Chart(genderctx, {
        type: 'doughnut',
        data: {
            labels: ["Valore Medio Percentuale d'Attenzione", "Valore Medio Percentuale di Distrazione"],
            datasets: [{
                label: '# of Votes',
                data: percentageAttentionData,
                backgroundColor: [
				   '#DF2D33',
                   '#0076AF',

                ],
                borderColor: [
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)'
                ],
                borderWidth: 5
            }]
        },
        options: {
            cutoutPercentage: 40,
            responsive: false,
            maintainAspectRatio: false,
            padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
			},
            legend: {
                position: 'bottom',
				labels: {
					lineDashOffset: 90,
                	lineWidth: 30,
						boxWidth: 12,
						fontSize:14
					}
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
			plugins: {
		  datalabels: {
				formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum).toFixed(1);
                if(percentage>0){return percentage + "%";} else{return null;}
                
            	
            },
				  	color: '#000000',
				  	clamp:true,
					 display: 'auto',
					 align: 'center',
					 anchor: 'center',
					 font: {
          			weight: 'bold',
          			size: 15,
        				}
				  }
			}
        }

    });
}

function drawPresencePie(piePresence){

	var percentagePresenceData = [piePresence, 100-piePresence];	

    var genderctx = document.getElementById("presence-piechart").getContext('2d');
    chart=new Chart(genderctx, {
        type: 'doughnut',
        data: {
            labels: ["Valore Medio Percentuale di Presenze", "Valore Medio Percentuale di Assenze"],
            datasets: [{
                label: '# of Votes',
                data: percentagePresenceData,
                backgroundColor: [
				   '#FF7F32',
                   '#009F3B'

                ],
                borderColor: [
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)'
                ],
                borderWidth: 5
            }]
        },
        options: {
            cutoutPercentage: 40,
            responsive: false,
            maintainAspectRatio: false,
            padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
			},
            legend: {
                position: 'bottom',
				labels: {
					lineDashOffset: 90,
                	lineWidth: 30,
						boxWidth: 12,
						fontSize:14
					}
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
			plugins: {
		  datalabels: {
				formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum).toFixed(1);
                if(percentage>0){return percentage + "%";} else{return null;}
                
            	
            },
				  	color: '#000000',
				  	clamp:true,
					 display: 'auto',
					 align: 'center',
					 anchor: 'center',
					 font: {
          			weight: 'bold',
          			size: 15,
        				}
				  }
			}
        }

    });
}


function drawSatisfactionPie(pieSatisfaction){


    var genderctx = document.getElementById("satisfaction-piechart").getContext('2d');
    chart=new Chart(genderctx, {
        type: 'doughnut',
        data: {
            labels: ["Percentuale di soddisfazione", "Percentuale di neutralità", "Percentuale di insoddisfazione"],
            datasets: [{
                label: '# of Votes',
                data: pieSatisfaction,
                backgroundColor: [
                    '#5EB882',
                    '#ccffff',
					'#9900FF'
                ],
                borderColor: [
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)',
					'rgba(255,255,255,1)'
                ],
                borderWidth: 5
            }]
        },
        options: {
            cutoutPercentage: 40,
            responsive: false,
            maintainAspectRatio: false,
            padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
			},
            legend: {
                position: 'bottom',
				labels: {
					lineDashOffset: 90,
                	lineWidth: 30,
						boxWidth: 12,
						fontSize:14
					}
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
			plugins: {
		  datalabels: {
				formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum).toFixed(1);
                if(percentage>0){return percentage + "%";} else{return null;}
                
            	
            },
				  	color: '#000000',
				  	clamp:true,
					 display: 'auto',
					 align: 'center',
					 anchor: 'center',
					 font: {
          			weight: 'bold',
          			size: 15,
        				}
				  }
			}
        }

    });
}

function drawValenceChart(valenceResults) {
					
	var arrX=[];
	var arrY=[];

	for (i=0; i<valenceResults.length; i++) { 
	   var yy=valenceResults[i];
	   //x=Math.trunc(list1['timestamp'][i]);
	   arrX.push(i);
	   arrY.push(yy);

	}
	
	var ctx = document.getElementById('valence-chart');
	var valenceChart = new Chart(ctx, {
		marginTop: 25,
		marginBottom: 25,
		type: 'line',
		data: {
			labels: arrX,
			datasets: [{
					label: "Valence",
					backgroundColor: 'rgb(135,206,250)',
					borderColor: 'rgb(0,191,255)',
					data: arrY,
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						suggestedMin: -100,
						suggestedMax: 100,
						
					}
				}],
				xAxes: [{
					ticks: {
						maxTicksLimit:20,
						
					}
				}]
			},
			plugins: {
				  datalabels: {
					 display: false,
					 align: 'center',
					 anchor: 'center'
				  }
			},
			legend: {
                position: 'bottom',
				labels: {
						boxWidth: 12
					}
            },
}
	
	});

}
