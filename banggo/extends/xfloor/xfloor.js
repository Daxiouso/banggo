jQuery.fn.extend({
    xfloor:function(){
        return this.each(function(){
            //html
            $.ajax({
                type:"get",
                url:"../extends/xfloor/xfloor.html",
                success:function(data){
                    $(this).html(data);
                }.bind(this)
            });

        })
    }
});