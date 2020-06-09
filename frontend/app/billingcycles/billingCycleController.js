(function() {
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        BillingCycleController
    ])

    function BillingCycleController($http) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'
        this.teste = '1'


        vm.create = function(billingCycle){
            console.log(billingCycle)
            $http.post(url, vm.billingCycle).then(function(response) {
                vm.billingCycle = {}
                console.log('Sucesso!')
            })
        }
    }
})()