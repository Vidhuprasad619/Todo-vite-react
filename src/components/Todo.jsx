import React, { useState } from 'react';
import './css/Todo.css';
import trashBin from '../assets/gif/trash-bin.gif';
import pencil from '../assets/gif/pencil.gif';


function Todo() {

    const [item,setItem] = useState('');
    const [list,setList] = useState([]);
    const [editIndex,setEditIndex] = useState(null);

    const handleChange = (e)=>{
        setItem(e.target.value);
    }

    const addItem = ()=>{
        setList([...list,item]);
        setItem('');
    }

    const deleteItem = (index)=>{
        const updatedList = [...list];
        updatedList.splice(index,1);
        setList(updatedList);
    }

    const editItem = (index,editedValue)=>{
        const updatedList = [...list];
        updatedList[index] = editedValue;
        setList(updatedList);
    }

  return (
    <div className='Todo'>
        <div className="container">
            <div className="title-container">
                <h1>Todo List</h1>
            </div>
            <div className="input-container">
                <input type="text" placeholder='type here...' value={item} onChange={handleChange} autoFocus />
                <button onClick={addItem}>Add</button>
            </div>
            {list.map((ele,index)=>{
                return (
                    <div className="list-container" key={index}>
                        {editIndex === index ? 
                            <div>
                                <input type="text" placeholder='type here...' value={ele} onChange={(e)=>editItem(index,e.target.value)} autoFocus />
                            </div> : <p key={index}>{index+1+".  "}{ele}</p>}
                        {editIndex === index ? 
                            <button className='done-btn' onClick={()=>setEditIndex(null)}>Done</button> : 
                            <div className="edit-container">
                                <button onClick={()=>setEditIndex(index)}><img className='pencilgif' src={pencil} alt='edit'></img></button>
                                <button onClick={()=>deleteItem(index)}><img className='bingif' src={trashBin} alt='delete'></img></button>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Todo