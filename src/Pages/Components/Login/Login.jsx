import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Login/login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import isLogin from '../../../helpers/login';

const Login = () => {
    const formik = useFormik( {
        initialValues: {
            confirmPass: "",
            email: "",
        },
        validationSchema: Yup.object( {
            confirmPass: Yup.string()
                .min( 8, "Must be from 8 to 16 characters" )
                .max( 16, "Must be from 8 to 16 characters" )
                .required( "Required" ),
            email: Yup.string().email( "Invalid email address" ).required( "Required" ),
        } ),
        onSubmit: () => {
            if( isLogin( 'userInfo' ) ) {
                alert( 'Succesfull' )
                window.location.reload()
            } else alert( 'sorry' )
        },
    } );

    return (
        <div className={styles.main_wrap}>
            <div className={styles.desctop_wrap}>
                <div className={styles.desctop_wrap_text}>
                    <p>Check some news</p>
                </div>
            </div>
            <div className={styles.main_registartion_wrap}>
                <div className={styles.registration__wrap}>
                    <h2 className={styles.registration__wrap_title}>News</h2>
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
                        {formik.touched.email && formik.errors.email ? <div>Please inpur correct mail</div> : null}
                        <input
                            className={
                                formik.values.confirmPass.length >= 8
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
                        {formik.touched.confirmPass && formik.errors.confirmPass ? <div>Please input correct pass</div> : null}
                        <button className={styles.registration__btn} type="submit">
                            Enter
                        </button>
                    </form>
                    <NavLink to="/registration" exact className={styles.login__link}>
                        Register
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;