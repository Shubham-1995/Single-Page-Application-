(function(){
var app= angular.module("gemStore",['ui.bootstrap']);  
app.controller('ctrlStore',function(){
	var controllObject = this;
	controllObject.userArray = arrayObject;
	var currentObject = {};
  /* delete element from array */
  controllObject.delete = function(id){
    controllObject.userArray.splice(id, 1);
	 //delete controllObject.userArray[id]
  }
  /* show field empty when click add button and change button*/
  controllObject.emptyField = function(object){
	  if(object != null){
		controllObject.firstname = object.name;
	  controllObject.lastname=object.surname; 
controllObject.updateButton = true;
controllObject.addButton = false;
currentObject = object;
	  }else{
	  controllObject.firstname = "";
	  controllObject.lastname=""; 
	 controllObject.updateButton = false;
controllObject.addButton = true; 
	  }
  }
 /* push element into array */
   controllObject.addMethod = function(){  
	  controllObject.userArray.push({name:controllObject.firstname,surname:controllObject.lastname});    
   }
   /* update element into array */ 
   controllObject.update = function(){  
	    currentObject.name = controllObject.firstname;
		currentObject.surname = controllObject.lastname;
   }
});


  var arrayObject= [{
    name:'shubham',
    surname:'gaur',
  },
  {
	 name:'satyam',
    surname:'gaur',
  
  }];
})();

