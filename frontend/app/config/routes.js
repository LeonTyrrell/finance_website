angular.module('primeiraApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('dashboard', {
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html"
        }).state('billingcycle', {
            url: "/billingCycle",
            templateUrl: "billingcycles/tabs.html"
        })

        $urlRouterProvider.otherwise('/dashboard')
    }
])