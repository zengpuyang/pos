/**
 * Created by zengpuyang on 14-11-19.
 */
 function payitem_out(input){
    var out_put='',prime_cost=0,payCost=0;
    for(var num=0;num<input.length;num++) {
        var item_count=input[num][0][1],Code=input[num][0][0];
        var nowItem=FindItem(Code),minPay=(item_count-parseInt((item_count)/3))*nowItem.price;
        prime_cost+=nowItem.price*item_count;
        payCost+=minPay;
        out_put+='名称：'+nowItem.name+'，数量：'+item_count+nowItem.unit+'，单价：'+
                 nowItem.price.toFixed(2)+'(元)，小计：'+minPay.toFixed(2)+'(元)\n';
    }
    return [out_put,payCost.toFixed(2),prime_cost-payCost]
 }