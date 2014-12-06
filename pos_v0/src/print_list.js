function Print_List(){

}
Print_List.put_seal_shopping=function(inputs){
    var pay=0;
    var prime_out_put='';
    for(var i=0;i<inputs.length;i++){
        var min_pay=inputs[i].count*inputs[i].price;
        prime_out_put+='名称：'+inputs[i].name+'，数量：'+inputs[i].count+
            inputs[i].unit+'，单价：'+inputs[i].price.toFixed(2)+'(元)，小计：'+min_pay.toFixed (2)+'(元)\n';
        pay+=min_pay}
    return [prime_out_put,pay]
};
Print_List.out= function (lists_pay) {
    console.log('***<没钱赚商店>购物清单***\n'+
        lists_pay[0]+
        '----------------------\n' +
        '总计：'+lists_pay[1].toFixed(2)+'(元)\n' +
        '**********************')

};
