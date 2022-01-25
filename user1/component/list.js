  
import React from 'react';
import axios from "axios";

function List  () {

    React.useEffect(()=>{
    fatch();
    },[])

    const [data, setData] = React.useState([]);
  
    const fatch = () => {
        axios.post("/disp").then((res) => {
        setData(res.data.data)
        console.log(data)
        })
    }

    const deleteData = (id) => {
        console.log(id);
        axios.delete(`/delete/${id}`).then((res) => {
            setData(res.data.data)
            console.log(data)
        })
    }

  return (
    <div align="center">
      <div style={{marginTop: '30px'}}>
        <table style={{border: '1px solid black',padding:'15px'}} >
            <tr style={{border: '1px solid black',padding:'105px'}}>
                <th style={{border: '1px solid black',padding:'15px'}}>Index</th>
                <th style={{border: '1px solid black',padding:'15px'}}>Pname</th>
                <th style={{border: '1px solid black',padding:'15px'}}>Pdesc</th>
                <th style={{border: '1px solid black',padding:'15px'}}>pimg</th>
                <th style={{border: '1px solid black',padding:'15px'}}>Pprice</th>
                <th style={{border: '1px solid black',padding:'15px'}}>Edit</th>
                <th style={{border: '1px solid black',padding:'15px'}}>Delete</th>
            </tr>
            {data.map((item,index) => (
                <tr key={item.pname}>
                    <td style={{border: '1px solid black',padding:'15px'}}>{index + 1}</td>
                    <td style={{border: '1px solid black',padding:'15px'}}>{item.pname}</td>
                    <td style={{border: '1px solid black',padding:'15px'}}>{item.pdesc}</td>
                    <td style={{border: '1px solid black',padding:'15px'}}>{item.pimg}</td>
                    <td style={{border: '1px solid black',padding:'15px'}}>{item.pprice}</td>
                    <td style={{border: '1px solid black',padding:'15px'}}><a href='/update'>Edit</a></td>
                     {/* <td style={{border: '1px solid black',padding:'15px'}}><button onClick={ () => selectUser(item.pname) }>update</button></td>  */}
                    <td style={{border: '1px solid black',padding:'15px'}}><button onClick={ () => deleteData(item.pname) }>Delete</button></td>

                </tr>
            ))}
            </table>
        </div>   
{/* 
                { <div>
                    {data.map((item) =>(
                        <input value={item.pname}></input>
                    ))}
                </div> } */}

    </div>
  );
};
export default List;

