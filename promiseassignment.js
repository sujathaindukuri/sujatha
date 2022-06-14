
   let users=[];
  let promise = new Promise(function(resolve, reject) {
  
    
    setTimeout(()=>{ 
    
    users=[ 
    
     {userName: 'john', email:'abc@com.com'}, 
    
     {userName: 'Kevin', email:'kbc@com.com'}, 
    
    ];
    if(users !=null)
     {
        
     resolve(users);
     }
    else{
        reject("no data");
    }
    
     }, 1000) ;
     
    } )
 

 const findUser = (userName)=> { 
    

   promise.then((value) => { 
    
     const user = value.find((user) => user.userName === userName); 
    console.log(user);
      
    
     });
     promise.catch(err=>{console.error({err});});
 };
 
    
    findUser('Kevin');
    