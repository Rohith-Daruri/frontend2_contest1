const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i=0;i<data.length;i++){
      if(data[i].profession=="developer"){
        console.log(data[i].name);
      }
    }
  }
  
  // 2. Add Data
  function addData() {
    let new_name = prompt("Enter name");
    let newaccount = {name:new_name};
    newaccount.age = prompt("Enter age");
    newaccount.profession = prompt("Enter profession");
    data.push(newaccount);
    
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i=0;i<data.length;i++){
      while(data[i].profession=="admin"){
        data.slice(i,1);
      }
    }
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const data1 = [
      { name: "john", age: 24, profession: "developer" },
      { name: "jane", age: 27, profession: "admin" },
    ];
    console.log(data.concat(data1));
  }
  
  // 5. Average Age
  function averageAge() {
    let sum =0;
    for(let i=0;i<data.length;i++){
      sum = sum+data[i].age;
    }
    console.log(sum/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let val =false;
    for(let i=0;i<data.length;i++){
      if(data[i].age>25){
        val = true;
        break;
      }
    }
    console.log(val);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
   let a = [];
   for(let i=0;i<data.length;i++){
    a.push(data[i].profession);
   }
   let ans = Array.from(new Set(a));
   console.log(ans);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>{
      return a.age-b.age;
    });
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i=0;i<data.length;i++){
      if(data[i].name=="john"){
        data[i].profession = "Doctor";
        break;
      }
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let dev = 0;
    let adm = 0;
    for(let i=0;i<data.length;i++){
      if(data[i].profession=="developer"){
        dev++;
      }
      else if(data[i].profession=="admin"){
        adm++;
      }
      else{
        continue;
      }
    }
    console.log("developers"+" "+dev);
    console.log("admins"+" "+adm);
  }
  