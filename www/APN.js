var APN = function() {
};

APN.prototype.register = function(successCallback, errorCallback, options)
{
    if (errorCallback == null)
    {
        errorCallback = function() {}
    }

    if (typeof errorCallback != "function")
    {
        console.log("PushNotification.register failure: failure parameter not a function");
        return
    }

    if (typeof successCallback != "function")
    {
        console.log("PushNotification.register failure: success callback parameter must be a function");
        return
    }

    cordova.exec(successCallback, errorCallback, "APN", "register", [options]);
};

APN.prototype.unregister = function(successCallback, errorCallback, options)
{
    if (errorCallback == null)
    {
        errorCallback = function() {}
    }

    if (typeof errorCallback != "function")
    {
        console.log("APN.unregister failure: failure parameter not a function");
        return
    }

    if (typeof successCallback != "function")
    {
        console.log("APN.unregister failure: success callback parameter must be a function");
        return
    }

     cordova.exec(successCallback, errorCallback, "APN", "unregister", [options]);
};

APN.prototype.showToastNotification = function (successCallback, errorCallback, options)
{
        if (errorCallback == null)
        {
            errorCallback = function () { }
        }

        if (typeof errorCallback != "function")
        {
            console.log("APN.register failure: failure parameter not a function");
            return
        }

        cordova.exec(successCallback, errorCallback, "APN", "showToastNotification", [options]);
};

APN.prototype.setApplicationIconBadgeNumber = function(successCallback, errorCallback, badge)
{
    if (errorCallback == null)
    {
        errorCallback = function() {}
    }

    if (typeof errorCallback != "function")
    {
        console.log("APN.setApplicationIconBadgeNumber failure: failure parameter not a function");
        return
    }

    if (typeof successCallback != "function")
    {
        console.log("APN.setApplicationIconBadgeNumber failure: success callback parameter must be a function");
        return
    }

    cordova.exec(successCallback, errorCallback, "APN", "setApplicationIconBadgeNumber", [{badge: badge}]);
};

if(!window.plugins)
{
    window.plugins = {};
}

if (!window.plugins.apn)
{
    window.plugins.apn = new APN();
}

if (typeof module != 'undefined' && module.exports)
{
  module.exports = APN;
}