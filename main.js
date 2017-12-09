
var router=angular.module('router',['ui.router']);
// 配置路由 config里面有两个对象$stateProvider,$urlRouterProvider
router.config(['$stateProvider',function(stateProvider){
    // stateProvider这个对象里面有一个方法state
    // 这个是每一个页面（路由）
    stateProvider.state({
        name:'home',//路由的名称，不能省略
        url:'/home',//以什么样的url来访问 #!/xx/xx/xx
        // template:'<div>第一个路由</div>'
        templateUrl:'./home/home.html'
    });
    stateProvider.state({
        name:'profile',//路由的名称，不能省略
        url:'/profile',//以什么样的url来访问 #!/xx/xx/xx
        // template:'<div>第二个路由</div>'
        templateUrl:'./profile/profile.html'
    });
}])