require.config({
    paths: {
        'jquery': 'jquery-3.2.1',
        'xheader': '../extends/xheader/xheader',
        'xfloor': '../extends/xfloor/xfloor',
        'common':'common',
        'list':'list'
    },
    shim:{
        'list':['jquery'],
        'list':['common'],
        'list':['xheader']
    }
});


require(['jquery','xheader','xfloor','common','list'],function($,xheader,xfloor){
    $("xheader").xheader();
    $("xfloor").xfloor();
})