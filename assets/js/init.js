var init_script_path = document.currentScript ?
    document.currentScript.src :
    $("script[src$=\"/init.js\"]").last().attr("src");
$(function() {
    var init_script_dir = init_script_path.replace(new RegExp("/+[^/]*$"), "");
    $.getJSON(init_script_dir + "/../../config.json").then(function(config) {

        $("a[data-shop-href]").each(
            /**
             * @param {number} i
             * @param {HTMLAnchorElement} e
             */
            function(i, e) {
                var url = config.shopUrl;
                e.href = url + e.dataset.shopHref;
            }
        )

        $("form[data-shop-action]").each(
            /**
             * @param {number} i
             * @param {HTMLFormElement} e
             */
            function(i, e) {
                var url = config.shopUrl;
                e.action = url + e.dataset.shopAction;
            }
        )
    });
});