let u = 50;
let v = 104;
let l = 600;
let prev_t = undefined;
// modelling accleration
for(let a = 4;a<14;a++){
    s = (v**2-u**2)/ (2*a);
    t1 = (v - u) / a;
    t2 = (l - s) / v;
    t = t1 + t2;
    if (prev_t != undefined) {
    console.log(a, prev_t - t);
}
prev_t = t;
    
}
// x - y (where x is acceleration and y is time gained from perviosu result)


// add drag force
for(let a2 = 4;a2<14;a2++){
    N = 700 * a2;
    a3 = (N-3000)/700;
    s = (v**2-u**2)/ (2*a3);
    t1 = (v - u) / a3;
    t2 = (l - s) / v;
    t = t1 + t2;
    if (prev_t != undefined) {
    console.log(a2, prev_t - t);
}
prev_t = t;

}

