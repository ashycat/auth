
/**
 *
 * dashboardController
 *
 */

define(['app' ], function(app){
  'use strict';
  app.controller('admin/authreviewStatusController',
      ['$scope', '$modal','$log','$window',
        function ($scope, $modal, $log,$window) {
          $log.debug('admin authreviewstatus');

          $scope.totalRate="88%";
          $scope.totalremove="7%";

          $scope.status =
                [{kind:"업무",totalRate:"8%",totalRemove:"8%",
                  list:[{name:"기타 업무시스템 추가 신청 권한1",authReviewCnt:"283828",authReviewComplete:"182838",rate:"67%"},
                    {name:"기타 업무시스템 추가 신청 권한2",authReviewCnt:"283828",authReviewComplete:"182838",rate:"67%"},
                    {name:"기타 업무시스템 추가 신청 권한3",authReviewCnt:"283828",authReviewComplete:"182838",rate:"67%"},
                    {name:"기타 업무시스템 추가 신청 권한4",authReviewCnt:"283828",authReviewComplete:"182838",rate:"67%"},
                    {name:"기타 업무시스템 추가 신청 권한5",authReviewCnt:"283828",authReviewComplete:"182838",rate:"67%"},
                    {name:"기타 업무시스템 추가 신청 권한6",authReviewCnt:"283828",authReviewComplete:"182838",rate:"67%"},
                    {name:"기타 업무시스템 추가 신청 권한7",authReviewCnt:"283828",authReviewComplete:"182838",rate:"67%"}]},

                  {kind:"서버/DB",totalRate:"88%",totalRemove:"88%",
                    list:[{name:"서버/DB1",authReviewCnt:"283828",authReviewComplete:"182838",rate:"67%"},
                        {name:"서버/DB2",authReviewCnt:"283828",authReviewComplete:"182838",rate:"67%"},
                        {name:"서버/DB3",authReviewCnt:"283828",authReviewComplete:"182838",rate:"67%"},
                        {name:"서버/DB4",authReviewCnt:"283828",authReviewComplete:"182838",rate:"67%"}]}];

          console.log($scope.status);
          console.log($scope.status.list);

          // $scope.itemDeps=[{id:1,url:"/admin/authreviewStatus"},
          // {id:2,url:"/admin/authreviewStatusDpt"},
          // {id:3,url:"/admin/authreviewStatusPerson"},];

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


          $scope.total=function(){

          }

          // var modalInstance = $modal.open({
          //   templateUrl: 'views/admin/authreviewStatusDpt.html',
          //   controller: authreviewStatusDptCtrl,
          //   resolve: {
          //     reload : function() {
          //       return $scope.getGroupUserList;
          //     }
          //   }
          // });



  }]);
});
