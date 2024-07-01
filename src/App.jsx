
import './App.css'
import HookForm from './components/HookForm/HookForm'
import ReForm from './components/Reform/ReForm'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'


function App() {
 

  return (
    <>
      <h1>Simple Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <ReForm></ReForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm formTitle={'Sign UP'}></ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'}></ReuseableForm>
    </>
  )
}

export default App
