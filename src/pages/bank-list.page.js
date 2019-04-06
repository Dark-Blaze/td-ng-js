app.controller('bankListCtrl', ['$scope', 'bankListService', function ($scope, bankListService) {
    $scope.bankList = {
        model: {
            city: {
                label: 'Mumbai',
                key: 'MUMBAI'
            },
            searchKeyword: '',
            cityList: [{
                label: 'Hyderabad',
                key: 'HYDERABAD'
            }, {
                label: 'Mumbai',
                key: 'MUMBAI'
            }, {
                label: 'Delhi',
                key: 'DELHI'
            }, {
                label: 'Bangalore',
                key: 'BANGALORE'
            }, {
                label: 'Chennai',
                key: 'CHENNAI'
            }],
            banks: [],
            page:{
                pageSize: 20
            }
        },
        operations: {
            getBankListForCity: function getBankListForCity(city) {
                function onSuccess(response) {
                    $scope.bankList.model.banks = $scope.bankList.model.page.pageSize ? response.data.slice(1, $scope.bankList.model.page.pageSize) : response.data;
                }

                function onError(response) {
                    console.log(response)
                }
                bankListService.fetchBankList($scope.bankList.model.city.key).then(onSuccess, onError);

            }
        }
    }

    if ($scope.bankList.model.city !== {}) {
        $scope.bankList.operations.getBankListForCity($scope.bankList.model.city)
    }
}])