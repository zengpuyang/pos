/**
 * Created by zengpuyang on 14-11-12.
 */
function FindItem(item_code){
    var code=_.findLastIndex(loadAllItems(), {
        'barcode': item_code
    });
    return loadAllItems()[code]
}