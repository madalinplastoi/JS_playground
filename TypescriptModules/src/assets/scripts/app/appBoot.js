/**
 * Created by madalin on 12/17/2014.
 */

///<reference path='Messaging.d.ts'/>

define('appBoot', ['jquery'], function ($) {
    $(document).ready(function () {
       $('#wrapper').append($('<h1>Welcome into Typescript Modules app!!!</h1>'));

        debugger;
        require(['appCommon'], function(){
            //var messenger = moduleRef.Messaging.Messenger.getInstance();
            debugger;
        })
    });
});