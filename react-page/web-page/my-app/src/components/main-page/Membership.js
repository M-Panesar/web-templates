import './Membership.css';

function Membership(){
    const SignIn = ()=>{
        alert("You are now signed-in")
    }
    return(
        <div>
            {/* <h2>Hello World!!</h2> */}
            <div className='container'>
                <h1>Join as Our Member and get Discount of upto 35%</h1>
                <div className='sign-in'>
                    <input className='input' type='text' placeholder='Enter your Email'/>
                    <button className='btn' onClick={SignIn}>Sign In</button>
                </div>
            </div>
        </div>
    );
}

export default Membership;