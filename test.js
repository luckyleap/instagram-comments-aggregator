<html>
<body>
    <script>
        var token_str = window.location.hash.split("=")[1];
        // var url = 'https://api.instagram.com/v1/users/self/?access_token='+token;
        // Send access token back to route
        httpReq = new XMLHttpRequest();
        httpReq.open('POST', 'http://localhost:3000/send', true);

        httpReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var token_obj = {token: token_str};
        httpReq.send(JSON.stringify(token_obj));
        $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback', function(data) {
    //data is the JSON string
            console.log(data);
        });
    </script>

</body>
</html>
