//TODO: Please write code in this file.
function printInventory(inputs) {
    var paid=0,print='',free='',save= 0;
    for(var i=0;i<inputs.length;i++){
        inputs[i]+='-1';
        var arr=inputs[i].split('-',2),c=0;
        var n=_.findLastIndex(loadAllItems(), {
            'barcode': arr[0]
        });                                                        //寻找购物车商品的的本地序列n
        paid+=(loadAllItems()[n]).price*arr[1];                    //小计
        if((_.first(inputs,i)).indexOf(inputs[i])!=-1){continue}   //排除之后相同产品对计数影响
        var count=num(i,arr,inputs);                               //商品计数
        var sjcount=count;
        if(count>=3 && loadPromotions.call()[0].barcodes.indexOf(arr[0])!=-1 ){
            c=parseInt(count/3);paid-=c*loadAllItems()[n].price;sjcount=count-c;
            free+='名称：'+loadAllItems()[n].name+'，数量：'+c+loadAllItems()[n].unit+'\n';
            save+=c*loadAllItems()[n].price
        }                                                           //免费购物单
        print+=funprint(count,sjcount,n);                           //购物清单
    }
        out(print,paid,free,save);                                  //输出购物单
}