import PropTypes from 'prop-types';


const Comment = (props) => {
    const {dataComment: {content, amountLike, isNew}} = props;
    return (
        <div>
            <p style={{ backgroundColor: isNew ? 'green' : 'white' }}>Коментар: {content}</p>
            <p>Лайки: {amountLike}</p>
        </div>
    );
};


Comment.propTypes = {
    dataComment: PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string.isRequired,
        amountLike: PropTypes.number.isRequired,
        isNew: PropTypes.bool})
};


export default Comment;
