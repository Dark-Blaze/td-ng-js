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
                maxSize:5,
                totalItems: 0,
                currentPage: 1,
                size: 10,
                pagedData : []
            }
        },
        operations: {
            getBankListForCity: function getBankListForCity(city) {
                $scope.bankList.model.searchKeyword = '';
                function onSuccess(response) {
                    let res = response.data
                    $scope.bankList.model.banks =  res;
                    $scope.bankList.model.page.totalItems = res.length;
                    $scope.bankList.model.page.currentPage = 1;
                    $scope.bankList.operations.setPage(1);
                }

                function onError(response) {
                    console.log(response)
                }
                bankListService.fetchBankList($scope.bankList.model.city.key).then(onSuccess, onError);

            },
            pageChange: function pageChange() {
                $scope.bankList.operations.setPage($scope.bankList.model.page.currentPage);
            },
            setPage: function setPage(current) {
                $scope.bankList.model.page.pagedData = $scope.bankList.model.banks.slice((current - 1) * 10, current * $scope.bankList.model.page.size);
            }
        }
    }


    
    if ($scope.bankList.model.city !== {}) {
        $scope.bankList.operations.getBankListForCity($scope.bankList.model.city)
    }
}])