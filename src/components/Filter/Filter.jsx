import PropTypes from 'prop-types';

import { Input, Text } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <Text>Find contacts by name</Text>
      <Input type="text" value={value} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
