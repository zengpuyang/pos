//TODO: Please write code in this file.
function printInventory(inputs){
    var zongji=0;
    var shuchu='';
    for(var i=0;i<inputs.length;i++){
        var xiaoji=inputs[i].count*inputs[i].price;
        shuchu+='名称：'+inputs[i].name+'，数量：'+inputs[i].count+
            inputs[i].unit+'，单价：'+inputs[i].price.toFixed(2)+'(元)，小计：'+xiaoji.toFixed (2)+'(元)\n';
            zongji+=xiaoji}
    console.log('***<没钱赚商店>购物清单***\n'+
            shuchu+
            '----------------------\n' +
              '总计：'+zongji.toFixed(2)+'(元)\n' +
            '**********************')
}
