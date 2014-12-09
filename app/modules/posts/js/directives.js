'use strict'

angular.module('spBlogger.posts.directives',[]);

angular.module('spBlogger.posts.directives').directive('spbComments', function(Post){
	return {
		scope: {
			postInstance: '='
		},
		restrict: 'AEC', // E = Element, A = Attribute, C = Class, M = Comment
		replace: true,
		templateUrl: 'modules/posts/views/comments.html',
		link: function($scope, elem, attrs) {
			$scope.saveComment = function () {
				var postId = $scope.postInstance._id,
					savedPostInstance = {};
				$scope.comment.datePublished = new Date();	//current datetime
				angular.copy($scope.postInstance, savedPostInstance);
				savedPostInstance.comments.unshift($scope.comment);
				$scope.postInstance.comments.unshift($scope.comment);
				$scope.comment = {};
				savedPostInstance.$update();
			}
		}
	};
});;
