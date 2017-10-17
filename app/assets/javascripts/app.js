document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
       
       priority1: "WASH THE DISHES!!!",
       priority2: "FOLD YOUR LAUNDRY!!!",
       priority3: "CLEAN THE KITCHEN!!"
      ],
     
      newTaskPriority1: ""
      newTaskPriority2: ""
      newTaskPriority3: ""
    
   },
    mounted: function() {

    },
    methods: {
      addTask: function() {
        if (this.newTaskPriority1 && this.newTaskPriority2 && this.newTaskPriority3) {
          var newTask = {

                  priority1
          }
        }
      },
    computed: {

    }
  });
});
