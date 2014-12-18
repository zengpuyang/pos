function item_methods(inputs){
    return _.chain(inputs)
        .groupBy(function(code){return code.substr(0,10)})
        .toArray()
        .map(function (code_array) {
            var count=(code_array[0].length==10?code_array.length:item_special_count(code_array));
            _.chain(loadAllItems())
                .filter(function(codes){return codes.barcode==(code_array[0]).substr(0,10)})
                .map(function(codes){
                    codes.count = count;
                    codes.subtotal = (codes.count * codes.price);
                    code_array[0] = codes
                });
            return code_array[0]
        }).value()
}
function item_special_count(special_item_code_array){
    return _.reduce(special_item_code_array,function(code1,code2){
        return code1+parseInt(code2.substr(11))
    },0)
}
function item_receipt_lists(inputs_with_method){
    var total= 0,save= 0,receipt_all='',receipt_free='';
    _.each(inputs_with_method,function(item){
        if(item.count>2){
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