(function(){
var app = angular.module('film-directives',[]);

	app.directive("filmGallery", function(){
		return {
			restrict: "E",
			templateUrl: "film-gallery.html"
		};
	});

	app.directive("filmTabs", function(){
		return {
			restrict: "E",
			templateUrl: "film-tabs.html",
			controller: function(){
				this.tab = 0;
				
				this.setTab = function(i){
					this.tab = i;
				};

				this.isSet = function(x){
					return this.tab === x;
				};
			},
			controllerAs: "tab"
	  	};
	});

	app.directive("filmInfo", function(){
		return{
			restrict: "E",
			templateUrl: "film-info.html"
		};
	});

	app.directive("filmPlot", function(){
		return{
			restrict: "E",
			templateUrl: "film-plot.html"
		};
	});

	app.directive("filmReviews", function(){
		return{
			restrict: "E",
			templateUrl: "film-reviews.html",
			controller: function(){
				this.review={};

				this.addReview = function(film){
					film.reviews.push(this.review);

					this.review = {};
				};

			},
			controllerAs: "reviewCtrl" 
		};
		
	});

})();