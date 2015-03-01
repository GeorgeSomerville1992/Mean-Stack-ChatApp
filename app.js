var app = angular.module('flapperNews', ['ui.router'])

// providing a service.
app.factory('posts', [function(){ // lower camel case names
  // move post variable

  var o = {
    posts: []
  };
  return o;
  // returning this o object 
  // so it becomes exposed to any other angular module. that cars to inject it. 
  // exporting an OBJECT with posts means we can add new things to it in the future..

  // service body
}])



// created a new controller calldd MainCtrl
// i dont like how htis is done all with in an ARRAY. 
  // how can i change it. 




app.controller('MainCtrl', [
'$scope',
// inject the services 
'posts',

function($scope,posts){
  $scope.posts = posts.posts; // factory name followed by actail post.
  $scope.test = 'Hello world!';
  console.log($scope)
  $scope.posts = [ // array of posts.
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ]
  $scope.addPost = function (){ // the model goes inside the post. its from the form 
 // $scope.title coming from post
    if(!$scope.title || $scope.title === ''){ return; } // prevent user from submmiting
    $scope.posts.push({
      title:$scope.title, 
      link:$scope.link,
      upvotes: 0,

    });
    $scope.title = '';
    $scope.link = '';


  }
  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  }
}]);

// $scope is where we base everything off. THen we declared a variable called test as a propertie

// and added it on to there. 



