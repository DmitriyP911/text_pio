import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Registration/registration.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import shortid from 'shortid'

const Registration = () => {
    const formik = useFormik( {
        initialValues: {
            pass: "",
            confirmPass: "",
            email: "",
            userName: "",
        },
        validationSchema: Yup.object( {
            pass: Yup.string()
                .min( 8, "Must be from 8 to 16 characters" )
                .max( 16, "Must be from 8 to 16 characters" )
                .required( "Required" ),
            confirmPass: Yup.string()
                .min( 8, "Must be from 8 to 16 characters" )
                .max( 16, "Must be from 8 to 16 characters" )
                .required( "Required" ),
            email: Yup.string().email( "Invalid email address" ).required( "Required" ),
        } ),
        onSubmit: () => {
            const userData = JSON.stringify( {
                userPass: `${formik.values.pass}`,
                userMail: `${formik.values.email}`,
                userToken: 'token' + shortid.generate()
            } )
            localStorage.setItem( 'userInfo', userData );
            if( formik.values.pass === formik.values.confirmPass ) {
                alert( "Registration succesfull, now you can login" )
            }
        },
    } );

    return (
        <div className={styles.main_wrap}>
            <div className={styles.desctop_wrap}>
                <div className={styles.desctop_wrap_text}>
                </div>
            </div>
            <div className={styles.main_registartion_wrap}>
                <div className={styles.registration__wrap}>
                    <h2 className={styles.registration__wrap_title}>News App</h2>
                    <form
                        className={styles.registration__wrap_form}
                        onSubmit={formik.handleSubmit}
                    >
                        <input
                            className={
                                formik.errors.email || formik.values.email === ""
                                    ? styles.email__input
                                    : `${styles.email__input} ${styles.active}`
                            }
                            placeholder="E-mail as Login"
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? <div>Please input your correct mail</div> : null}
                        <input
                            className={
                                formik.values.pass.length >= 8 &&
                                    formik.values.pass === formik.values.confirmPass
                                    ? `${styles.pass__input} ${styles.active}`
                                    : styles.pass__input
                            }
                            placeholder="Password"
                            id="pass"
                            name="pass"
                            type="password"
                            autoComplete="on"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.pass}
                        />
                        {formik.touched.pass && formik.errors.pass ? <div>Your pass must be from 8 to 16 values</div> : null}
                        <input
                            className={
                                formik.values.pass.length >= 8 &&
                                    formik.values.pass === formik.values.confirmPass
                                    ? `${styles.pass__input} ${styles.active}`
                                    : styles.pass__input
                            }
                            placeholder="Password Confirmation"
                            id="confirmPass"
                            name="confirmPass"
                            type="password"
                            autoComplete="on"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPass}
                        />
                        {formik.touched.confirmPass && formik.errors.confirmPass ? <div>Please confirm your pass correctly</div> : null}
                        <button className={styles.registration__btn} type="submit">
                            Register
                         </button>
                    </form>
                    <NavLink to="/login" exact className={styles.login__link}>
                        Login
                     </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Registration;