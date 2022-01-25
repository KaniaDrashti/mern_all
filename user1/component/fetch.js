import axios from "axios";

function Featch() {
  
  //fetch user
  const fetchusers=()=>{
    axios.get("/api/list").then((res)=>console.log("data",res));
  };

  return (
    <div>
      <h1>All Data</h1>
      <button onClick={fetchusers}>Fetch user</button>
        
        <div>
          <table border="2px">
              <tr>
                <td>Pname</td>
                <td>Pdesc</td>
                <td>Pimg</td>
                <td>Pprice</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>

              {data.map((item) => (
                <tr key={item.pname}>
                     Prod-Name: <input  onChange={(item) => setpname(item.target.value)} type="text" placeholder="Enter UserName" />
                    <td>{item.pname}</td>
                   
                </tr>
            ))}
              {/* <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr> */}
          </table>
        </div>
    </div>
  );
}
export default Featch;