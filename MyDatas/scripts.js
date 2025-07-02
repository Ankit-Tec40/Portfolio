angular.module('portfolioApp', [])
  .controller('PortfolioController', function($scope) {
    $scope.name = "Ankit Kumar";
    $scope.tagline = "Software Developer | .NET, Python, ML";

    $scope.currentSection = 'home';

    $scope.setSection = function(section) {
      $scope.currentSection = section;
    };

    $scope.skills = [
      '.NET Core', 'Python', 'Flask', 'SQL Server', 'AngularJS', 'Machine Learning'
    ];

    $scope.projects = [
      {
        title: 'API Testing Tool (Work)',
        description: 'Internal Python-based API testing tool used at EaseMyTrip.',
        stack: 'Python, Flask, SQLite',
        link: ''
      },
      {
        title: 'Flight Recommender System (Personal)',
        description: 'Logic-driven ML system to suggest travel options.',
        stack: 'Python, Pandas, Scikit-learn',
        link: 'https://github.com/ankit/flight-recommender'
      },
      {
        title: 'Flask Tool Hosting on Android',
        description: 'Portfolio hosted locally using Termux + Flask.',
        stack: 'Flask, HTML/CSS, Android',
        link: ''
      }
    ];
  });
