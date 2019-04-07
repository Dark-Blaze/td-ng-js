app.directive('paginator', function () {
    return {
        restrict: 'EA',
        controllerAs: 'paginatorCtl',
        templateUrl: "./shared/directives/paginator.directive.html",
        scope: {
            model: "=",
            pageChange: "&",
            totalItems: "=",
            maxSize: "="
        },
        controller: function ($scope) {
            $scope.setPageData = function setPageData() {
                $scope.pageChange()({curPage: $scope.model});
            }
        }
    }
});