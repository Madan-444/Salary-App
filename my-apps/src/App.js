import React,{ Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       salaryInfo:[],
       salaryTypeName:'',
       fixedSalary:'',
       incentive:'',
       minOrders:''
    }
    
  }
  
  submitForm(e){
    e.preventDefault()
    const {salaryTypeName,fixedSalary,incentive,minOrders,salaryInfo} = this.state
    ///Creating object
    const salaryinfoObj={
      salaryTypeName,
      fixedSalary,
      incentive,
      minOrders
    }
    ///adding the object in array
    salaryInfo.push(salaryinfoObj)
    this.setState({
      salaryInfo
    })
    console.log(salaryInfo)

  }
  textChange(e){
    this.setState({
      [e.target.name]: e.target.value

    })
     
   
      
  }
  renderTable(){
    const salaryInfo = this.state.salaryInfo;
    const data = salaryInfo.map((d,i)=>{
      return(
        <tr key ={i}>
        <td>{i+1}</td>
          <td>{d.salaryTypeName}</td>
          <td>{d.fixedSalary}</td>
          <td>{d.incentive}</td>
          <td>{d.minOrders}</td>
        </tr>
      )
    })
    return data; 
  }
  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
          <h2>Salary Info:</h2>
          <form onSubmit={this.submitForm.bind(this)}>
              <Myinput name='salaryTypeName' value={this.state.salaryTypeName} title='Salary Type Name' Change={this.textChange.bind(this)} />
              <Myinput name='fixedSalary' value={this.state.fixedSalary} title='Fixed Salary' Change={this.textChange.bind(this)} />
              <Myinput name='incentive' value={this.state.incentive} title='Insentive Price' Change={this.textChange.bind(this)} />
              <Myinput name='minOrders' value={this.state.minOrders} title='Minimun Order' Change={this.textChange.bind(this)} />
              
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Salary Type Name</th>
                <th>Fixed Salary</th>
                <th>Incentive</th>
                <th>Minimun Order</th>

              </tr>
            </thead>
            <tbody>
              {this.renderTable()}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    )
  }

}
const Myinput = (props) =>{
  return(
    <div className="form-group">
        <label htmlFor={props.name}>{props.title}</label>
        <input required type="text" className="form-control" id={props.name} name={props.name} value={props.theValue} onChange={props.Change}/>
      </div>
    
  )
}

export default App;
