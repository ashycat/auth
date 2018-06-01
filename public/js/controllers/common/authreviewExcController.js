
/**
 *
 * dashboardController
 *
 */

define(['app','services/api/notice/resources' ,'services/api/message/resources' ], function(app){
  'use strict';
  app.controller('common/authreviewExcController',
      ['$scope', 'api/notice/resources', 'api/message/resources', '$modal', '$log',
        function ($scope, $noticeResources, $messageResources, $modal, $log) {
          console.log('common authreviewExc');


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
