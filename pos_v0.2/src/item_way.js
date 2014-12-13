function item_method_subtotal(inputs){
    return _.chain(inputs)
        .groupBy()
        .toArray()
        .map(function (code_array) {
            var count = code_array.length;
            _.chain(loadAllItems())
                .filter(function(codes){return codes.barcode==code_array[0]})
                .map(function(codes){
                    codes.count = count;
                    codes.subtotal = (codes.count * codes.price);
                    code_array[0] = codes
            });
            return code_array[0]
        }).value();
}
function item_receipt(inputs_with_method){
    var total= 0,receipt='';
    _.each(inputs_with_method,function(item){
        receipt += '名称：'+item.name+'，数量：'+item.count+item.unit+
            '，单价：'+item.price.toFixed(2)+'(元)，小计：'+item.subtotal.toFixed(2)+'(元)\n';
        total += item.subtotal
    });
    return {
        receipt: receipt,
        total:total.toFixed(2)}
}