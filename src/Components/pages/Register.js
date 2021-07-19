import React from 'react'
import { Formik, Form, Field } from 'formik';

import register from '../../assets/images/register.png'
import logo from '../../assets/images/logo.png'
import '../../register.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { Progress } from 'antd';
import "antd/dist/antd.css";
import { SignupSchema } from '../Validation';
const Register = () => {
  let history = useHistory();
  SignupSchema
  const selecttag = ["English", "French"]
  return (
    <div>
      <div className="row">
        <div className="d-none d-lg-block col-12 col-lg-6">
          <img alt="register-page" src={register} />
        </div>
        <div className=" col-12 col-lg-6">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <img src={logo} className="img-fluid" />
            </div>
            <div className="d-inline-block dropdown show" >
              <select className="form-select"  >
                <option>{selecttag[0]}</option>
                <option>{selecttag[1]}</option>
              </select>
            </div>
            <span >Contact us</span>
          </div>
          <div className="d-flex justify-content-center pt-5  card-body">
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: ''
              }}
              validationSchema={SignupSchema}
              onSubmit={values => {
                console.log(values);
                history.push("/login")
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <h6 className=" text-capitalize mb-3">Create a clinic at MonMedX</h6>
                  <p className="pb-4 text-gray ">Please complete the form to activate your account.</p>
                  <div>
                    <h6 className=" text-capitalize mb-3">1.Admin Information</h6>
                    <Progress percent={50} status="active" />
                  </div>
                  <div className="border-form">
                    <div >
                      <div className="form-group">
                        <div className=" col-sm-12">
                          <label className="required" htmlFor="firstName">First Name
                          </label>
                          <Field
                            input name="firstName" placeholder="Your First Name" type="text" className={'is- form-control'} aria-="true" />
                          {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="form-group">
                        <label className="required" htmlFor="lastName">Last Name</label>
                        <Field name="lastName" placeholder="Your Last Name" type="text" className="is- form-control" />
                        {errors.lastName && touched.lastName ? (
                          <div>{errors.lastName}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div >
                      <div className="form-group">
                        <label className="required" htmlFor="firstName">Email
                        </label>
                        <Field name="email" placeholder="Your Email" type="text" className="is- form-control" aria-="true" />
                        {errors.email && touched.email ? (
                          <div>{errors.email}</div>
                        ) : null}
                      </div>
                    </div>
                    <div ><div className="form-group">
                      <label className="required" htmlFor="lastName">Phone Numbers</label>
                      <Field name="phoneNumber" placeholder="Your Phone Numbers" type="text" class="is- form-control" aria-="true" />
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <div>{errors.phoneNumber}</div>
                      ) : null}
                    </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div >
                      <div className="form-group">
                        <label className="required" htmlFor="firstName">Password
                        </label>
                        <Field name="password" placeholder="Your Password" type="password" class="is- form-control" aria-="true" />
                        {errors.password && touched.password ? (
                          <div>{errors.password}</div>
                        ) : null}
                      </div>
                    </div>
                    <div ><div className="form-group">
                      <label clclassNameass="required" htmlFor="lastName">Confirm Password</label>
                      <Field name="confirmPassword" placeholder="Confirm your Password" type="password" class="is- form-control" aria-="true" />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <div>{errors.confirmPassword}</div>
                      ) : null}
                    </div>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-waves-effect waves-light mb-3 font-weight-bold" type="submit" disabled="" >Proceed Next</button>
                </Form>
              )}
            </Formik>
          </div>

        </div>

      </div>
    </div>
  )
}
export default Register;

