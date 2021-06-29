import React, {useState,useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';

const Card = () =>{

    let newTime = new Date().toLocaleTimeString();
  const [ctime,setCtime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

//   For Continuous running time (digitalClock)
//   setInterval(UpdateTime,1000);
     
    const [num,setNum] = useState(0);

    const IncNum = () => {
        setNum(num + 1);
    }
    const DecNum = () => {
        if(num > 0){
        setNum(num - 1);
        }
        else{
            alert('Zero limit reached!');
            setNum(0);
        }
    }
    useEffect(() => {
        alert("Hi, Welcome to React Hook!!");
        // document.title = `you clicked ${num} times`;
    }, [])
    return(
        <>
        <div className="main_div">  
            <div className="center_div">
                {/* Live Running Time */}
                {/* <h1> {ctime} </h1> */}
                <h2> {ctime} </h2>
                <button className="click" onClick={UpdateTime}>Get Current Time</button>
                <h1>{num}</h1>
                <div className="btn_div">
                    <Button onClick={IncNum} className="btn_green"><AddIcon /></Button>
                    <Button onClick={DecNum} className="btn_red"><RemoveIcon /></Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;