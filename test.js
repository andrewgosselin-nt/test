$( document ).ready(function() {
    console.log( "ready!!!!" );
    sadasd
    $('#userChangeSelect').on('change', function (element) {
        $.ajax({
            url: "/apps/ntsso/ssobridge/changeUser/" + this.value,
            type: 'GET',
            contentType: 'application/json'
        }).done(function (users) {
            window.location.href="/apps/ntsso/ssobridge/login";
        }).fail(function (response, code) {
            console.log("error", response);
        });
    });
});
