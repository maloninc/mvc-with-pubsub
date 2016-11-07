//
// Responsible for rendering HTML based on state.
//
var View = (function(){
    return {
        filter: {
            render: function(state){
                var filter = state.filter;
                $('.filter .btn').removeClass('btn-primary');
                $('.filter input[value=' + filter + ']').parent().addClass('btn-primary');
            }
        },
        todos: {
            render: function(state){
                var todos = state.todos.filter(function(todo){
                    return state.filter == "all" || todo.completed == (state.filter == "done");
                });

                $('.todo-list').children().remove();
                todos.forEach(function(todo){
                    var title =  todo.title;
                    var checked = (todo.completed) ? "check" : "unchecked";

                    $('.todo-list').append(
                        '<li class="list-group-item">' +
                            '<button type="button" class="btn btn-default task-button">' +
                                '<span class="glyphicon glyphicon-' + checked + '"></span>' +
                            '</button>' +
                            '<span style="margin-left:10px;">' + title + '</span>' +
                        '</li>'
                    );
                });
            }
        }
    }
})();