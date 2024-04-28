
import Student from'./Student.jsx'
function App(){
  return(
    <>
    <Student name="nick" age={45} isStudent={true}/>
    <Student name="neel" age={25} isStudent={false}/>
    <Student name="nisha" age={46} isStudent={false}/>
    <Student name="naveen" age={95} isStudent={true}/>
    <Student name="somi" age={34} isStudent={true}/>
    </>
  );
}
export default App;