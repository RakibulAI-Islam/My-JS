const paymentSuccess = true;
const marks = 81;

function enroll()
{ console.log('Course enrollment is in Progress.'); 
  
const promise = new Promise( function( resolve, reject)
{ setTimeout(function(){
    if(paymentSuccess) { resolve();}
    else { reject ('Payment Failed!');} },2000 );
});
    return promise;
}

function progress() 
{ console.log('Course on progress.');

const promise = new Promise( function (resolve, reject)
{setTimeout(function()
{  if (marks >=80) {
   resolve();
    
} else {
    reject('You could not get enough marks to get the Certificate.');
    
   }
}, 3000);
}); 
   return promise;
}   

function getCertificate()
{  console.log('Prepraing your Certificate!');
   
   const promise = new Promise(function(resolve) 
{
    setTimeout(function()
    { resolve('Congates! You get the cettificate');
}, 1000);
});
   return promise; 
}


enroll()
.then( progress)
.then( getCertificate)
.then(function(value)
{ console.log(value);}
)

.catch(function(err)
{ console.log(err); })

