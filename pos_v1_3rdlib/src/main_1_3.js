function printInventory(inputs) {
    var inputs_with_method=item_handled(inputs);
    var receipt_list=item_receipt_lists(inputs_with_method);
    var result='***<没钱赚商店>购物清单***\n'+
        receipt_list.receipt_all+
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        receipt_list.receipt_free+
        '----------------------\n' +
        '总计：'+receipt_list.total+'(元)\n' +
        '节省：'+receipt_list.save +'(元)\n' +
        '**********************';
    console.log(result)
}