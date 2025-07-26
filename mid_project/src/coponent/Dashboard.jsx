import { useLocation } from "react-router-dom";

const Dashboard=()=>{
    let location=useLocation('/page1');
    let formdata=location.state;
if(!formdata){
    return(
     <h1>no data found</h1>

    )
    
}
    return(
        <>
        <h1>Your Dashboard</h1>
        <h1>{formdata.name}</h1>
        <h1>{formdata.email}</h1>
        <h1>{formdata.mobile}</h1>
        <h1>{formdata.password}</h1>
        </>
    )
}
export default Dashboard;