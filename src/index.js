// const func2 = (str) => str;

// console.log(func2("aaaa"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile ={
//   name: "じゃけえ",
//   age:28
// };

// const message1 = `名前は${myProfile.name}です。
// 年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。
// 年齢は${age}です。`;
// console.log(message1);

// const myProfile = ["はああ", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`
// console.log(message4);

/**
 * デフォルト値、引数など
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん。`);
// sayHello();

/**
 * スプレッド構文...
 *
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3)

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4)
// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// const arr8 = arr4;
// console.log(arr4);
// arr8[0] = 100;
// console.log(arr8)

/**
 * mapやfilterを使った配列の処理
 */
//  forを使った場合
const nameArr = ["田中", "山田", "じゃけえ"];

// for (let index = 0 ; index < nameArr.length; index++){
//   console.log(`${index}番目は${nameArr[index]}`);
// };

// 新しく配列を作るパターン
//const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log(nameArr2)

// nameArr.map((name, index) => console.log(`${index + 1}は${name}`));

// //filterについて
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) =>{
//   if (name === "じゃけえ"){
//     return name
//   } else{
//     return `${name}さん`
//   }
// });
// console.log(newNameArr)

/**
 * 三項演算子
 */
// ある条件？　条件がtrueの時：　条件がfalseの時
// const vall = 1 < 0 ? `trueです`: `falseです`;
// console.log(vall);

// const num = 1300;

// const formattedNum = typeof num == `number` ? num.toLocaleString() : `数値を入力して`;
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています": "許容範囲だよ"
// }
// console.log(checkSum(10, 100));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2){
//   console.log("1か2はtrue")
// }

// // ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です"
// console.log(fee)

// // &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました"
// console.log(fee2);
