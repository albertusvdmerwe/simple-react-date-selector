export const deepClone=function(jsObject:object):object{
    return JSON.parse(JSON.stringify(jsObject));
}