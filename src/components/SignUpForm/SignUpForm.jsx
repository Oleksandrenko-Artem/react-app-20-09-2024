import { useFormik, Form, Field, ErrorMessage, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../../helpers/validation";
import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            login: '',
            email: '',
            password: '',
            confirmPassword: '',
            year: '',
        },
        validationSchema: signUpSchema,
        validateOnMount: true,
        onSubmit: (values) => {
            console.log(values);
            navigate('/');
        }
    });
    return (
        <FormikProvider value={formik}>
            <Form className={styles.form}>
            <label>
                <span>login:</span>
                <Field type='text' name='login' placeholder='login' />
                <ErrorMessage name='login' component='span' className={styles.error}/>
            </label>
            <label>
                <span>email:</span>
                <Field type='email' name='email' placeholder='email' />
                <ErrorMessage name='email' component='span' className={styles.error}/>
            </label>
            <label>
                <span>password:</span>
                <Field type='password' name='password' placeholder='password' />
                <ErrorMessage name='password' component='span' className={styles.error}/>
            </label>
            <label>
                <span>confirm password:</span>
                <Field type='password' name='confirmPassword' placeholder='confirmPassword' />
                <ErrorMessage name='confirmPassword' component='span'className={styles.error}/>
            </label>
            <label>
                <span>year</span>
                <Field type='number' name='year' min='1900' placeholder='year' />
                <ErrorMessage name='year' component='span'className={styles.error}/>
            </label>
            <button type="submit" disabled={!formik.isValid || formik.isSubmitting} className={styles.button}>register me</button>
            </Form>
        </FormikProvider>
    );
}

export default SignUpForm;
