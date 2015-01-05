/**
 * Created by madalin on 1/2/2015.
 */
define(["require", "exports", 'durandal/system', 'durandal/app', 'durandal/viewLocator'], function (require, exports, DurandalSystemModule, DurandalAppModule, DurandalViewLocatorModule) {
    var AppBoot = (function () {
        function AppBoot() {
            debugger;
            DurandalSystemModule.debug(true);
            DurandalAppModule.title = 'amd-durandal-SalaryAssignment-POC-v1.0';
            DurandalAppModule.configurePlugins({
                router: true,
                dialog: true
            });
            DurandalAppModule.start().then(function () {
                //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
                //Look for partial views in a 'views' folder in the root.
                DurandalViewLocatorModule.useConvention();
                //Show the app by setting the root view model for our application with a transition.
                //app.setRoot('viewmodels/shell', 'entrance');
            });
        }
        return AppBoot;
    })();
    exports.AppBoot = AppBoot;
});
//# sourceMappingURL=AppBoot.js.map