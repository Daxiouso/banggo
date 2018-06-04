require.config({
    paths: {
        'jquery': 'jquery-3.2.1',
        'xheader': '../extends/xheader/xheader',
        'xfloor': '../extends/xfloor/xfloor',
        'xZoom':'jquery.xZoom',
        'common':'common',
        'goods':'goods'
    },
    shim:{
        'goods':['jquery'],
        'xZoom':['jquery'],
        'goods':['xzoom'],
        'goods':['common'],
        'goods':['xheader']
    }
});


require(['jquery','xheader','xZoom','xfloor','common','goods'],function($,xheader,xZoom,xfloor){
    $("xheader").xheader();
    $('.bigPicZoom').xZoom({
                height:500,
                width:400,
                left:606,
                top:300
            })
            
    $("xfloor").xfloor();
});