function item_add_min_pay(inputs){
    var input_group=_.toArray(_.groupBy(inputs, function (code) {
        return code
    }));
    var new_inputs=[],index=0;
    _.each(input_group, function (code_array) {
        _.each(loadAllItems(),function(codes){
                if(codes.barcode==code_array[0]){
                    codes.count=code_array.length;
                    codes.min_pay = (codes.count * codes.price);
                    new_inputs[index]=codes;
                    index+=1
                }
        });
    });
    return new_inputs
}
function item_receipt(inputs_with_method){
    var total_money= 0,receipt='';
    _.each(inputs_with_method,function(item){
        receipt+= '名称：'+item.name+'，数量：'+item.count+item.unit+
            '，单价：'+item.price.toFixed(2)+'(元)，小计：'+item.min_pay.toFixed(2)+'(元)\n';
        total_money+=item.min_pay
    });
    return {
        receipt: receipt,
        total_money:total_money.toFixed(2)}
}