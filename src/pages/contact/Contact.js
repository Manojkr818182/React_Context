import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Loader1 from "../../components/loader/Loader1";

const Contact = () => {
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ajay</td>
                <td>M</td>
                <td>AMD</td>
              </tr>
              <tr>
                <td>2</td>
                <td>ABC</td>
                <td>Th</td>
                <td>CG</td>
              </tr>
              <tr>
                <td>3</td>
                <td > XYZ</td>
                <td>QPR</td>
                <td>MNJ</td>
              </tr>
            </tbody>
          </Table>
        </div>
      }
    </div>
  );
};

export default Contact;
