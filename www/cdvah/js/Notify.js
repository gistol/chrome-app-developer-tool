(function() {
    'use strict';
    /* global myApp */
    myApp.directive('cdvahNotify', [ '$rootScope', function($rootScope) {
        return {
            scope: {},
            restrict: 'E',
            template: '<div class="notification-container" ng-click="showNotify=false" ng-show="showNotify"><div class="notification" ng-class="notification.css">{{ notification.message }}</div></div>',
            replace: true,
            link: function(scope) {
                $rootScope.$watch('notification', function(newValue) {
                    scope.showNotify = !!newValue;
                    if (newValue) {
                        scope.notification = {};
                        scope.notification.message = newValue.message;
                        scope.notification.css = 'notification-' + newValue.type;
                    }
                });
            }
        };
    }]);

    myApp.factory('notifier', ['$rootScope', function($rootScope) {
        return {
            success: function(msg) {
                console.log(msg);
                $rootScope.notification = { message: msg, type: 'success' };
            },
            error: function(msg) {
                if (typeof(msg) == 'object') {
                    msg = msg.message || msg;
                }
                if (msg && typeof msg != 'string') {
                    msg = JSON.stringify(msg);
                }
                console.error(msg);
                $rootScope.notification = { message: msg, type: 'error' };
            }
        };
    }]);
})();

