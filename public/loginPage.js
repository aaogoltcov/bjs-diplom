'use strict'

// login
let authObject = new UserForm;
authObject.loginFormCallback = function(data) {
    ApiConnector.login(data, response => {
        response['success'] ? location.reload() : authObject.setLoginErrorMessage(response['data']);
    });
};

// new user registration
authObject.registerFormCallback = function(data) {
    ApiConnector.register(data, response => {
        response['success'] ? location.reload() : authObject.setRegisterErrorMessage(response['data']);
    });
};
