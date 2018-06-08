
/**
 *
 * dashboardController
 *
 */

define(['app','services/api/notice/resources' ,'services/api/message/resources' ], function(app){
  'use strict';
  app.controller('admin/authreviewStatusPersonController',
      ['$scope', 'api/notice/resources', 'api/message/resources', '$modal', '$log',
        function ($scope, $noticeResources, $messageResources, $modal, $log) {
          $log.debug('admin authreviewstatus');

          $scope.totalRate="88%";
          $scope.totalremove="7%";

          $scope.status =
                [{reviewer:"강경희(kyunghee71.kang)", total:"2", comp:0, incomp:2, rate : "0%"},
                {reviewer:"강병국(bg.kang)", total:"48", comp:0, incomp:2, rate :"0%"},
                {reviewer:"강병욱(btoungwoog.kang)", total:"366", comp:0, incomp:2, rate : "0%"},
                {reviewer:"강승우(seungwoo.kang)", total:"312", comp:0, incomp:2, rate : "0%"}
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
