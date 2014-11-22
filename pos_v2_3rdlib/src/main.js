//TODO: Please write code in this file.
function printInventory(inputs) {
    var nowItem=group_input(inputs);
    console.log('***<没钱赚商店>购物清单***\n'+
        '打印时间：'+moment().format('YYYY[年]MM[月]DD[日] HH:mm:ss')+'\n'+
        '----------------------\n' +
        payitem_out(nowItem)[0]+
        '----------------------\n'+
        '挥泪赠送商品：\n'+
        if_free(nowItem)+
        '----------------------\n'+
        '总计：'+payitem_out(nowItem)[1]+'(元)\n'+
        '节省：'+payitem_out(nowItem)[2].toFixed(2)+'(元)\n'+
        '**********************')
}