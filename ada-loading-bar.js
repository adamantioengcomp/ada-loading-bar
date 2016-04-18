loadingBar = angular.module('ada-loading-bar',[]);
loadingBar.factory('LoadingBar',function($q){

	var running = false;

	return{

		/**
		 * Shows the loading bar
		 */
		show : function(){
			if (!running){
				running = true;
				$("#loading").modal('show');
			}
		},

		/**
		 * Hides the loading bar
		 */
		hide : function(){
			var deferred = $q.defer();
			if (running){
				running = false;
				$("#loading").modal('hide');
				$("#loading").on('hidden.bs.modal',function(){
					deferred.resolve();
				});
			}

			return deferred.promise;
		},

		/**
		 * Toggles the loading bar
		 */ 
		toggle : function(){
			running = !running;
			$("#loading").modal('toggle');
		}
	};
	
}).directive('loading', function(){

	var scriptName = 'ada-loading-bar.js';
	var script = document.querySelector("[src$='" +scriptName+ "']");
	if (!script){
		scriptName = 'ada-loading-bar.min.js';
		script = document.querySelector("[src$='" +scriptName+ "']");
	}

	if (!script) console.error("loading-bar.js file not found");

	var currentScriptPath = script.src;

	console.error();

	return {
		restrict: 'E',
		scope:{
			msg:'@message',
			icon:'=icon',
		},
		templateUrl:currentScriptPath.replace(scriptName, 'ada-loading-bar.html')
	};
});