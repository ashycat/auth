
/**
 *
 * dashboardController
 *
 */

define(['app','services/api/notice/resources' ,'services/api/message/resources' ], function(app){
  'use strict';
  app.controller('admin/authreviewMailController',
      ['$scope', 'api/notice/resources', 'api/message/resources', '$modal', '$log',
        function ($scope, $noticeResources, $messageResources, $modal, $log) {
          $log.debug('admin authreviewmail');

          $scope.months =
          ['검토자', '싱글아이디', '부서명'];

          $scope.name = "정수창";
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
