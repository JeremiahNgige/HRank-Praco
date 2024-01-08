function nonDivisibleSubset(k, s) {
    // Write your code here
    var count;
    var SArray = [];
    var sArray2 = [];
    for(var i = 0;i<s.length;i++){
        for(var j = 0;j<s.length;j++){
            SArray.push(((i+j)%k !==0)?s[i]:'a');
        }
   
    }
    for (var n =0; n<SArray.length; n++){
        if(SArray[n] !== 'a'){
            sArray2.push(SArray[n]);
        }
    }

    let newSArray = [... new Set(sArray2)];
    count = newSArray.length+1;
    console.log(newSArray);
    
    return Sa;

}