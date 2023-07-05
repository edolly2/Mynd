import { Helmet } from 'react-helmet';
import './SiteBrandStyles.css';
const SiteBrand = () => {
  return (
    <div className='container'>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Devonshire&family=MuseoModerno:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <div className='sb-logo-container'>Logo</div>
      <div className='sb-title-container'>
        <h1 className='sb-title'>MYND</h1>
      </div>
    </div>
  );
};

export default SiteBrand;
