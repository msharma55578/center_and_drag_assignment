import React, {useState,useReducer}from 'react'
import Header from '../Header/Header';
import './Middle.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function Middle() {
    const [text, setText] = useState('');

    const handleDelete = (state,action) =>{
        let copyAllData = [...state.allData]
        copyAllData.splice(action.index,1);
        return copyAllData
    }

    const reducer = (state,action) =>{
        console.log("state",state)
        console.log("action",action)
        switch (action.type) {
            case 'ADD':
                return {
                    allData:[...state.allData,text]
                }
            case 'DELETE':
                return {
                    allData:handleDelete(state,action)
                };
            default:
                throw new Error();
        }
    }

    const [{data,allData}, dispatch] = useReducer(reducer,{data:'',allData:[]});

    return (
        <div>
            <div className="container">
                {/* <input type="text"  onChange={setText}/> */}
                <Paper elevation={10} className="paper">
                    <Header/>
                    <div className="contentHeadingi">
                        <TextField id="outlined-basic" label="Text" variant="outlined" 
                            onChange={(e)=>{setText(e.target.value)}}
                        />
                        <Button variant="contained" 
                            onClick={()=>dispatch({type:'ADD'})}
                            style={{marginLeft:"2%",height:'55px'}}
                        >
                            Add
                        </Button>
                        <br/>
                        <div style={{border:'solid',display:'inline-block',width:'44%',textAlign:'initial'}}>

                            {allData?.map((data,index)=>(
                                <div key={index} style={{border:'solid red',display:'inline-block',width:'100%'}}>
                                {index+1}. {data}
                                <IconButton aria-label="delete" 
                                    onClick={()=>dispatch({type:'DELETE',index})}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                </div>
                            ))}
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
        
    )
}
