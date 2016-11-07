//
// Responsible for setting up event handler.
//

App.on(App.event.load_done, function(event){
    View.todos.render(App.getState());
})

App.on(App.event.change_filter, function(event){
    View.filter.render(App.getState());
    View.todos.render(App.getState());
})

$(document).on('change', '.filter', function(event){
    var filter = event.target.value;
    App.setFilter(filter);
});

$(document).ready(function(event){
    App.loadTodos();
});