'use client'
import { Button } from '@mui/material';
//1 Import area
import React, { useEffect, useState } from 'react'


//2. Define area
function page() {
    //2.1 Hooks area
    const [name4,setName4] = useState('Rahul');// Hook 1
   
    useEffect( ()=>{ // Hook 2
        console.log(`Hello ${name4}, The Page loaded successfull now you can do anything `)
    }, []);

     //2.2 function definatio area
    const anil = ()=>{
        console.log("Hello");
        let x = prompt("Please Enter your name?");
        console.log(x);
        setName4(x);
    }

    //2.3 Function returning JSX
    return (
        <>  
            <div>Hello {name4}</div>
            <div>This is a test page</div>
            <Button variant="contained" onClick={()=>{ anil() }}>Enter your name</Button>
        </>
    )
}

//3. Export
//3.1 default Export
export default page; 