const strlength = (str) => {
    if (str.length < 1 || str.length > 10) {
        throw 'String length should be between 1 and 10';
    }
    var cnt=0;
    str.split('').forEach(element => {
       cnt+=1; 
    });
    return cnt;
}
module.exports = strlength;

