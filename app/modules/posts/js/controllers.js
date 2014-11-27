'use strict'

angular.module('spBlogger.posts.controllers',[]);

angular.module('spBlogger.posts.controllers')
	.controller('PostController', ['$scope', 'Post', function($scope, Post){
		$scope.posts = Post.query();
	}]);

angular.module('spBlogger.posts.controllers')
	.controller('PostDetailsController', ['$stateParams', '$state', '$scope', 'Post', function($stateParams, $state, $scope, Post){
		/*$scope.getPostById = function (id) {
			return postService.getPostById(id);
		};*/

		$scope.closePost = function () {
			$state.go('allPosts');
		};

		/*$scope.singlePost = $scope.getPostById($stateParams.id);*/
		$scope.singlePost = Post.get({id: $stateParams.id});
	}]);
