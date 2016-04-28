
export default(
  ['$stateProvider', '$urlRouterProvider', '$locationProvider',
    ($stateProvider, $urlRouterProvider, $locationProvider) =>{

      $stateProvider
      .state('/', {
        url: '/',
        scope: {},
        template: require('./pages/home/home.html'),
        controllerAs: 'home',
        controller: 'HomeController'
      })
      .state('about', {
        url: '/about',
        scope: {},
        template: require('./pages/about/about.html'),
        controllerAs: 'about',
        controller: 'AboutController'
      })

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
      console.log(process.env.NODE_ENV);
    }
  ]
)
