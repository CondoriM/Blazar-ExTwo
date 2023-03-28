// Problem 1 Arrays - DS

function reverseArray(a) {
    return a.reverse();

}

// Problem 2 Simple Array Sum

function simpleArraySum(ar) {
    let res = 0;
    
    ar.forEach(i => {
    res += i;
    });
    
    return res
}

// Problem 3 Staircase

function staircase(n) {
    let stairs = "";
    
    for(let i=1 ; i <= n; i++){
        
        // space before #
        for (let s = n - 1; s >= i; s--) {
            stairs += ' '
        }
        
        // y vertical axis of the height of the staircase
        for(let y = 1; y <= i; y++){
            stairs += "#";
        }
        
        stairs += "\n";
    }
    
    console.log(stairs);
}