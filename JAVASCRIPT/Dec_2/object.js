// objects

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

// console.log(userDetails.firstName);
// console.table(userDetails)

// userDetails.buyCourse("react");
// userDetails.buyCourse("node");
// userDetails.buyCourse("css");
// console.log(userDetails.getCount());

// console.log(Object.keys(userDetails));
// console.log(Object.values(userDetails));

console.log(userDetails.hasOwnProperty("firstName"));