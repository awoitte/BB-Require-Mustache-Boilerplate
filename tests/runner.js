require([
    '../js/requireConfig'
], function(Config) {
    require.config(Config);
    require.config({
        baseUrl: "../js"
    });

     var specs = [
        "List",
    ];

    for (var i = specs.length - 1; i >= 0; i--) {
        specs[i] = "../tests/specs/" + specs[i] + ".js";
    };

    specs.unshift("jquery");

    require(specs, function ($) {
        $(".alert").html("");
        $(".duration").remove();

        for( var i in arguments ) {
              arguments[i]();
            }

        jasmine.getEnv().execute();
    });
});
