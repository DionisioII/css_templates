$(document).ready(function() {


    var event_container = jQuery(".events_container").find(".events");
    var event =event_container.find(".event").clone();
    
    for (let index = 0; index < 10; index++) {
        event.clone().appendTo(event_container);
        console.log(event);
        
    }
    
    //event_container.appendTo(event);
});