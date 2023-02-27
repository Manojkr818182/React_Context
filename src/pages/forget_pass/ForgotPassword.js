import React, { useEffect, useState } from 'react'
import Loader1 from '../../components/loader/Loader1';

const ForgotPassword = () => {
  const [loading1, setLoding1] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoding1(false);
    }, 500)
  }, []);
  return (
    <div>
      {loading1 &&
        <div>
          <Loader1 />
        </div>
      }
      {!loading1 &&
        <div className='d-flex justify-content-center mt-5'>
          <h2> ForgotPassword !</h2>
        </div>
      }
    </div>
  )
}

export default ForgotPassword