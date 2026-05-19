import React from "react";

function App() {
  return (
    <div style={{minHeight: "100vh", backgroundColor: "#cfcfcf",display: "flex", justifyContent: "center",
          alignItems: "center"}}>

      <div style={{backgroundColor: "#ffffff", padding: "40px", borderRadius: "10px", width: "320px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",}}>
        
        <h2 style={{textAlign: "center",color: "blue", marginBottom: "30px", fontSize:"27px"}}>
          Student Registration Form
        </h2>

        <form>
          <input type="text" placeholder="Student Name" 
          style={{width: "98%",padding: "12px",marginBottom: "15px",border: "1px solid #999",borderRadius: "5px",
             fontSize: "15px"}}/>

          <input type="email" placeholder="Email" style={{width: "98%",padding: "12px",marginBottom: "15px",border: "1px solid #999",borderRadius: "5px",
             fontSize: "15px"}}/>

          <input type="password" placeholder="Password" style={{width: "98%",padding: "12px",marginBottom: "15px",border: "1px solid #999",borderRadius: "5px",
             fontSize: "15px"}}/>

          <input type="text" placeholder="Course" style={{width: "98%",padding: "12px",marginBottom: "15px",border: "1px solid #999",borderRadius: "5px",
             fontSize: "15px"}}/>

          <input type="tel" placeholder="Mobile Number" style={{width: "98%",padding: "12px",marginBottom: "15px",border: "1px solid #999",borderRadius: "5px",
             fontSize: "15px"}}/>

          <button type="submit" style={{width: "103%",padding: "12px",backgroundColor: "blue",color: "white",
             border: "none",borderRadius: "5px",fontSize: "19px"}}> Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;