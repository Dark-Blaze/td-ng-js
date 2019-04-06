app.service('bankListService', ['$http', function bankListService($http){
    return {
        fetchBankList(cityId) {
            return $http.get("https://vast-shore-74260.herokuapp.com/banks?city=" + cityId);
        }
    }
}])