var mysql = mysql.createConnection({
    host:"remotemysql.com",
    user:"alizzze20",
    password:"yopisthebestyoplaitdrink",
});

confirm.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});