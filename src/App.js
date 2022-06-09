import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import ImageLoader from "./components/ImageLoader";
import ListComponent from "./components/ListComponent";

const listdata = ["1","2","3"];

const listobject = listdata.map((item,idx) => ({
  id: idx,
  val: item
}));

function App() {
  const [state,setState] = useState("default")
  return (
  <div>
    <h1>current state: {state}</h1>
    <button onClick = {()=> setState("special")}>special</button>
    {/* <ImageLoader data = "nonsense"/>
    <ListComponent listdata = {listobject}/> */}
  </div>)
}

export default App;

// function App() {

//   const [file, setFile] = useState()

//   function handleChange(event) {
//     setFile(event.target.files[0])
//   }
  
//   function handleSubmit(event) {
//     event.preventDefault()
//     const url = 'http://localhost:3000/uploadFile';
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('fileName', file.name);
//     const config = {
//       headers: {
//         'content-type': 'multipart/form-data',
//       },
//     };
//     axios.post(url, formData, config).then((response) => {
//       console.log(response.data);
//     });

//   }

//   return (
//     <div className="App">
//         <form onSubmit={handleSubmit}>
//           <h1>React File Upload</h1>
//           <input type="file" onChange={handleChange}/>
//           <button type="submit">Upload</button>
//         </form>
//     </div>
//   );
// }

//export default App;