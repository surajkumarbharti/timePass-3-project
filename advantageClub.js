// Advantage Club has a unique way of celebrating. Suppose the last celebration was when the
//  number of users was N and the next celebration will happen when the number of users grows to M, 
//  such that N and M have the same digits only in a different order. Ankit is a new joiner and he missed the last celebration, 
//  write a code to help Ankit find M, i.e. the number of users Advantage Club needs to reach for the next celebration. 
//  Example: Input: N = "524976"               
//  Output: M = "526479"Also, mention the Time Complexity of your code

function h(n){
    let f=n.toString().split('').map(Number)
    let r = (f.length)-1
    let rp=f.length-2
    for(i=r;i>=0;i--){
        if(f[r]<f[rp]){
            rp--
        }
        else{
            let t = f[rp];
            f[rp]=f[r];
            f[r]=t ;
            break;
        }
    }
    return f. join('')
}
let n= '524976'
console.log(h(n))
