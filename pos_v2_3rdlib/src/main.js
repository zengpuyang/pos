//TODO: Please write code in this file.
function printInventory(inputs) {
    var price=0,out_put='',free_item='',free_item_price= 0;
    for(var index=0;index<inputs.length;index++){
        inputs[index]+='-1';
        var split_item=inputs[index].split('-',2),count=1,free_item_count=0;
        var nowItem=FindItem(split_item[0]);
        price+=(nowItem.price*split_item[1]);
        if((_.first(inputs,index)).indexOf(inputs[index])!=-1){continue}
        for(var j=index+1;j<inputs.length;j++){
            if(split_item[0]==inputs[j]){
                count+=1
            }
        }
        count+=split_item[1]-1;
        var pay_item_count=count;
        if(if_free(split_item[0],count)==true){
            free_item_count=parseInt(count/3);
            price-=free_item_count*nowItem.price;
            pay_item_count=count-free_item_count;
            free_item+='名称：'+nowItem.name+'，数量：'+free_item_count+nowItem.unit+'\n';
            free_item_price+=free_item_count*nowItem.price
        }
        out_put+='名称：'+nowItem.name+'，数量：'+count+nowItem.unit+'，单价：'+
            nowItem.price.toFixed(2)+'(元)，小计：'+(nowItem.price*pay_item_count).toFixed(2)+'(元)\n';
    }
    console.log('***<没钱赚商店>购物清单***\n'+
        '打印时间：'+moment().format('YYYY[年]MM[月]DD[日] HH:mm:ss')+'\n'+
        '----------------------\n' +
        out_put+
        '----------------------\n'+
        '挥泪赠送商品：\n'+
        free_item+
        '----------------------\n'+
        '总计：'+price.toFixed(2)+'(元)\n'+
        '节省：'+free_item_price.toFixed(2)+'(元)\n'+
        '**********************')
}