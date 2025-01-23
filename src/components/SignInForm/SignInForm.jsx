import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import styles from './SignInForm.module.scss'

const signInSchema = Yup.object({
    email: Yup.string().trim().email('enter correct email, please').required(),
    password: Yup.string().min(6, 'must be more than 6').max(16).required('required')
})

const SignInForm = () => {
    const navigate = useNavigate();
    const onSubmit = (values, formikBag) => {
        console.log(values);
        // console.log(formikBag);
        formikBag.resetForm();
        navigate('/');
    }
    return (
        <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={signInSchema} validateOnMount>
            {
                (formikProps) => {
                    return (
                        <Form className={styles.form}>
                            <label>
                                <span>email: </span>
                                <Field type='email' name='email' />
                                <ErrorMessage name="email" component='span' className={styles.error} />
                            </label>
                            <label>
                                <span>password: </span>
                                <Field type='password' name='password' />
                                <ErrorMessage name="password" component='span' className={styles.error} />
                            </label>
                            <label>
                                <input type="submit" value="sign in" disabled={!formikProps.isValid || formikProps.isSubmitting} className={styles.button} />
                            </label>
                        </Form>
                    );
                }
            }
        </Formik>
    );
}

export default SignInForm;
