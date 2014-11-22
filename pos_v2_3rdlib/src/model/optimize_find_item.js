/**
 * Created by zengpuyang on 14-11-12.
 */
function FindItem(item_code){
    var code=_.findLastIndex(loadAllItems(), {
        'barcode': item_code
    });
    return loadAllItems()[code]
}
function group_input(inputs_){
    var group_Items= _.toArray(_.groupBy(inputs_,function(code){
        return code
    }));
    _.map(group_Items,function(codes){
        if(codes[0].length==10){
            codes[0]=[codes[0],codes.length]
        }
        else{
            codes[0]=[codes[0].substr(0,10),codes[0].substr(11)*codes.length]
        }
    });
return group_Items
}
