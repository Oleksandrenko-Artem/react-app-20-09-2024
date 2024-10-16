import PropTypes from 'prop-types';


const Task = (props) => {
    const {dataTask: {text, days, isDone}} = props;
    return (
        <div>
            <p style={{color: isDone ? 'green' : 'red'}}>{text}</p>
            <p>Днів на виконання: {days + 1}</p>
        </div>
    );
};


Task.propTypes = {
    dataTask: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string.isRequired,
        days: PropTypes.number.isRequired,
        isDone: PropTypes.bool})
};


export default Task;
