import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";
import axios from "axios";

function Employee() {
  const [data, setData] = useState([]);
  const [Input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  async function refreshData() {
    console.log("You clicked me");
      const userData = await axios.get("https://randomuser.me/api/?results=50");
      setData(userData.data.results);
    }

  function handleSubmit(event) {  
    event.preventDefault();
    let x = data.filter((obj) => {
      let name = obj.name.first.toLowerCase()
      let search = Input.toLowerCase()
      if(name.startsWith(search)){
        return (obj)
      }
    })
    console.log(data);
    setData(x)
    setInput("")
  }

  useEffect(() => {
    async function fetchData() {
      const userData = await axios.get("https://randomuser.me/api/?results=50");
      setData(userData.data.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Emplyee Search</h1>
      <div className="input-group mb-3">
        <div className="input-group-prepend"></div>
        <form className="w-100"onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            value={Input}
            onChange={handleChange}
          />
        </form>
        <button type="button" class="btn btn-link float-right" onClick={() => refreshData()}>Refresh</button>
      </div>
      <UserTable data={data}></UserTable>
    </div>
  );
}

export default Employee;
