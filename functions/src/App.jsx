
const App = () => {


  return (
    <>
    <button id="btn" onClick={(e)=>{
      console.log("hello u have clicked the bottun");
    }}>
      yo!!
    </button>
    <input onChange={(e)=>{
      console.log(e.target.value);

}} type="text" placeholder="Enter Your Name">

    </input>
    </>
  )
}

export default App;

