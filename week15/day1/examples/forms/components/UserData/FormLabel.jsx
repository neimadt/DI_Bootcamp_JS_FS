
const FormLabel = ({ name, type, label }) => {

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type || 'text'} name={name} />
            <br />
        </>
    );
};

export default FormLabel;
