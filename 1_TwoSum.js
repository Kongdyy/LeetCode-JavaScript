/**
 * 
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，
并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */


var nums =[2,7,11,8,15,4];
var target = 19;

/**
 * 方法一 基本的双for循环
 * arr保存数组
 * arrs保存下标
 * 从第一个元素开始与其他每个元素相加，如果等于目标，就返回下标值
 */
var firstTwoSum = function(nums,target){
    
    let arr = nums;
    let arrs = new Array();
    for(var i = 0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                arrs.push(i,j);
                return arrs;
            }
        }
    }   
   
}

var start = new Date().getTime();
console.log(firstTwoSum(nums,target));
var end = new Date().getTime();
console.log(end-start);
console.log("-------------")

/**
 * 通过减法保存每个数字要找的值是什么
 *  查看映射池是不是要被找的数，
 *  如果不是那我就保存我要找的数
 *  找到了即返回
 * 
 */
var secondTwoSum = function(nums,target){
  
    let res={};
    for(let i=0;i<nums.length;i++)
    {
        if(res[i]!==undefined){
            return [res[nums[i]],i];
        }
        else{
            res[target-num[i]] = i;
        }
    }
}

var start = new Date().getTime();
console.log(secondTwoSum(nums,target));
var end = new Date().getTime();
console.log(end-start);
console.log("-------------");