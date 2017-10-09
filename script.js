var app = angular.module('myApp', []);
app.directive('grid', function(){
    return {
      restrict: 'EA',
      scope: {
        list: '='
      },
	   link :  function(scope, element, attributes) {  
			var parentDiv = "<div><table style='border:1px solid black;border-collapse: collapse;'>";
				angular.forEach(scope.list[0], function(value, key) {
					parentDiv +="<th style='border:1px solid black;'>"+key+"</th>"
					});
				for(var i=0;i<scope.list.length;i++){
					parentDiv += "<tr>";
					angular.forEach(scope.list[i], function(value, key) {
					parentDiv +="<td style='border:1px solid black;'>"+value+"</td>";
					});
					parentDiv += "</tr>";
				}
				parentDiv += "</table></div>";
				element.append(parentDiv);
               }
    };
  });
   app.controller('main',function($scope){
	   $scope.arr =  [
	 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        },
 {
          "inum": "INV0000057",
          "idt": "24-03-2017",
          "val": 729248.16,
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R"
        }
  ];
   })