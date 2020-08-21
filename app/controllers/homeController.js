app.controller('homeController', function ($scope) {
    console.log('hello i am in home controller');
    $scope.goto = function (where) {
        console.log('goto ', where);
        $('html, body').animate({
            scrollTop: $("#" + where).offset().top
        }, 2000);
    };
})