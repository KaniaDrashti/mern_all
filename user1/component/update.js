import React from 'react';
import axios from "axios";
import { useState } from 'react';

console.log("update PAge");
function Update(user) {
    const [pname, setpname] = useState(user.pname)
    // const [password, setpass] = useState(user.password)
    console.log(pname);

    const data = {
        pname:pname,
        // password: password
      };
    
    const updateuser = () => {
        axios.put("/update", data).then((res) => console.log(res.data));
        alert("Profile Updated Successfully")
         console.log(data);
    }
    return (
        <div align="center">
            <div style={{marginTop: '30px'}}>
                <h3>Update Page</h3>
            </div>
            <div>
                Prod-Name: <input style={{padding: "5px",margin:"5px"}} onChange={(e) => setpname(e.target.value)} type="text" placeholder="Enter UserName" />
            </div>
            {/* <div>
                Name: <input style={{padding: "5px",margin:"5px"}} onChange={(val) => { setdata({ ...data, name: val.target.value }) }} type="text" placeholder="Enter Name"/>
            </div>    */}
            <div>
                <button style={{padding: "5px",margin:"5px",borderRadius: "5px"}} onClick={() => { updateuser() }} type="Submit" value={"Update"}>Update</button>
            </div>
        </div>
    );
}

export default Update;