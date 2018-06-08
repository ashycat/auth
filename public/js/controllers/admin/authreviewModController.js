
/**
 *
 * dashboardController
 *
 */

define(['app','services/api/notice/resources' ,'services/api/message/resources' ], function(app){
  'use strict';
  app.controller('admin/authreviewModController',
      ['$scope', 'api/notice/resources', 'api/message/resources', '$modal', '$log',
        function ($scope, $noticeResources, $messageResources, $modal, $log) {
          $log.debug('admin authreviewmod');

          var param = {
              limit : 10,
              page : 0
          };


          $scope.status =
                [{seq:"1",name:"신명호", authreviewer:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임",system:"ERP",authname:"보안권한-화면캡쳐",startDate:"181010",endDate:"181231",result:"유지"},
                {seq:"2",name:"신명호", authreviewer:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임",system:"ERP",authname:"보안권한-화면캡쳐",startDate:"181010",endDate:"181231",result:"유지"},
                {seq:"3",name:"신명호", authreviewer:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임",system:"ERP",authname:"보안권한-화면캡쳐",startDate:"181010",endDate:"181231",result:"유지"},
                {seq:"4",name:"신명호", authreviewer:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임",system:"ERP",authname:"보안권한-화면캡쳐",startDate:"181010",endDate:"181231",result:"유지"},
                {seq:"5",name:"신명호", authreviewer:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임",system:"ERP",authname:"보안권한-화면캡쳐",startDate:"181010",endDate:"181231",result:"유지"},
                {seq:"6",name:"신명호", authreviewer:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임",system:"ERP",authname:"보안권한-화면캡쳐",startDate:"181010",endDate:"181231",result:"유지"},
                {seq:"7",name:"신명호", authreviewer:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임",system:"ERP",authname:"보안권한-화면캡쳐",startDate:"181010",endDate:"181231",result:"유지"}
              ];

          $scope.ismodify = function() {
            // $scope.$watch('tableMod', function(){
            //   if (!angular.isUndefined($scope.tableMod))  console.log("ismodify",$scope.tableMod);
            // });
            // console.log("ismodify")
            console.log("ismodify", $scope.tableMod.name)
            //
            // $scope.tableMod.name = 1231;
            // console.log($scope.tableMod.authreviewer);
            // console.log($scope.tableMod.name);
            // console.log($scope.tableMod.knoxID);
            // console.log($scope.tableMod.dpt);
            // console.log($scope.tableMod.work);
            // console.log($scope.tableMod.grade);
            // console.log($scope.tableMod.system);
            // console.log($scope.tableMod.authname);
            // console.log($scope.tableMod.startDate);
            // console.log($scope.tableMod.endDate);
            // console.log($scope.tableMod.result);


          };

          $scope.tableMod ={name:123};


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
