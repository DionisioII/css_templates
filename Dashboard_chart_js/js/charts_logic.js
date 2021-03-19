var endpoint_base = "https://mioraapi.emojlab.com:5002/emojWebeTrack/databaseApi/";
var event_list_api = "selectVideo/v1.0";
var user_flow_chart_api = "userflow/v1.0";
var attention_chart_api = "attentionPie/v1.0";
var gender_chart_api = "genderPie/v1.0";
var age_chart_api = "agePie/v1.0";
var emotions_distribution_chart_api = "emotionsDistribution/v1.0";
var emotions_chart_api = "emotionsPie/v1.0";

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
var emotions_along_video_with_valence_chart;

var postRequestdata = {dataFrom: '2020-04-05', dataTo:'2022-04-05'};

var selectVideo;
var dateFromInput;
var dateToInput;




$(document).ready(function() {
    getVideoList();
    
    initialize_user_flow_chart();
    initialize_age_chart();
    initialize_gender_chart();
    
    [videolabels,engagementValues,valenceValues,
    neutralValues,joyValues,surpriseValues,angerValues,
    disgustValues,sadnessValues,fearValues,facesNumbers,
    stackedEmotions] = getEmotionDistributionValues();

    initialize_engagement_chart(videolabels, engagementValues)

    initialize_attention_chart();
    update_attention_chart();

    initialize_emotions_chart();
    initialize_valence_chart(videolabels,valenceValues);
    initialize_presence_along_video_with_engagement_chart(videolabels,facesNumbers,engagementValues);
    update_presence_along_video_with_engagement_chart(videolabels,facesNumbers,engagementValues);
    initialize_emotions_along_video_with_valence_chart(videolabels,valenceValues,neutralValues,joyValues,surpriseValues,angerValues,
        disgustValues,sadnessValues,fearValues);
    
    
    
   
 });

 function getVideoList(){
    jQuery.ajax({
        async: false,
        url: endpoint_base + event_list_api,
        timeout: 5000,
        type: 'post',
        data: postRequestdata,
        dataType: 'json',
        error: function(e){
            console.log("error event list");    
        },
        success: function(json) {
            response = json.Response
             console.log(response)
             selectVideo = $("#video_select");
             selectVideo.empty(); // remove old options
             $.each(response, function(key,value) {
             selectVideo.append($("<option></option>")
                    .attr("value", value).text(value));
                });
             selectVideo.on('change', function() {
                updateDiagrams();
              });

              dateFromInput = $("#from_date_input");
              dateToInput = $("#to_date_input");
              dateFromInput.on('change', function() {
                updateDiagrams();
              });
              dateToInput.on('change', function() {
                updateDiagrams();
              });

            
            
        
        }
     }, 'json');

 }

 function updateDiagrams(){
    var dateFROM = dateFromInput.val();
    var dateTO = dateToInput.val();
    var videoname = selectVideo.val();
    console.log(dateFROM);
    var dict = {}
    if(videoname !== null && videoname !== '') {
        dict['videoId']= videoname;
     }
    if(dateFROM !== null && dateFROM !== '') {
        dict['dataFrom']= dateFROM;
     }
    if(dateTO !== null && dateTO !== '') {
        dict['dataTO']= dateTO;
     }
     console.log(dict);
     postRequestdata = dict;

    initialize_user_flow_chart();
    initialize_age_chart();
    initialize_gender_chart();
    
    [videolabels,engagementValues,valenceValues,
    neutralValues,joyValues,surpriseValues,angerValues,
    disgustValues,sadnessValues,fearValues,facesNumbers,
    stackedEmotions] = getEmotionDistributionValues();

    initialize_engagement_chart(videolabels, engagementValues)

    initialize_attention_chart();
    update_attention_chart();

    initialize_emotions_chart();
    initialize_valence_chart(videolabels,valenceValues);
    initialize_presence_along_video_with_engagement_chart(videolabels,facesNumbers,engagementValues);
    update_presence_along_video_with_engagement_chart(videolabels,facesNumbers,engagementValues);
    initialize_emotions_along_video_with_valence_chart(videolabels,valenceValues,neutralValues,joyValues,surpriseValues,angerValues,
        disgustValues,sadnessValues,fearValues);
     
     

 }

 function initialize_user_flow_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        jQuery.ajax({
            async: false,
            url: endpoint_base + user_flow_chart_api,
            timeout: 5000,
            type: 'post',
            data: postRequestdata,
            dataType: 'json',
            error: function(e){
                console.log("error retrieving user flow data");    
            },
            success: function(json) {
                response = json.Response
                

                
                for( let element in response ){
                    
                    labels.push( response[element]['Date'])
                    data.push(parseInt( response[element]['Users']))
                    console.log(response[element]['Date']);
                }
            
            }
         }, 'json');
    }else{
        labels = chart_labels;
        data = chart_data;
    }
           
    user_flow_chart_ctx = document.getElementById('user_flow_chart').getContext('2d');
    user_flow_chart = new Chart(user_flow_chart_ctx, {
       type: 'line',
       data: {
           labels: labels,
           datasets: [{
               label: '# of Votes',
               data: data,
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
                      // beginAtZero: true
                   }
               }]
           }
       }
   });
 }

 function update_user_flow_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        jQuery.ajax({
            async: false,
            url: endpoint_base + user_flow_chart_api,
            timeout: 5000,
            type: 'post',
            data: postRequestdata,
            dataType: 'json',
            error: function(e){
                console.log("error retrieving user flow data");    
            },
            success: function(json) {
                response = json.Response
                

                
                for( let element in response ){
                    
                    labels.push( response[element]['Date'])
                    data.push(parseInt( response[element]['Users']))
                    console.log(response[element]['Date']);
                }
            
            }
         }, 'json');
    }else{
        labels = chart_labels;
        data = chart_data;
    }
           
    user_flow_chart_ctx = document.getElementById('user_flow_chart').getContext('2d');
    user_flow_chart.data.labels = labels; 
    user_flow_chart.data.data = data; 
    user_flow_chart.update();
 }

 function initialize_age_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        jQuery.ajax({
            async: false,
            url: endpoint_base + age_chart_api,
            timeout: 5000,
            type: 'post',
            data: postRequestdata,
            dataType: 'json',
            error: function(e){
                console.log("error retrieving user flow data");    
            },
            success: function(json) {
                response = json.Response[0]
                
                console.log(Object.keys(response));
                keys = Object.keys(response);
                
                for( let element in keys ){
                    console.log(response[keys[element]]);
                    if (keys[element] == "total_records")
                    continue;
                    labels.push( keys[element])
                    data.push(parseInt( response[keys[element]]))
                    
                }
            
            }
         }, 'json');
    }else{
        labels = chart_labels;
        data = chart_data;
    }

    // For age  chart
 age_chart_ctx = document.getElementById('age_chart').getContext('2d');

 age_chart = new Chart(age_chart_ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(153, 102, 13, 0.2)',
                'rgba(153, 12, 255, 0.2)',
                'rgba(113, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 102, 13, )',
                'rgba(153, 12, 255, )',
                'rgba(113, 102, 255, )'
            ],
            borderWidth: 1
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: labels
    },
    
    options: {
        //cutoutPercentage: 40,
     responsive: true,
 
   }
});
           
    
 }

 function update_age_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        jQuery.ajax({
            async: false,
            url: endpoint_base + age_chart_api,
            timeout: 5000,
            type: 'post',
            data: postRequestdata,
            dataType: 'json',
            error: function(e){
                console.log("error retrieving user flow data");    
            },
            success: function(json) {
                response = json.Response[0]
                
                console.log(Object.keys(response));
                keys = Object.keys(response);
                
                for( let element in keys ){
                    console.log(response[keys[element]]);
                    if (keys[element] == "total_records")
                    continue;
                    labels.push( keys[element])
                    data.push(parseInt( response[keys[element]]))
                    
                }
            
            }
         }, 'json');
    }else{
        labels = chart_labels;
        data = chart_data;
    }
           
    
    age_chart.data.labels = labels; 
    age_chart.data.data = data; 
    
 }

 function initialize_gender_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        jQuery.ajax({
            async: false,
            url: endpoint_base + gender_chart_api,
            timeout: 5000,
            type: 'post',
            data: postRequestdata,
            dataType: 'json',
            error: function(e){
                console.log("error retrieving user flow data");    
            },
            success: function(json) {
                response = json.Response[0]
                
                console.log(Object.keys(response));
                keys = Object.keys(response);
                
                for( let element in keys ){
                    console.log(response[keys[element]]);
                    if (keys[element] == "total_records")
                    continue;
                    labels.push( keys[element])
                    data.push(parseInt( response[keys[element]]))
                    
                }
            
            }
         }, 'json');
    }else{
        labels = chart_labels;
        data = chart_data;
    }

    // For age  chart
 // For gender  chart
 gender_chart_ctx = document.getElementById('gender_chart').getContext('2d');

 gender_chart = new Chart(gender_chart_ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: data,
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
        labels: labels
    },
    
    options: {
        //cutoutPercentage: 40,
     responsive: true,
 
   }
});
    
 }

 function update_gender_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        jQuery.ajax({
            async: false,
            url: endpoint_base + gender_chart_api,
            timeout: 5000,
            type: 'post',
            data: postRequestdata,
            dataType: 'json',
            error: function(e){
                console.log("error retrieving user flow data");    
            },
            success: function(json) {
                response = json.Response[0]
                
                console.log(Object.keys(response));
                keys = Object.keys(response);
                
                for( let element in keys ){
                    console.log(response[keys[element]]);
                    if (keys[element] == "total_records")
                    continue;
                    labels.push( keys[element])
                    data.push(parseInt( response[keys[element]]))
                    
                }
            
            }
         }, 'json');
    }else{
        labels = chart_labels;
        data = chart_data;
    }
           
    
    gender_chart.data.labels = labels; 
    gender_chart.data.data = data; 
    
 }

 function initialize_attention_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        jQuery.ajax({
            async: false,
            url: endpoint_base + attention_chart_api,
            timeout: 5000,
            type: 'post',
            data: postRequestdata,
            dataType: 'json',
            error: function(e){
                console.log("error retrieving attention flow data");    
            },
            success: function(json) {
                response = json.Response[0]
                
                console.log(Object.keys(response));
                keys = Object.keys(response);
                
                for( let element in keys ){
                    console.log(response[keys[element]]);
                    if (keys[element] == "total_records")
                    continue;
                    labels.push( keys[element])
                    data.push(parseInt( response[keys[element]]))
                    
                }
            
            }
         }, 'json');
    }else{
        labels = chart_labels;
        data = chart_data;
    }

    // For attention  chart
 attention_chart_ctx = document.getElementById('attention_chart').getContext('2d');

 attention_chart = new Chart(attention_chart_ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: data,
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
        labels: labels
    },
    
    options: {
        //cutoutPercentage: 40,
     responsive: true,
 
   }
});
    
 }

 function update_attention_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        jQuery.ajax({
            async: false,
            url: endpoint_base + attention_chart_api,
            timeout: 5000,
            type: 'post',
            data: postRequestdata,
            dataType: 'json',
            error: function(e){
                console.log("error retrieving user flow data");    
            },
            success: function(json) {
                response = json.Response[0]
                
                console.log(Object.keys(response));
                keys = Object.keys(response);
                
                for( let element in keys ){
                    console.log(response[keys[element]]);
                    if (keys[element] == "total_records")
                    continue;
                    labels.push( keys[element])
                    data.push(parseInt( response[keys[element]]))
                    
                }
            
            }
         }, 'json');
    }else{
        labels = chart_labels;
        data = chart_data;
    }
           
    
    attention_chart.data.labels = labels; 
    attention_chart.data.data = data; 
    
 }

 function initialize_emotions_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        jQuery.ajax({
            async: false,
            url: endpoint_base + emotions_chart_api,
            timeout: 5000,
            type: 'post',
            data: postRequestdata,
            dataType: 'json',
            error: function(e){
                console.log("error retrieving attention flow data");    
            },
            success: function(json) {
                response = json.Response[0]
                
                console.log(response);
                keys = Object.keys(response);
                
                for( let element in keys ){
                    console.log(response[keys[element]]);
                    if (keys[element] == "total_records")
                    continue;
                    labels.push( keys[element])
                    data.push(parseInt( response[keys[element]]))
                    
                }
            
            }
         }, 'json');
    }else{
        labels = chart_labels;
        data = chart_data;
    }

    // For emotions  chart
 emotions_chart_ctx = document.getElementById('emotions_chart').getContext('2d');

 emotions_chart = new Chart(emotions_chart_ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: data,
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
        labels: labels
    },
    
    options: {
        //cutoutPercentage: 40,
     responsive: true,
 
   }
});
    
 }

 function update_emotions_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        jQuery.ajax({
            async: false,
            url: endpoint_base + emotions_chart_api,
            timeout: 5000,
            type: 'post',
            data: postRequestdata,
            dataType: 'json',
            error: function(e){
                console.log("error retrieving user flow data");    
            },
            success: function(json) {
                response = json.Response[0]
                
                console.log(Object.keys(response));
                keys = Object.keys(response);
                
                for( let element in keys ){
                    console.log(response[keys[element]]);
                    if (keys[element] == "total_records")
                    continue;
                    labels.push( keys[element])
                    data.push(parseInt( response[keys[element]]))
                    
                }
            
            }
         }, 'json');
    }else{
        labels = chart_labels;
        data = chart_data;
    }
           
    
    emotions_chart.data.labels = labels; 
    emotions_chart.data.data = data; 
    
 }

 function initialize_valence_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        //to implement copying from  getEmotionDistributionValues()
    }else{
        labels = chart_labels;
        data = chart_data;
    }

   //for valence chart
 valence_chart_ctx = document.getElementById('valence_chart').getContext('2d');
 valence_chart = new Chart(valence_chart_ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: data,
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
    
 }


 function initialize_engagement_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        //to implement copying from  getEmotionDistributionValues()
    }else{
        labels = chart_labels;
        data = chart_data;
    }
           
    //for engagement chart
 engagement_chart_ctx = document.getElementById('engagement_chart').getContext('2d');
 engagement_chart = new Chart(engagement_chart_ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: '# andamento del coinvolgimento lungo il video',
            data: data,
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
 }
 function update_engagement_chart(chart_labels = null, chart_data = null){
    var labels = [];
    
    var data = [];

    if (chart_labels == null || chart_data == null){
        //to implement copying from  getEmotionDistributionValues()
    }else{
        labels = chart_labels;
        data = chart_data;
    }
           
    //for engagement chart
    engagement_chart.data.labels = labels; 
    engagement_chart.data.data = data; 

 }

 function initialize_presence_along_video_with_engagement_chart(chart_labels = null, chart_data_1 = null, chart_data_2 = null){
    var labels = [];
    
    var data1 = [];
    var data2 = [];

    if (chart_labels == null || chart_data_1 == null || chart_data_2 == null) {
        //to implement copying from  getEmotionDistributionValues()
    }else{
        labels = chart_labels;
        data1 = chart_data_1;
        data2 = chart_data_2;
    }
    
    //for presence_along_video_with_engagement_chart 
    presence_along_video_with_engagement_chart_ctx = document.getElementById('presence_along_video_with_engagement_chart').getContext('2d');
    presence_along_video_with_engagement_chart = new Chart(presence_along_video_with_engagement_chart_ctx, {
        type: 'bar',
    
        data: {
            datasets: [{
                label: "numero persone",
                data: data1,
                backgroundColor:'rgba(75, 192, 192, 1)',
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    
                ],
                yAxisID: 'A',
                order: 2,
                
            }, {
                label: 'andamento engagement',
                data: data2,
                
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
            labels: labels
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

    

 }

 function update_presence_along_video_with_engagement_chart(chart_labels = null, chart_data_1 = null, chart_data_2 = null){
    var labels = [];
    
    var data1 = [];
    var data2 = [];

    if (chart_labels == null || chart_data_1 == null || chart_data_2 == null) {
        //to implement copying from  getEmotionDistributionValues()
    }else{
        labels = chart_labels;
        data1 = chart_data_1;
        data2 = chart_data_2;
    }
    
    //for presence_along_video_with_engagement_chart 
    
    presence_along_video_with_engagement_chart.data.labels = labels;
    presence_along_video_with_engagement_chart.data.datasets[0].data = data1;
    presence_along_video_with_engagement_chart.data.datasets[1].data = data2;
    //console.log(presence_along_video_with_engagement_chart.data);
    presence_along_video_with_engagement_chart.update();
    
       

 }

 function initialize_emotions_along_video_with_valence_chart(chart_labels = null, valence_data = null,
     neutral_data = null,
     joy_data = null,
     surprise_data = null,
     anger_data = null,
     disgust_data = null,
     sadness_data = null,
     fear_data = null,
     ){
    var labels = [];
    var valenceData = [];
    
    var neutralData = [];
    var joyData = [];
    var surpriseData = [];
    var angerData = [];
    var disgustData = [];
    var sadnessData = [];
    var fearData = [];
    

    if (chart_labels == null || valence_data == null || neutral_data == null ||
        joy_data == null ||
        surprise_data == null ||
        anger_data == null ||
        disgust_data == null ||
        sadness_data == null ||
        fear_data == null 
        ) {
        //to implement copying from  getEmotionDistributionValues()
    }else{
        labels = chart_labels;
        valenceData = valence_data;
        neutralData = neutral_data;
        joyData = joy_data;
        surpriseData = surprise_data;
        angerData = anger_data;
        disgustData = disgust_data;
        sadnessData = sadness_data;
        fearData = fear_data;
        
    }
    //console.log(data1);
    //for emotions_along_video_with_valence_chart 
    emotions_along_video_with_valence_chart_ctx = document.getElementById('emotions_along_video_with_valence_chart').getContext('2d');
    var barChartData = {
        labels: labels,
        datasets: [{
          data: valenceData,
          type: 'line',
          label: 'Valence',
          fill: false,
          backgroundColor: "#fff",
          borderColor: "#70cbf4",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          lineTension: 0.3,
          pointBackgroundColor: "#fff",
          pointBorderColor: "#70cbf4",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#70cbf4",
          pointHoverBorderColor: "#70cbf4",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          yAxisID: 'B'
        }, {
          label: 'Neutral',
          backgroundColor: "#aad700",
          yAxisID: "bar-y-axis",
          data: neutralData
        }, {
          label: 'Joy',
          backgroundColor: "#ffe100",
          yAxisID: "bar-y-axis",
          data: joyData
        }, {
          label: 'Surprise',
          backgroundColor: "#ef0000",
          yAxisID: "bar-y-axis",
          data: surpriseData
        },
        {
            label: 'Anger',
            backgroundColor: "#ef0000",
            yAxisID: "bar-y-axis",
            data: angerData
          },{
            label: 'Disgust',
            backgroundColor: "#ef0100",
            yAxisID: "bar-y-axis",
            data: disgustData
          },{
            label: 'Sadness',
            backgroundColor: "#737373",
            yAxisID: "bar-y-axis",
            data: sadnessData
          },{
            label: 'Fear',
            backgroundColor: "#af0000",
            yAxisID: "bar-y-axis",
            data: fearData
          }]
      };
    emotions_along_video_with_valence_chart = new Chart(emotions_along_video_with_valence_chart_ctx, {
        type: 'bar',
        data: barChartData,
        options: {
          title: {
            display: true,
            text: ""
            
            
          },
          tooltips: {
            mode: 'label'
          },
          responsive: true,
          maintainAspectRatio:false,
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 1
              }
            }, {
              id: "bar-y-axis",
              stacked: true,
              display: false, //optional
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 1
              },
              type: 'linear'
            },{
                id: "B",
                position:'right',
                display: true, //optional
                ticks: {
                  beginAtZero: true,
                  min: -100,
                  max: 100
                },
                type: 'linear'
              }]
          }
        }
      });

        

 }

 function update_emotions_along_video_with_valence_chart(chart_labels = null, valence_data = null,
    neutral_data = null,
    joy_data = null,
    surprise_data = null,
    anger_data = null,
    disgust_data = null,
    sadness_data = null,
    fear_data = null,
    ){
    var labels = [];
    var valenceData = [];
    
    var neutralData = [];
    var joyData = [];
    var surpriseData = [];
    var angerData = [];
    var disgustData = [];
    var sadnessData = [];
    var fearData = [];

    if (chart_labels == null || valence_data == null || neutral_data == null ||
        joy_data == null ||
        surprise_data == null ||
        anger_data == null ||
        disgust_data == null ||
        sadness_data == null ||
        fear_data == null 
        ) {
        //to implement copying from  getEmotionDistributionValues()
    }else{
        labels = chart_labels;
        valenceData = valence_data;
        neutralData = neutral_data;
        joyData = joy_data;
        surpriseData = surprise_data;
        angerData = anger_data;
        disgustData = disgust_data;
        sadnessData = sadness_data;
        fearData = fear_data;
        
    }

    emotions_along_video_with_valence_chart.data.labels = labels;
    emotions_along_video_with_valence_chart.data.datasets[0].data = valenceData;
    emotions_along_video_with_valence_chart.data.datasets[1].data = neutralData;
    emotions_along_video_with_valence_chart.data.datasets[2].data = joyData;
    emotions_along_video_with_valence_chart.data.datasets[3].data = surpriseData;
    emotions_along_video_with_valence_chart.data.datasets[4].data = angerData;
    emotions_along_video_with_valence_chart.data.datasets[5].data = disgustData;
    emotions_along_video_with_valence_chart.data.datasets[6].data = fearData;
    
    emotions_along_video_with_valence_chart.update();



    }

 function getEmotionDistributionValues(videoId = null, dateFrom = null, dateTo = null){
     var videolabels= [],engagementValues= [],valenceValues= [],
    neutralValues= [],joyValues= [],surpriseValues= [],angerValues= [],
    disgustValues= [],sadnessValues= [],fearValues = [],facesNumbers = [],
    stackedEmotions = [];
    

    
        jQuery.ajax({
            async: false,
            url: endpoint_base + emotions_distribution_chart_api,
            timeout: 5000,
            type: 'post',
            data: postRequestdata,
            dataType: 'json',
            error: function(e){
                console.log("error retrieving user flow data");    
            },
            success: function(json) {
                response = json.Response
                
                console.log(Object.keys(response));
                //keys = Object.keys(response);
                response.forEach(element => {
                    console.log(element)
                    videolabels.push(element['minute_video']);
                    engagementValues.push(element['engagement']);
                    valenceValues.push(element['valence']);
                    neutralValues.push(element['neutral']);
                    joyValues.push(element['joy']);
                    surpriseValues.push(element['surprise']);
                    angerValues.push(element['anger']);
                    disgustValues.push(element['disgust']);
                    sadnessValues.push(element['sadness']);
                    fearValues.push(element['fear']);
                    facesNumbers.push(element['faces_number']);
                    stackedEmotions.push([element['neutral'],element['joy'],element['surprise'],
                                          element['anger'],element['disgust'],element['sadness'],
                                          element['fear']])
                });
                
            
            }
         }, 'json');
    return [videolabels,engagementValues,valenceValues,
        neutralValues,joyValues,surpriseValues,angerValues,
        disgustValues,sadnessValues,fearValues,facesNumbers,stackedEmotions];
 }
