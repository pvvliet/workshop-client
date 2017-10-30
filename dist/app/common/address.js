System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Address;
    return {
        setters: [],
        execute: function () {
            Address = (function () {
                function Address(fullName, postcode, streetnumber, emailAddress, password) {
                    this.fullName = fullName;
                    this.postcode = postcode;
                    this.streetnumber = streetnumber;
                    this.emailAddress = emailAddress;
                    this.password = password;
                }
                return Address;
            }());
            exports_1("Address", Address);
        }
    };
});
//# sourceMappingURL=address.js.map