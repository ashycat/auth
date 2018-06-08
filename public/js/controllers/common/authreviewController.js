
/**
 *
 * dashboardController
 *
 */

define(['app'/*,'services/api/notice/resources' ,'services/api/message/resources' */], function(app){
  'use strict';
  app.controller('common/authreviewController',
      ['$scope', '$modal', '$log','$filter',
        function ($scope, $modal, $log,$filter) {
          console.log('common authreview');

		 $scope.auths =
		 			 [{seq:1234,name:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임", system:"ERP",authName:"보안권한-화면캡쳐(SECU)",startDate:"20180101",endDate:"200181231",result:"유지"},
             {seq:3,name:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임", system:"ERP",authName:"보안권한-화면캡쳐(SECU)",startDate:"20180101",endDate:"200181231",result:""},
           {seq:23,name:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임", system:"ERP",authName:"보안권한-화면캡쳐(SECU)",startDate:"20180101",endDate:"200181231",result:"회수"}]
		 ;



  }]);



});
