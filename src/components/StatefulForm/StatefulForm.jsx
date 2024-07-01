

const StatefulForm = () => {
    const handelSubmit = e => {
        
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name='name' /> <br />

                <input type="email" name='email' /> <br />
                <input type="password" name="password" id="" /> <br />

                <button type="submit" value="Submit" >Submit</button>
            </form>
        </div>
    );
};

export default StatefulForm;