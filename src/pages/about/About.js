import React, { useEffect, useState } from "react";
import Loader1 from "../../components/loader/Loader1";

const About = () => {
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
    <div className='d-flex justify-content-center p-5'>
      <h2> About Page !</h2>
    </div>
}
</div>
  );
};

export default About;
