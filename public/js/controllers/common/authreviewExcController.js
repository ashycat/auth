
/**
 *
 * dashboardController
 *
 */

define(['app' ,'factories/sweet-alert'], function(app){
  'use strict';
  app.controller('common/authreviewExcController',
      ['$scope', 'sweetAlert', '$modal', '$log',
        function ($scope, sweetAlert, $modal, $log) {
          console.log('common authreviewExc');



          $scope.auths =
                [{seq:1234,name:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임", system:"ERP",authName:"보안권한-화면캡쳐(SECU)",startDate:"20180101",endDate:"200181231",result:"유지"},
                  {seq:3,name:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임", system:"ERP",authName:"보안권한-화면캡쳐(SECU)",startDate:"20180101",endDate:"200181231",result:""},
                {seq:23,name:"김기운",knoxID:"kiwoon.kim",dpt:"CISO",work:"보안",grade:"책임", system:"ERP",authName:"보안권한-화면캡쳐(SECU)",startDate:"20180101",endDate:"200181231",result:"회수"}]
          ;
          $scope.result = {total:123, suc:23, fail: 100} ;

          $scope.resultExc = function (result) {
            sweetAlert.swal({
              title: "권한검토 결과 반영 ",
              text: "업로드한 "+$scope.result.total+"건중 "+$scope.result.suc+"건 정상 결과를 반영 하시겠습니까?",
              // type: "none",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "결과 반영",
              cancelButtonText: "취소",
              closeOnConfirm: false,
              closeOnCancel: false },
              function (isConfirm) {
                if (isConfirm) {
                  sweetAlert.swal("검토결과가 반영 되었습니다.");
                  // var param = {id : row.entity.id};
                  // resources.deleteUser(param, function() {
                  //   $scope.userList();
                  //   sweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
                  // }, function(err){
                  //   $log.debug(err);
                  //   alert('err', err);
                  // });
                } else {
                  // sweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
                  sweetAlert.swal("취소되었습니다.");
                }
            });
          };
  }]);
});
