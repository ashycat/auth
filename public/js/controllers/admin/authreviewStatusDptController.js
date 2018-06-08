
/**
 *
 * dashboardController
 *
 */

define(['app','services/api/notice/resources' ,'services/api/message/resources' ], function(app){
  'use strict';
  app.controller('admin/authreviewStatusDptController',
      ['$scope', 'api/notice/resources', 'api/message/resources', '$modal', '$log',
        function ($scope, $noticeResources, $messageResources, $modal, $log) {
          $log.debug('admin authreviewstatus');

          $scope.totalRate="88%";
          $scope.totalremove="7%";

          $scope.status =
                [{dptname:"융자사업부 융자OP센터", rate:"67%"},
                {dptname:"융자사업부 융자OP센터", rate:"67%"},
                {dptname:"융자사업부 융자OP센터", rate:"67%"},
                {dptname:"융자사업부 융자OP센터", rate:"67%"}
              ];

          console.log($scope.status);
          console.log($scope.status.list);


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
