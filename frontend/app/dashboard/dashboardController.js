angular.module('primeiraApp').controller('DashboardCtrl', [
    '$http',
    'consts',
    DashboardController
  ])
console.log('passei aqui 2')  
function DashboardController($http, consts) {
    const vm = this
    vm.getSummary = function() {
    console.log('passei aqui')
    const url = 'http://localhost:3003/api/billingSummary'
    $http.get(url).then(function(response) {
        const {credit = 0, debt = 0} = response.data
        vm.credit = credit
        vm.debt = debt
        vm.total = credit - debt
    })
}

vm.getSummary()
}