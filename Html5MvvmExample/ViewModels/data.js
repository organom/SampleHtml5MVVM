function AppViewModel() {
    var self = this;
    
    self.log = ko.observable('');
    self.toAddData =  ko.observable('');

    self.addData = function () {
        var request = { data: self.toAddData() };
        var jsondata = JSON.stringify(request);

        $.ajax({
            type: "POST", //GET or POST or PUT or DELETE verb
            url: "http://localhost:58887/ExampleService.svc/AddData", // Location of the service
            data: jsondata, //Data sent to server
            contentType: "application/json; charset=utf-8", // content type sent to server
            dataType: "json", //Expected data format from server
            processdata: true, //True or False
            crossDomain: true,
            success: function(result) {
                //On Successfull service call
                var values = JSON.stringify(result);
                self.log(values);
            },
            error: ServiceFailed  // When Service call fails
        });
    };

    self.getData = function() {
        $.ajax({
            type: "POST", //GET or POST or PUT or DELETE verb
            url: "http://localhost:58887/ExampleService.svc/GetData", // Location of the service
            data: null, //Data sent to server
            contentType: "application/json; charset=utf-8", // content type sent to server
            dataType: "json", //Expected data format from server
            processdata: true, //True or False
            crossDomain: true,
            success: function(result) {
                //On Successfull service call
                var values = JSON.stringify(result);
                self.log(values);
            },
            error: ServiceFailed  // When Service call fails
        });
    };
}

function ServiceFailed(result) {
    alert('Service call failed: ' + result.status + '' + result.statusText);
}

// Document Ready
$(function () {
    jQuery.support.cors = true;
    
    ko.applyBindings(new AppViewModel());
});