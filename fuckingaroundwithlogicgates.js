
function halfAdder(A,B){
  let sum = xor(A,B);
  let carry = and(A,B);
  return [carry,sum];
}

function fullAdder(A,B,C){
  let sum = xor( xor(A,B), C);
  let carry = or( and( xor(A,B), C), and(A,B));
  return [carry,sum];
}

function fourBitfFullAdder(A,B,C){
  if(A.length != 4 || B.length != 4) return
  
  let sum1 = xor( xor(A[3],B[3]), C);
  let carry1 = or( and( xor(A[3],B[3]), C), and(A[3],B[3]));
  
  let sum2 = xor( xor(A[2],B[2]), carry1);
  let carry2 = or( and( xor(A[2],B[2]), carry1), and(A[2],B[2]));
  
  let sum3 = xor( xor(A[1],B[1]), carry2);
  let carry3 = or( and( xor(A[1],B[1]), carry2), and(A[1],B[1]));
  
  let sum4 = xor( xor(A[0],B[0]), carry3);
  let carry4 = or( and( xor(A[0],B[0]), carry3), and(A[0],B[0]));
  
  
  
  return [carry4,sum4,sum3,sum2,sum1];
}


function and(A,B){
  if(A === 1 && B==1){
    return 1;
  } else {
    return 0;
  }
}

function or(A,B){
  if(A === 1 || B === 1){
    return 1;
  } else {
    return 0;
  }
}

function xor(A,B){
  if(A === B){
    return 0;
  } else {
    return 1;
  }
}

const a=[1,1,1,1];
const b=[1,1,1,1];
const c=1;

console.log(fourBitfFullAdder(a,b,c))




