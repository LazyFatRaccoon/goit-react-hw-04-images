import { Button } from './style';
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <>
      <Button type="button" onClick={() => onClick()}>
        Load More
      </Button>
    </>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
