import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import register from '../../assets/images/register.png'
import logo from '../../assets/images/logo.png'
import '../../register.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';


const  Register = ()=> {
    let history = useHistory();
    console.log({history});


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
          
          .required('First Name is reqired'),

        lastName: Yup.string()
          .required('Last Name is reqired'),
        email: Yup.string().email(' email').required('Email is reqired'),
        

          phoneNumber: Yup.string()
          .required('PhoneNumber is required').matches(phoneRegExp, 'Phone number is not valid'),
          

        password: Yup.string()
          .required('password is required'),
          confirmPassword: Yup.string()
          .required('confirm password is required '),
      });
    
    const mystyle = {
        width: "720px",
        height: "100vh",
        display:"flex"
      };
      
      const main = {
        overflow:"hidden"
       };
       const logostyle = {
        "margin-right": "83%",
        "margin-top": "19px"
       };
       const selectstyle = {
        
        "background-color": "rgb(240, 240, 240)",
        "border-radius": "8px",
        "margin-left": "185%"
       }
      
       const headerstyle = {
    padding: "13px 57px 12px 35px",
    
    "background-color": "rgb(255, 255, 255)"
    };
    const spanStyle = {
        
        height: "20px", 
        "font-family": "GT America",
         
          color: "rgb(28, 146, 255)",
           "text-decoration": "none" ,
           
            "line-height": "20px" ,
            "text-align": "right" ,
            "padding-left": "38px",
            "font-size": "17px"

    }
    const styleLable = {
        
            "font-size": "12px",
           " font-weight": "normal",
            "font-stretch": "normal",
            "font-style": "normal",
            "line-height": "normal",
            "letter-spacing": "normal",
            "text-align": "left",
            color: "#8a8a8a",
            "display" : "flex" ,
            "place-content": "flex-start"
        //    "margin-right": "275px"
    }
    const styleinput  = {
        
        "width" : "255px"
}
      
    
    return (


        <div  style = {main} >

        
            
        
        <div className = "row">
            
            <div class="d-none d-lg-block col-12 col-lg-6">

            <img style = {mystyle}    src = {register} />

            </div>
            
            <div class=" col-12 col-lg-6">

                
                
            <div style = {headerstyle} className="d-flex justify-content-between align-items-center">

          <div className = "logo">
           <img style = {logostyle} src = {logo} className = "img-fluid"/>


        </div>
        <div class="d-inline-block dropdown show" >
         <select className = "form-select" style = {selectstyle}  >
              
            <option>English</option>
            <option>French</option> 
        </select> 
        </div>
        <span style={spanStyle}>Contact us</span>
        

        </div>
         
               <div class="d-flex justify-content-center pt-5  card-body">
                   
                   <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        phoneNumber : '',
                        password : '' ,
                        confirmPassword : '' 
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        
                        // same shape as initial values
                        console.log(values);
                        history.push("/login")
                    }}
                    >
                        {({ errors, touched }) => (
                                <Form    style  = {{"padding": "0 21px" ,
                    width: "100%"}}>
                        <h6 style = {{"text-align":"left"}} className = " text-capitalize mb-3">Create a clinic at MonMedX</h6>
                        <p   style = {{color : "gray","text-align":"left"}} className="pb-4 text-gray ">Please complete the form to activate your account.</p>
                        <h5  style = {{"text-align":"left","font-family": "GT America", "font-size": "15px",
    "font-weight": "bold" }} className = " text-capitalize mb-3">1.Admin Information</h5>
    <div style = {{"border-top": "1px solid rgba(0, 0, 0, 0.1)","display":"flex"}} >
        <div style={{"flex": "1 1 0%" ,"padding-right": "8px"}}>
    <div class="form-group">
        <div class = " col-sm-12">
    <label style = {styleLable} class="required" for="firstName">First Name
    </label>
    <Field  
    input style = {styleinput} name="firstName" placeholder="Your First Name"  type="text" className={'is- form-control'} aria-="true"/>
    {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
    {/* <div class="-feedback">Required</div> */}
    </div>
    </div>
    </div>
    <div style={{"flex": "1 1 0%","padding-left": "8px"}}>
        <div class="form-group">
    <label style={styleLable} class="required" for="lastName">Last Name</label>
    <Field  style = {styleinput} name="lastName" placeholder="Your Last Name"  type="text" class="is- form-control"  />
    {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
    {/* <div class="-feedback">Required</div> */}
    </div>
    </div>
    </div>
    <div style = {{"margin-top" : "27px"}} class="d-flex">
        <div style={{"flex": "1 1 0%" ,"padding-right": "8px"}}>
    <div class="form-group">
    <label style = {styleLable} class="required" for="firstName">Email
    </label>
    <Field  style = {styleinput} name="email" placeholder="Your Email"  type="text" class="is- form-control"  aria-="true"/>
    {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
    {/* <div class="-feedback">Required</div> */}
    </div>
    </div>
    <div style={{"flex": "1 1 0%","padding-left": "8px"}}><div class="form-group">
    <label style={styleLable} class="required" for="lastName">Phone Numbers</label>
    <Field  style = {styleinput} name="phoneNumber" placeholder="Your Phone Numbers"  type="text" class="is- form-control"  aria-="true"/>
    {errors.phoneNumber && touched.phoneNumber ? (
             <div>{errors.phoneNumber}</div>
           ) : null}
    {/* <div class="-feedback">Required</div> */}
    </div>
    </div>
    </div>
    <div style = {{"marginTop" : "27px"}} class="d-flex">
        <div style={{"flex": "1 1 0%" ,"padding-right": "8px"}}>
    <div class="form-group">
    <label style = {styleLable} class="required" for="firstName">Password
    </label>
    <Field  style = {styleinput} name="password" placeholder="Your Password"  type="password" class="is- form-control"  aria-="true"/>
    {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
    {/* <div class="-feedback">Required</div> */}
    </div>
    </div>
    <div style={{"flex": "1 1 0%","padding-left": "8px"}}><div class="form-group">
    <label style={styleLable} class="required" for="lastName">Confirm Password</label>
    <Field  style = {styleinput} style = {{"width": "255px"}}  name="confirmPassword" placeholder="Confirm your Password"  type="password" class="is- form-control"  aria-="true"/>
    {errors.confirmPassword && touched.confirmPassword ? (
             <div>{errors.confirmPassword}</div>
           ) : null}
    {/* <div class="-feedback">Required</div> */}
    </div>
    </div>
    </div>
    <button class="btn btn-primary btn-waves-effect waves-light mb-3 font-weight-bold" type="submit"  disabled="" style={{"font-size": "14px","padding": "11px","background-color": "#2BBEB8","opacity": "unset" ,"border-color":  "#2BBEB8",position: "absolute" ,width: "167px","height": "43px",left: "817px",top: "544px"}}>Proceed Next</button>
     </Form>
                        )}
     </Formik>
                 </div> 

    </div>

    </div>
    </div>
            
       
    )
}



export default Register

       