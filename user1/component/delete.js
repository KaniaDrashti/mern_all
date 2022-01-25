import axios from "axios";

function Delete() {

    var deletepname = "";
    const deleteuser = () => {
            axios.delete("/api/delete/" + deletepname).then((res) => console.log(res.data));
    };

    return (
        <div>
        <input placeholder="pname" onChange={ (e) => (deletepname  = e.target.value) } />
        <button type="Submit" onClick={deleteuser}>Delete</button>
        </div>
    );
}
export default Delete;