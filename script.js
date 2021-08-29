const counters=document.querySelectorAll('.counter')
counters.forEach(counter=>{
    counter.innerText='0'

    const updateCounter=()=>{
        //adding + converts type to number
        const target=+counter.getAttribute('data-target')
    // console.log(typeof target,target)

     //previously we set the innerText to 0 at line 3, now we are getting
         const c=+counter.innerText  
         
         //200 value can be changed to any
         const increment=target/200

         if(c<target){
             counter.innerText=`${Math.ceil(c+increment)}`
             setTimeout(updateCounter,1)
         }
         else{
                counter.innerText=target
         }

    }

    updateCounter()
})


//whole logic

//c initial value would be 0
//increment inital value would be 65

// in 1 ms of timeout this addition would happen
//0+65
//65+65
//130+65