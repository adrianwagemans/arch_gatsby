// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const List = (props) => {
    let items =["A", "B", "C"]

    const [stateList, setStateList] = useState(props.items) 

    const handleClick = (number) =>{
        const index = items.indexOf(number)
        items.splice(index, 1)
        items.splice(0,0, number)
        setStateList(items)
    }
    const newList = props.items.map((number)=>{
      return (
      <li onClick={()=>handleClick(number)>{number}</li>
      )
      
    })
    return newList ;
  }
  
  document.body.innerHTML = "<div id='root'> </div>";
    
  const rootElement = document.getElementById("root");
  
  ReactDOM.render( <ul>
    <newList/>
    
    </ul> , rootElement);
  
  let listItem = document.querySelectorAll("li")[1];
  if(listItem) {
    listItem.click();
  }
  setTimeout(() => console.log(document.getElementById("root").innerHTML));