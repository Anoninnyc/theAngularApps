var utils = require("../utils");
////git push salty
myApp.controller('myCtrl', function($scope, dummyService) {
  $scope.check = 'Angular is registered';
  $scope.flagCompany = false;
  $scope.flagAddress = false;
  $scope.flagName = false;
  $scope.contactMessage = "Interested in learning more?"
  

  $scope.$watch('address', function(newValue, oldValue, scope) {
    if (oldValue) {
      if (oldValue.length === 4 && !$scope.flagAddress) {
       dummyService.watchAction($scope,"flagAddress","emailName");

      }
    }
  });
//
  $scope.$watch('name', function(newValue, oldValue, scope) {
    if (oldValue) {
      if (oldValue.length === 3 && !$scope.flagName) {
        dummyService.watchAction($scope,"flagName","emailCompany");
      }
    }
  });

  $scope.$watch('company', function(newValue, oldValue, scope) {
    //console.log(newValue);
    if (oldValue) {
      if (oldValue.length === 3 && !$scope.flagCompany) {
        dummyService.watchAction($scope, "flagCompany", "comment");
      }
    }
  });


  $scope.$watch('company', function(newValue, oldValue, scope) {
    if (oldValue) {
      if (oldValue.length === 3) {
      $("#action").css({opacity:1});
      document.getElementById("action").disabled = false;
     }
    }
  });


  dummyService.emailAction($scope, false, null, []);
  $scope.sendEmailAddress = (address, name, company, comment) => {

    console.log("$scope.comment", comment);

    if (!utils.reg.test(address)){
      dummyService.emailAction($scope, false, "<h3>Please enter a valid Email Address.</h3>", []);
    } else if (!name.length) {
      dummyService.emailAction($scope, false, "<h3>Please enter a valid name.</h3>", []);
    } else if (!company.length){
      dummyService.emailAction($scope, false, "<h3>Please enter a valid company name</h3>", []);
    } else {

    socket.emit('sendEmailAddress', {
      address,
      name,
      company,
      comment,
    });

    dummyService.emailAction($scope, true, null, []);

    socket.once('loggedToDB', msg => {
      console.log("this is msg", msg);
      const addOn = msg.companyInfo ? ` It looks like ${msg.companyInfo[1]} from ${msg.companyInfo[0]} has also registered interest!` : "";
      dummyService.emailAction($scope, false, `<h3>Email has been added- Thanks!${addOn}</h3>`, msg.storyInfo, true);
      [$scope.name, $scope.company, $scope.contactMessage] = ["", "", "Wanna Send Again?"];
      $("#comment").val("");
      $("#contactMessage").css({left: "13%", position: "relative"});
      $scope.$apply();
    })

    socket.once('emailExtant', msg => {
      dummyService.emailAction($scope, false, "<h3>It looks like you've already sent your info</h3>", []);
      $scope.$apply();
    });
  };
 }
})


myApp.run(function($rootScope) {
  $rootScope.count = 3;
   const map = {
      "/contact": "Contact Page",
      "/techUsed": "Tech Used",
      "/resume": "My Resume",
      "/": "Welcome!"
    };


  $rootScope.countdown = function() {
    console.log("coutingDOWN!!!")
    if ($rootScope.count > 1) {
      $rootScope.count--;
    } else if ($rootScope.count === 1) {
      $rootScope.count = "GO!";
    } else {
      $rootScope.count = null;
    }

  };

   $rootScope.$on("$routeChangeStart", (e, current)=>{
    console.log(e,current.$$route.originalPath);
    $rootScope.currRoute=map[current.$$route.originalPath];
   })


  $rootScope.$on('$routeChangeSuccess', (e, current) => {
    let path = current.$$route.originalPath;
    if (path === "/techUsed" && $rootScope.counting!==1) {
      $rootScope.count = 3;
      $rootScope.counting=1;

      for (var i = 500; i < 2001; i += 500) {
        (function(i) {
          setTimeout(function() {
            $rootScope.countdown();
            $rootScope.$apply();
            if (i===2000){
            $rootScope.counting=2;
            $(".tech").css({display:"inline"})
            $rootScope.$apply();
            }
          }, i)
        }(i));
      }
    }
    if (moveIt!==undefined){
      clearInterval(moveIt);
    }
   

    $rootScope.currRoute = map[path];
    console.log(path)
  });
});




