
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

		 $scope.oclock = 
		 			 [{Props:{id:1234,name:2},Props:{id:3,name:4}}]
		 ;
		 
         $scope.Props = [{
              id	 : "1234",
              name : "123"
          },{
              id	 : "12345",
              name : "12355"
          }];

		
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
