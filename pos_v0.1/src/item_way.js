function item_add_min_pay(inputs){
    return _.map(_.toArray(_.groupBy(inputs, function (code) {
        return code.barcode
    })), function (code) {
        code[0].min_pay = (code.length * code[0].price);
        code[0].count=code.length;
        return code[0]
    });
}
function item_receipt(new_inputs){
    var total_money= 0,receipt='';
    _.each(new_inputs,function(item){
        receipt+= '名称：'+item.name+'，数量：'+item.count+item.unit+
            '，单价：'+item.price.toFixed(2)+'(元)，小计：'+item.min_pay.toFixed(2)+'(元)\n';
        total_money+=item.min_pay
    });
    return [receipt,total_money.toFixed(2)]
}