/* Created by zengpuyang on 14-11-10.*/
function out(print,paid,free,save){ console.log('***<没钱赚商店>购物清单***\n'+
    '打印时间：'+moment().format('YYYY[年]MM[月]DD[日] HH:mm:ss')+'\n'+
    '----------------------\n' +
    print+                                                                //print：需输出的购物清单
    '----------------------\n'+
    '挥泪赠送商品：\n'+
    free+                                                                 //free：免费的商品数量
    '----------------------\n'+
    '总计：'+paid.toFixed(2)+'(元)\n'+                                     //paid：总需支付的钱
    '节省：'+save.toFixed(2)+'(元)\n'+                                     //save：节省的钱
    '**********************')}