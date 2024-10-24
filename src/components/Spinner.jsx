import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color='#000000'
      loading={ loading }
      cssOverride={ override }
      size={ 100 }
    />
  );
};
export default Spinner;