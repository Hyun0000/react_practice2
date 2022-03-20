let data = 
[
    {
        id : 1,
        title : "Red Knit",
        content : "Born in Seoul",
        price : 110000
    },
    {
        id : 2,
        title : "Grey Yordan",
        content : "Born in the States",
        price : 130000
    },
    {
        id : 0,
        title : "White and Black",
        content : "Born in France",
        price : 120000
    }
];

// [
//     {
//         id : 0,
//         title : "White and Black",
//         content : "Born in France",
//         price : 120000
//     },
//     {
//         id : 1,
//         title : "Red Knit",
//         content : "Born in Seoul",
//         price : 110000
//     },
//     {
//         id : 2,
//         title : "Grey Yordan",
//         content : "Born in the States",
//         price : 130000
//     }
// ];



export default data;
// export default는 한 파일당 딱 한번만 사용 가능
// export default는 보통 맨 밑줄에 작성

var name1 = 'Kim';
var name2 = 'Park';

export {name1, name2}

var name3 = "Lee";
export {name3};
// 설사 1개의 변수만 export 하더라도 {중괄호}는 반드시 써야한다.(안쓰면 error 발생)

