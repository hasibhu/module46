import { useRef } from "react";


const ReForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handelSubmit = e => {
        e.preventDefault();
        // console.log(nameRef);
        // console.log(nameRef.current);
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input ref={nameRef} type="text" name='name' /> <br />

                <input ref={emailRef} type="email" name='email' /> <br />

                <input ref={passwordRef} type="password" name="password" id="" /> <br />

                {/* <button className="" type="submit" value="Submit" >Submit RefForm</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReForm;