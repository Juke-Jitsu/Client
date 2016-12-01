
var ToClientMessages = require('juke-protocols').ToClientMessages;


module.exports = ProfileSettings;

/* @ngInject */
function ProfileSettings($mdDialog, Server) {

    var self = this;

    self.setUsername = function (newUsername) {
        Server.setUsername(newUsername);
    };

    self.setAdminPassword = function (newPassword) {
        Server.setAdminPassword(newPassword);
    }

    self.adminPrivledgeLevel = Server.server$[ToClientMessages.SetAdminPrivledgeLevel];


    self.viewProfileSettings = function () {
        $mdDialog.show({
            clickOutsideToClose: true,
            templateUrl: "partial/dialog/profile-settings.html",
            controller: /*@ngInject*/ function ($scope, $mdDialog, observeOnScope) {

                $scope.closeDialog = function () {
                    // Easily hides most recent dialog shown...
                    // no specific instance reference is needed.
                    $mdDialog.hide();
                };

                self.adminPrivledgeLevel.safeApply($scope, function (admin) {
                    $scope.admin = admin;
                }).subscribe();


                $scope.setUsername = "";

                $scope.adminPassword = "";

                observeOnScope($scope, 'setUsername').subscribe(function (change) {
                    self.setUsername(change.newValue);
                });

                observeOnScope($scope, 'adminPassword').subscribe(function (change) {
                    self.setAdminPassword(change.newValue);
                });

            }
        });
    }

}