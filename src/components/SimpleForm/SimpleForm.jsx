

const SimpleForm = () => {

    const handelSubmit = e => {
        e.preventDefault();
        // console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.name.value);
        // console.log(e.target.email.name);
        // console.log(e.target.email.value);
        console.log("submitted");
    }


    return (

        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name='name' /> <br />

                <input type="email" name='email' /> <br />

                <button type="submit" value="Submit" >Submit</button>
            </form>
        </div>
    );
};
export default SimpleForm;