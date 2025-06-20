import {useState} from "react";

const CreateUserForm = (props) => {
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
return (
    <form className = "createUserForm container" >
    <div>
        <label htmlFor="">User Name</label>
        <input
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}/>
        <p>User name: {userName}</p>
    </div>
    <div>
        <label htmlFor="">User Age</label>
        <input
        type="text"
        value={userAge}
        onChange={(event) => setUserAge(event.target.value)}/>
        <p>User age: {userAge} </p>
    </div>
    <button
        type = "button"
        onClick={() => {
            props.createUser(userName, userAge);
            setUserName("");
            setUserAge("");
        }}
    >Create User
    </button>
    </form>
)
}
export default CreateUserForm;