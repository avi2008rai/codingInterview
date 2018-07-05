var possiblePaths = 0;
var x = 4;
var stepsArr = [1,2];
var maxPossiblility = stepsArr.length * x;
var next = 0;

for(i=0;i<maxPossiblility;i++){

    var step=0;
    if(stepsArr[i]<=x){
        for(y=0;y<x;y++){
            console.log(step, ' + ', stepsArr[i])
            if(x-step >= stepsArr[i]){
                step = step + stepsArr[next];
            }
            console.log('Result: ', step);

            if(step == x){
                possiblePaths++;
                next++;
                step=0;
            }

        }
    } else{
        console.log('Steps are should be more than higest stair');
    }
}
console.log('possiblePaths', possiblePaths);

   