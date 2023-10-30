let acc = document.getElementsByClassName('accordion');

console.log(acc[0])
console.log(acc.length) //몇개의 호수가 있는지 출력됨, 배열할 땐 항상 이것을 씀

//For(①; ②; ④){
//   ③
//}
for(let i=0; i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        console.log(i)
    })
} //배열할 땐 강제로 3 못줌, i를 나갈 때 하나 더함