import React from "react" ; 
import ChartComponent from "./ChartComponent";
import drawChart  from "./drawChart";

// fetching data from backend to display in the front end 
export default class FetchRandomUser extends React.Component {

    state ={
        loading: true,
        recipe : null,
        recipe1: null
    }
    // calling the data from backend url
    // [note] download cors package and run cors to retrieve from backend

    async componentDidMount () {
        const url = "http://localhost:4000/api/data/data2";
        const response =  await fetch(url);
        const data = await response.json();
        console.log(data.data);
        this.setState({ recipe :data.data[0] , loading : false });
        // this.setState({ recipe1 :data.data[1] , loading : false });
    }
    

render() {
    const data = [
        { value: 25 },
        { value: 35 }, 
        { value: 45 },
        { value: 15 },
 
        
      ];
return <div>
   {this.state.loading || !this.state.recipe ? <div> loading </div> : <div> 
     <div> 

    <drawChart />
    <ChartComponent data={data} />
  
       {this.state.recipe.name}
       {/* {this.state.recipe1.avg.hours} */}
     </div>


      </div> }


</div>;
  }
}