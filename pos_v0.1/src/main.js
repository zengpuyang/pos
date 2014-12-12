function printInventory(inputs) {
    var new_inputs=item_add_min_pay(inputs);
    var receipt_list=item_receipt(new_inputs);
    var result='***<没钱赚商店>购物清单***\n'+
        receipt_list.receipt+
        '----------------------\n' +
        '总计：'+receipt_list.total_money+'(元)\n' +
        '**********************';
    console.log(result)
 }