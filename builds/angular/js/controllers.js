var myControllers = angular.module('myControllers',[]);

myControllers.controller('SearchController',
                         function($scope,$http){
    $http.get('js/data.json').then(function(response){
        $scope.artists=response.data;//gets the response data from json using http service.
        $scope.artistOrder='name';//it sets the default value to name
    });
    
});

myControllers.controller('DetailsController',
                         function($scope,$http,$routeParams){
    $http.get('js/data.json').then(function(response){
        $scope.artists=response.data;//gets the response data from json using http service.
        $scope.whichItem=$routeParams.itemId;//add routeparams hold the all the info from route
        
        if($routeParams.itemId>0)
            {
                $scope.prevItem=Number($routeParams.itemId)-1;
                
            }else{
                $scope.prevItem=$scope.artists.length-1;
            }
        
        if($routeParams.itemId<$scope.artists.length-1)
            {
                $scope.nextItem=Number($routeParams.itemId)+1;
            }
        else{
            $scope.nextItem=0;
        }
    });
    
});
    
    
