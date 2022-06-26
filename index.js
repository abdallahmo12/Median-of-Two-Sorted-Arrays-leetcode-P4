// Q2
// var twoSum = function(nums , target) {
//     for(let i=0 ; i<nums.length ; i++)
//     {
//         if(nums[i]+nums[i+1] == target)
//         {
//             console.log([i,i+1]);
//             break;
//         }
//     }
// };
// twoSum([2,7,11,15],9);

// Q4
// var searchRange = function(nums, target) {
//     var arr =[-1,-1];
//     var counter =0 ;
//     for(var i = 0 ; i < nums.length ; i++ )
//     {
//         if(nums[i] == target && nums.length==1)
//         {
//             arr=[0,0];
//         }
//         else if(nums[i] == target)
//         {
//             arr=[...arr,i];
//         }
//     }
//     if(arr.length > 2)
//     {
//         arr = arr.filter(el => el != -1)
//         if(arr.length ==1)
//         {
//             arr=[...arr,arr[0]];
//         }
//         else if(arr.length > 2)
//         {
//             arr=[arr[0],arr[arr.length-1]];
//         }
//     }
//     console.log(arr);
// };

// searchRange([3,3,3,3,3,3,3],3);

// Q5
// var strStr = function(haystack, needle) {
//     console.log(haystack.indexOf(needle));
// };

// strStr("aaaaa","");

//Q6
// var longestCommonSubsequence = function(text1, text2) {
//     const table = Array.from({length:text1.length+1},()=> new Array(text2.length+1).fill(''));
//     for(var i =1; i<table.length;i++)
//     {
//         for(var j =1 ;j<table[i].length ; j++)
//         {
            
//             if(text1[i-1]==text2[j-1])
//             {
//                 table[i][j]=table[i-1][j-1]+text1[i-1]; 
//             }
//             else{
//                 let above = table[i-1][j];
//                 let left = table[i][j-1];

//                 table[i][j] = above.length > left.length ? above : left;
//             }
//         }
//     }
//     return table[text1.length][text2.length].length;
// };
// longestCommonSubsequence('abc' , 'def');

//Q7
// var isAnagram = function(s, t) {
//     s=s.split('');
//     s=s.sort();
//     s=s.join('');
//     t=t.split('');
//     t=t.sort();
//     t=t.join('');
    
//     return s==t ? true : false
// };
// console.log(isAnagram('aefddf','ffddea'));

//Q8
// var relativeSortArray = function(arr1, arr2) {
//     var temp = [];
//     arr2.forEach(element => {
//         temp = [...temp ,...arr1.filter(el => el == element)];
//     });
    
//     // console.log(arr1.filter(el => !arr2.includes(el)));

//     return temp = [...temp,...arr1.filter(el => !arr2.includes(el))];
// };
// relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]);

// technical Assessment

// function computeClosestToZero (ts){
//     tempretures = differences(ts);
//     tempretures.sort((a , b) => a.val-b.val);
//     let closestToZero = tempretures[0];
//     closestToZero.typ == 'p' ? console.log(closestToZero.val):console.log(-closestToZero.val);
// }

// const differences = (t) => {
//     return t.map(el =>{
//         if(el > 0){
//             return {val: Math.abs(el),typ: 'p'}
//         }
//         else{
//             return {val: Math.abs(el),typ: 'n'}
//         }
//     });
// }

// computeClosestToZero([20,30,20,-1,-3]);

// Q add two Numbers
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// var addTwoNumbers = function(l1, l2) {
//     let carry = 0;
//     let previuosNode = new ListNode();
//     const headNode = previuosNode;
//     while(l1 || l2 || carry){
//         let v1 = 0;
//         let v2 = 0;
//         if(l1){
//             v1 = l1.val;
//             l1 = l1.next;
//         }
//         if(l2){
//             v2 = l2.val;
//             l2 = l2.next;
//         }
//         const sum = v1 + v2 + carry;
//         carry = Math.floor(sum/10);
//         const digit = sum % 10;
//         // console.log(`${v1}`);
//         const currentNode = new ListNode(digit);
//         previuosNode.next = currentNode;
//         previuosNode = currentNode;
//     }  
//     console.log(headNode.next);
//   };
//   addTwoNumbers([1,3,6],[4,2,2]);

var findMedianSortedArrays = function(nums1, nums2) {
    let index_Med ,index1,index2, median;
    let num1,num2;
    let computedArr = [...nums1 , ...nums2];
    computedArr = computedArr.sort((a,b) => a-b);
    console.log(computedArr);
    if(computedArr.length % 2 != 0)
    {
        index_Med = Math.floor(computedArr.length / 2);
        median = computedArr[index_Med];
    }
    else{
        index1 =Math.floor(computedArr.length /2);
        index2 =index1-1;
        num1 = computedArr[index1];
        num2 = computedArr[index2];
        // var sum = num1 + num2;
        median = (num1 + num2) / 2 ;
    }
    // console.log(median);
    return median;
};
findMedianSortedArrays([1,3],[2]);
findMedianSortedArrays([1,2],[3,4]);
var element = document.getElementById('result');
element.innerHTML = `
<div>${findMedianSortedArrays([1,3],[2])}</div>
<div>${findMedianSortedArrays([1,2],[3,4])}</div>
`;


