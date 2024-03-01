import React from 'react'
import "./Style.css"
import { useState, useEffect } from 'react'
const getLocalData=()=>{
    const list = localStorage.getItem("MyToDo");
    if(list)
    return JSON.parse(list);
    else{
        return [];
    }
}
function Todo() {
    const [inputdata,setInputData] = useState("");
    const [items,setItems]=useState(getLocalData());
    const addItem=()=>{
        if (!inputdata) {
            alert("Enter value !!");
        } else {
            const myNewInputData={
                id: new Date().getTime().toString(),
                name: inputdata,
            };
            setItems([...items ,myNewInputData]  );
            setInputData("");
        }
    }
    const delEle=(index)=>{
        const upDatedValue = items.filter((curElem)=>{
            return curElem.id !== index;
        });
        setItems(upDatedValue);
    }
    const removeall=(myNewInputData)=>{
        setItems([]);
    }
    useEffect(()=>{
        localStorage.setItem("MyToDo",JSON.stringify(items));
    },[items]);
  return (
    <>
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src='https://cdn-icons-png.flaticon.com/128/15022/15022044.png' alt='todo-img'/>
                <figcaption>
                    Add your list here👍
                </figcaption>
                    <figure>
                        <div className='addItems'>
                            <input type='text' placeholder='✍️'
                            className='form-control'
                            value={inputdata}
                            onChange={(e)=>{
                                setInputData(e.target.value)
                            }}
                            />
                            <i className="fa  fa-plus add-btn" onClick={addItem}></i>
                        </div>
                        <div className='showItems'>
                            {items.map((curElem) => {
                                return(
                                <div className='eachItem' key={curElem.id}>
                                  <h3>{curElem.name}</h3>
                                    <div className='todo-btn'>
                                    
                                    <i className="far  fa-trash-alt add-btn" onClick={()=>delEle(curElem.id)}></i>
                                </div>
                            </div>);
                            })}
                            
                        </div>
                        <div className='showItems'>
                            <button className='btn effect04' data-sm-link-text="Remove ALL" onClick={()=>removeall()}>
                                <span>checked list</span></button>

                        </div>
                    </figure>
            </figure>
        </div>
    </div>
    </>
  )
}

export default Todo