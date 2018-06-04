jQuery.fn.extend({
    xheader:function(){
        return this.each(function(){
            //html
            $.ajax({
                type:"get",
                url:"../extends/xheader/xheader.html",
                success:function(data){
                    $(this).html(data);
                }.bind(this)
            });


            $.ajax({
                type: "get",
                url: "../extends/xheader/usr.js",
                success: function(data) {
                    $("body script").append(data)
                }.bind(this)
            });


        })
    }
});