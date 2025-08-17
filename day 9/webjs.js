const con = document.getElementById('container')
const arr=["./assets/1st.png",
    "./assets/2nd.png",
    "./assets/3rd.png",
    "./assets/4th.png",
    "./assets/5th.png",
    "./assets/6th.png"
    ]
    let i=1;
    let changeimg=()=>{
         i++;
        if(i==6)
        {
            i=0;
        }
         con.style.backgroundImage=`url('${arr[i]}')`;
        }

    
    let leftside=()=>{
        i--;
        if(i==-1)
        {
            i=4;
        }
         con.style.backgroundImage=`url('${arr[i]}')`
    }

    let change=(a)=>{
         con.style.backgroundImage=`url('${arr[a]}')`
    }

    setInterval (changeimg,2000)
        
    
        
        
