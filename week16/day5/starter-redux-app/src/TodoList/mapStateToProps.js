export const mapStateToProps = (state, props) => {

    const tasks = state[props.type].tasks;

    return { tasks };
};