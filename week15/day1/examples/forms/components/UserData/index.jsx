import FormLabel from './FormLabel';


const onSubmit = e => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    console.log('Submitted', data);
};

const UserData = () => {

    return (
        <form onSubmit={onSubmit}>
            <FormLabel name="userName" label="Enter the user name" />
            <FormLabel name="age" type="number" label="Enter the user age" />
            <FormLabel name="email" type="email" label="Enter the user email" />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserData;
