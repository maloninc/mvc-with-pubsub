//
// Responsible for data and state of this application.
// You can only change its state by calling particular methods.
// App won't change views, but just trigger(publish) event to notify
// its state is changed.
//
var App = (function(){
    var state = {
        filter: 'undone',
        todos: []
    }
    return {
        event: {
            loading:       'loading',
            load_done:     'load_complete',
            change_filter: 'change_filter'
        },

        getState: function(){
            return $.extend(true, {}, state);
        },

        on: function() {
            var event = arguments[0]
            if(event == undefined){throw "The event is undfined";}
            $(this).on.apply($(this), arguments);
        },

        off: function() {
            var event = arguments[0]
            if(event == undefined){throw "The event is undfined";}
            $(this).off.apply($(this), arguments);
        },

        trigger: function() {
            var event = arguments[0]
            if(event == undefined){throw "The event is undfined";}
            $(this).trigger.apply($(this), arguments);
        },

        loadTodos: function(){
            var _this = this;
            this.trigger(this.event.loading);
            $.ajax({
                type: "GET",
                url: "https://jsonplaceholder.typicode.com/todos",
                dataType: "JSON",
                success: function(data){
                    state.todos = data.filter(function(todo){
                        return todo.userId == 1;
                    })
                    _this.trigger(_this.event.load_done);
                }
            })
        },

        setFilter: function(filter){
            state.filter = filter;
            this.trigger(this.event.change_filter);
       }
    }
})();