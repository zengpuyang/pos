function item_handled(inputs){
    return _.chain(inputs)
        .map(function(code){return code+'-1'})
        .groupBy(function(code){return code.substr(0,10)})
        .toArray()
        .map(function(codes){
            return {
                barcode:codes[0].split('-',2)[0],
                count: _.reduce(codes,function(code1,code2){
                    return code1+parseInt(code2.split('-',2)[1])
                },0)
            }
        })
        .each(function(code){
            var code_method=_.filter(loadAllItems(),function(item){return item.barcode==code.barcode});
                code.name=code_method[0].name;
                code.unit=code_method[0].unit;
                code.price=code_method[0].price;
                code.subtotal=code_method[0].price*code.count
        })
        .value()
}
function item_receipt_lists(inputs_with_method){
    var total= 0,save= 0,receipt_all='',receipt_free='';
    _.each(inputs_with_method,function(item){
        if(item.count>2 && loadPromotions()[0].barcodes.indexOf(item.barcode)!=-1){
            var save_count=parseInt(item.count/3);
            receipt_free+='名称：'+item.name+'，数量：'+save_count+item.unit+'\n';
            item.subtotal-=save_count*item.price;
            save+=save_count*item.price
        }
        receipt_all += '名称：'+item.name+'，数量：'+item.count+item.unit+
            '，单价：'+item.price.toFixed(2)+'(元)，小计：'+item.subtotal.toFixed(2)+'(元)\n';
        total += item.subtotal
    });
    return {
        receipt_all: receipt_all,
        receipt_free:receipt_free,
        total:total.toFixed(2),
        save:save.toFixed(2)
    }
}