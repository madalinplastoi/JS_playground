exports.JsonResponse = function() {
    this.IsSuccess;
    this.Message;
    this.Data;

    this.initWithData = function (data) {
        this.Data = data;
        this.IsSuccess = true;
    }

    this.initWithError = function (message) {
        this.Message = message;
        this.IsSuccess = false;
    }

    return this;
};

