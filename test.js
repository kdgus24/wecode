function getEven() {
    let arrNum = [];

    for(i=1; i<=50; i++){
        if(i % 2 === 0){
            arrNum.push(i)
        }else{
            continue;
        }
    }
    return arrNum;
}