function item_method_subtotal(inputs){
    return _.map(_.toArray(_.groupBy(inputs, function (code) {
        return code.barcode
    })), function (code) {
        code[0].subtotal = (code.length * code[0].price);
        code[0].count=code.length;
        return code[0]
    });
}
function item_receipt(curt_inputs){
    var total= 0,receipt='';
    _.each(curt_inputs,function(item){
        receipt+= '名称：'+item.name+'，数量：'+item.count+item.unit+
            '，单价：'+item.price.toFixed(2)+'(元)，小计：'+item.subtotal.toFixed(2)+'(元)\n';
        total+=item.subtotal
    });
    return{
    receipt:receipt,
    total:total.toFixed(2)}
}