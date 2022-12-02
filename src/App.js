 //import ClassComponent from './Class Component'
import FuncProps from  './FuncProps'
import StateExample from './StateExample'
import DemoExample from './DemoExample'
import Events from './Events'
import JSX from './JSX'


function App(){
  return(
      <div>
      <StateExample/>
      <DemoExample price="1st price"/>
      <Events/>
     {/* <FuncProps carname="audi" year="1998"/>
      <h1>good afternoon</h1>
      {/*<section>
            <PropsExample name="chinni" age="19"/>
            <PropsExample name="kanna" age="21"/>

           <h1>React.JS</h1>
            <img src="https://miro.medium.com/max/680/1*C4yGTDSLSz86TCakrza2HQ.jpeg" alt="react js"/>
            <p>React is a JavaScript library for building user interfaces.</p>
             <ClassComponent/> 

      </section>*/}
      </div>
      
    )
}
export default App