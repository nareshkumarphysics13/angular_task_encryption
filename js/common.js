eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.1(\'2\',"3");',4,4,'sessionStorage|setItem|isLogin|false'.split('|'),0,{}))

var techColorCont = angular.module('tColorControllers', []);
techColorCont.controller('mainController', ['$scope', '$rootScope', '$http', '$location', function ($scope, $rootScope, $http, $location) { 
    $scope.login = {};
    $rootScope.gustBook = {};
    $rootScope.stateInfoList = [];
    $rootScope.isNavVisible = false;
    $rootScope.gustBookInfo = [];
    $rootScope.isBackNav = false;
    
    $scope.$on('$routeChangeStart', function(event, current) {
        $scope.isChangeClass = "";
    });
    $scope.$on('$routeChangeSuccess', function(event, current) {
        $scope.isChangeClass = "active";
        $scope.currentPagePath = $location.path();
        if($scope.currentPagePath == "/loginPage" || $scope.currentPagePath == "/success")
            $rootScope.isBackNav = false;
        else
            $rootScope.isBackNav = true;
        
    });
    if(sessionStorage.getItem('isLogin') == "false") {
         window.location.href = "#/loginPage";
    }
    $scope.logout = function() {
        sessionStorage.setItem('userName', " ");
        eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.1(\'2\',"3");',4,4,'sessionStorage|setItem|isLogin|false'.split('|'),0,{}))
        $rootScope.isNavVisible = false;
        window.location.href = "#/loginPage";
    }    
    $scope.gustBook = function() {
        window.location.href = "#/gustBook";
    }
    $scope.backPage = function() {
        window.history.back();
    }
}]);
techColorCont.controller('loginController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) { 
    $scope.login = {};
    $scope.submitForm = function() {
        if($scope.login.userName != "" && $scope.login.userName != undefined && $scope.login.Password != "" && $scope.login.Password != undefined)  
        {
            eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$o.n(\'a/0.a\').f(6(7,d,9,c){l.m(7,6(3){8($4.0.2==3.p&&$4.0.v==3.u){1.b(\'2\',$4.0.2);1.b(\'e\',"5")}});$j.t=[];8(1.q(\'e\')=="5"){$j.s=5;k.g.h="#/f"}r{k.g.h="#/i"}}).i(6(7,d,9,c){});',32,32,'login|sessionStorage|userName|index|scope|true|function|data|if|headers|json|setItem|config|status|isLogin|success|location|href|error|rootScope|window|angular|forEach|get|http|username|getItem|else|isNavVisible|gustBookInfo|password|Password'.split('|'),0,{}))
        
        }
        else if($scope.login.userName == "" || $scope.login.userName == undefined) {
            alert("Please enter the user name");
        }
        else if($scope.login.Password == "" || $scope.login.Password == undefined) {
            alert("Please enter the password");
        }
    }
  }]);
  techColorCont.controller('successController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
        eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$8.7(\'1/6.1\').c(3(0,4,5,2){$b.9=0}).a(3(0,4,5,2){});',13,13,'data|json|config|function|status|headers|state|get|http|stateInfoList|error|rootScope|success'.split('|'),0,{}))

  }]);
techColorCont.controller('stateInfoController', ['$scope', '$rootScope', '$http', '$routeParams', function ($scope, $rootScope, $http, $routeParams) {
        $scope.stateNameInfo = $routeParams.stateName;
        angular.forEach($rootScope.stateInfoList, function(index) {
            if($scope.stateNameInfo == index.name)
                $scope.stateDetailInfo = index;
        });
        
  }]);
techColorCont.controller('gustBookController', ['$scope', '$rootScope', '$http', '$routeParams', function ($scope, $rootScope, $http, $routeParams) {
        $scope.saveMsg = function() {
            $scope.mobileNumber = $scope.gBook.mobile;
            $scope.messageInfo = $scope.gBook.msg;
            
            if($scope.mobileNumber == "" || $scope.mobileNumber == undefined) {
                alert("please enter the mobile number");
            }
            else if(isNaN($scope.mobileNumber) || $scope.mobileNumber.length < 10) {
                alert("please enter the valid mobile number");
            }
            else if($scope.messageInfo == "" || $scope.messageInfo == undefined) {
                alert("please enter the message");
            }
            else {
                $rootScope.gustBookInfo.push({
                    "mobile": $scope.mobileNumber,
                    "message": $scope.messageInfo
                });
                $scope.gBook.mobile = "";
                $scope.gBook.msg = "";
            }
        }
  }]);