import React ,{useState , useEffect} from 'react'

export default function Citytime({city}) {
  
    const [time , setTime] = useState (new Date());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date())
        },1000);

        return()=>{
            clearInterval(timer)
        }
    },[]);
    const formattedTime= time.toLocaleTimeString(
        "en-US" ,
        {
            timeZone : city.timezone,
            // hour12: flase,
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit",

        }
    );

  return (
    <div>
        <h2>{city.name}</h2>
        <h1>{formattedTime}</h1>
    </div>
  )
}
