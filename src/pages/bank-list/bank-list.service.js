app.service('bankListService', ['$http', function bankListService($http) {
    this.fetchBankList = function (cityId) {
        return $http.get("https://vast-shore-74260.herokuapp.com/banks?city=" + cityId);
    }

    this.fetchCityList = function () {
        return [{
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
        }]
    }
}])