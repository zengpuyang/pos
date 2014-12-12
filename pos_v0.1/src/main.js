function printInventory(inputs) {
    var curt_inputs=item_method_subtotal(inputs);
    var receipt_list=item_receipt(curt_inputs);
    var result='***<没钱赚商店>购物清单***\n'+
        receipt_list.receipt+
        '----------------------\n' +
        '总计：'+receipt_list.total+'(元)\n' +
        '**********************';
    console.log(result)
 }