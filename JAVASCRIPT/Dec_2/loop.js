// for in with array
// for of with object

let userDetails = {
    firstName: "sumukha",
    lastName: "sureban",
    googleLogin: true,
    loginCount: 25,
    courseList: [],

    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },

    getCount : function(){
        return `Sumukha Sureban course : ${this.courseList.length}`;
    }
};

for(const i in userDetails){
    console.log(userDetails[i],i);
}