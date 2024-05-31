import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"
import useAuthStore from '../store/authentication';
import Notification from '../components/notification';
import { setAuthToken } from '../config/axios';

interface NotificationState {
    title: string,
    message: string,
    severity: "Success" | "Warning" | "Info" | "Error";
}

const Signup: React.FC = () => {
    const [message, setMessage] = useState<NotificationState>();

    const navigate = useNavigate();

    const { signUp, currentUser } = useAuthStore((state) => ({
        signUp: state.signUp,
        currentUser: state.user
    }));

    const schema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .min(5, "Password should be at least 6 characters!")
            .uppercase("Password must contain at least 1 uppercase!")
            .required("Password is required"),
        subscribe: Yup.string(),
        acceptTerms: Yup.bool().oneOf(
            [true],
            "Accept Terms & Conditions is required"
        ),
    });
    return (
        <div className="bg-neutral-950 justify-start items-center bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <section className="sign-up">
                <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                            Create your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-200 max-w">
                            Already a member? {' '}
                            <Link to="/signin" className="font-medium text-sky-500 hover:text-blue-500">
                                Sign in.
                            </Link>
                        </p>
                    </div>

                    {message && (
                        <Notification
                            title={message.title}
                            severity={message.severity}
                            message={message.message}
                        />
                    )}

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <Formik
                                initialValues={{
                                    email: "",
                                    password: "",
                                    subscribe: false,
                                    acceptTerms: false,
                                }}
                                validationSchema={schema}
                                onSubmit={(values) => {
                                    signUp(values.email, values.password)
                                        .then(() => currentUser?.getIdToken()
                                            .then((idToken: string) => setAuthToken(idToken)))
                                        .then(()=> navigate("/app/space"))
                                        .catch((error: Error) => {
                                            setMessage({
                                                title: "ERROR",
                                                severity: "Error",
                                                message: "Registration failed please contact us for assistance.",
                                            });
                                        })
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form className="space-y-6">
                                        <div className="form-group mt-1">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Email address

                                                <Field
                                                    name="email"
                                                    type="text" autoComplete="email" required
                                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Enter your email address" />
                                            </label>

                                            {errors.email && touched.email ? <div className='text-red-400'>{errors.email}</div> : null}
                                        </div>

                                        <div className="mt-1">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Password

                                                <Field
                                                    name="password"
                                                    type="password" autoComplete="current-password" required
                                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Enter your password" />
                                            </label>

                                            {errors.password && touched.password ? <div className='text-red-400'>{errors.password}</div> : null}
                                        </div>

                                        <div className="mt-1">
                                            <label className="flex items-center ml-2 text-sm text-gray-900 gap-1">
                                                <Field name="acceptTerms" type="checkbox"
                                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />

                                                I accept the terms and conditions.
                                            </label>

                                            {errors.acceptTerms && touched.acceptTerms ? <div className='text-red-400'>{errors.acceptTerms}</div> : null}
                                        </div>

                                        <div>
                                            <button type="submit"
                                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                                Sign in
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            <div className="mt-6">

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-gray-100 text-gray-500">
                                            Or continue with
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-3 gap-3">
                                    <div>
                                        <a href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                            <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                                alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                            <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                                                alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                            <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                                                alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;


