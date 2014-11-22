/**
 * Created by zengpuyang on 14-11-17.
 */
function if_free(array_item_CountCode) {
    var free_item='';
    for(var num=0;num<array_item_CountCode.length;num++){
        var item_count=array_item_CountCode[num][0][1],Code=array_item_CountCode[num][0][0];
        if(item_count>=3 && loadPromotions.call()[0].barcodes.indexOf(Code)!=-1 ){
            var nowItem=FindItem(Code);
            free_item+='名称：'+nowItem.name+'，数量：'+parseInt(item_count/3)+nowItem.unit+'\n';
        }
    }
    return free_item
}