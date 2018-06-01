
/**
 *
 * dashboardController
 *
 */

define(['app'/*,'services/api/notice/resources' ,'services/api/message/resources' */], function(app){
  'use strict';
  app.controller('common/authreviewController',
      ['$scope', '$modal', '$log',
        function ($scope, $modal, $log) {
          console.log('common authreview');

          var param = {
              limit : 10,
              page : 0
          };

          // $scope.getNoticeList = function() {
          //   $noticeResources.getNotices(param, function(result) {
          //     $scope.notices = result.contents;
          //     $scope.notices_info = result.info;
          //   });
          // };
          //
          // $scope.getMessageList = function() {
          //   $messageResources.getMessages(param, function(result) {
          //     $scope.messages = result.contents;
          //     $scope.messages_info = result.info;
          //   });
          // };
          //
          // $scope.getNoticeList();
          // $scope.getMessageList();
  }]);
});
