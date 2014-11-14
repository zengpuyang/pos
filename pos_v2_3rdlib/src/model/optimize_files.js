/**
 * Created by zengpuyang on 14-11-12.
 */
function funprint(count,sjcount,n){             //count:总数量；sjcount:需要付钱的商品数量；n:查找的本地商品序号
    return '名称：'+loadAllItems()[n].name+
        '，数量：'+count+loadAllItems()[n].unit+
        '，单价：'+loadAllItems()[n].price.toFixed(2)+
        '(元)，小计：'+(loadAllItems()[n].price*sjcount).toFixed(2)+'(元)\n'
}