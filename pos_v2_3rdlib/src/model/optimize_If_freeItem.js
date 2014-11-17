/**
 * Created by zengpuyang on 14-11-17.
 */
function if_free(code,item_count) {
    var Is=false;
    if(item_count>=3 && loadPromotions.call()[0].barcodes.indexOf(code)!=-1 ){
        Is=true;
    }
    return Is
}