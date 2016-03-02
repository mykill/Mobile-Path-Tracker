var filterComp = angular.module('filterComp', []);

filterComp.controller('myCont', function($scope){
var data = [[100,101],[80], [65,69]];
calcArray(data);
	function calcArray(arr){
	 var res = [];
	 var br = {};
	 var sum = 0;
	 var tempArray = [];
	 var JSONObj = new Object();
		for (var i = 0; i<arr.length;i++){
			//console.log(arr[i]);
			if (arr[i].length == 1){
				JSONObj = {"Average" : findAve(arr[i]), "Number of Strides" : findArrLength(arr[i])};
				//var JSONObj = new Object();
				console.log(JSONObj);
				res.push(JSON.stringify(JSONObj));
				//console.log(sum/arr.length);
				//res.push(res);
			}
			else {
					JSONObj = {"Average" : findAve(arr[i]), "Number of Strides" : findArrLength(arr[i])};
				//var JSONObj = new Object();
				console.log(JSONObj);
				res.push(JSON.stringify(JSONObj));//res.push(findAve(arr[i]),findArrLength(arr[i]));//res.push(res);
			}
		}
		 console.log(res);
						//console.log(res);
	}
	
	
	function findAve(arr){
			var sum =0;
			for(var i = 0; i<arr.length;i++){
				sum = sum + arr[i];
				//console.log(sum);
			}
			return sum/arr.length;
		}
		
	function findArrLength(arr){
		return arr.length;
	}	
});



