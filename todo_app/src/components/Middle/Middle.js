import React, {useState}from 'react'
import Header from '../Header/Header';
import './Middle.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function Middle() {
    const [data, setData] = useState('');
    const [allData, setAllData] = useState([]);

    const handleAdd = () =>{
        let array = [];
        let a = allData;
        array.push(data);
        array.push(...allData);
        // console.log(array);
        setAllData(array)
    }
    const handleDelete = (index) =>{
        let copyAllData = [...allData]
        copyAllData.splice(index,1);
        // allData.splice(index,1);
        setAllData(copyAllData)
        // allData.splice(index,1);
        console.log(allData);
    }
    // console.log(allData)
    return (
        <div>
            <div className="container">
                {/* <input type="text"  onChange={setText}/> */}
                <Paper elevation={10} className="paper">
                    <Header/>
                    <div className="contentHeadingi">
                        <TextField id="outlined-basic" label="Text" variant="outlined" onChange={(e)=>{setData(e.target.value)}}/>
                        <Button variant="contained" 
                            onClick={handleAdd} 
                            style={{marginLeft:"2%",height:'55px'}}
                        >
                            Add
                        </Button>
                        <br/>
                        <div style={{border:'solid',display:'inline-block',width:'44%',textAlign:'initial'}}>
                            {allData?.map((data,index)=>(
                                <div key={index} style={{border:'solid red',display:'inline-block',width:'100%'}}>
                                {index+1}. {data}
                                {/* <IconButton aria-label="delete">
                                    <EditIcon />
                                </IconButton> */}
                                <IconButton aria-label="delete" onClick={()=>handleDelete(index)}>
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
