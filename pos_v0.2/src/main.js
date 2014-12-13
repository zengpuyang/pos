function printInventory(inputs) {
    var inputs_with_method=item_method_subtotal(inputs);
    var receipt_list=item_receipt(inputs_with_method);
    var result='***<没钱赚商店>购物清单***\n'+
        receipt_list.receipt+
        '----------------------\n' +
        '总计：'+receipt_list.total+'(元)\n' +
        '**********************';
    console.log(result)
}