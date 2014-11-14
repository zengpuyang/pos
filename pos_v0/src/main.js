//TODO: Please write code in this file.
function printInventory(inputs){
    var pa=0;
    var pr='';
    for(var i=0;i<inputs.length;i++){
        var xiaoji=inputs[i].count*inputs[i].price;
        pr+='名称：'+inputs[i].name+'，数量：'+inputs[i].count+
            inputs[i].unit+'，单价：'+inputs[i].price.toFixed(2)+'(元)，小计：'+xiaoji.toFixed (2)+'(元)\n';
            pa+=xiaoji}
    out(pr,pa)
}
