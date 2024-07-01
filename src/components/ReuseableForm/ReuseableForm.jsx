

const ReuseableForm = ({formTitle}) => {

    const handelSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handelSubmit}>
                <input type="text" name='name' /> <br />

                <input type="email" name='email' /> <br />
                <input type="password" name='password' /> <br />

                <button type="submit" value="Submit" >HookFormSubmit</button>
            </form>
        </div>
    );
};

export default ReuseableForm; 