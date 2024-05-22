import React, { useState } from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authentication';
import Notification from '../components/notification';

interface NotificationState {
    title: string,
    message: string,
    severity: "Success" | "Warning" | "Info" | "Error";
}

const ForgotPassword: React.FC = () => {
    const [message, setMessage] = useState<NotificationState>();

    const { resetPassword } = useAuthStore((state) => ({
        resetPassword: state.resetPassword,
    }));

    const schema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
    });

    return (
        <div className="bg-neutral-950 justify-start items-center bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <section className="sign-up">
                <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-200 max-w">
                            Not a member? {' '}
                            <Link to="/signup" className="font-medium text-sky-500 hover:text-blue-500">
                                Create an account.
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
                                }}
                                validationSchema={schema}
                                onSubmit={async (values) => {
                                    await resetPassword(values.email)
                                        .then(() => {
                                            setMessage({
                                                title: "SUCCESS",
                                                severity: "Success",
                                                message: "Check your inbox for further instructions",
                                            });
                                        })
                                        .catch((error: Error) => {
                                            console.log(error);
                                            setMessage({
                                                title: "ERROR",
                                                severity: "Error",
                                                message: "Failed to reset password",
                                            });
                                        });
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

                                            {errors.email && touched.email ? <div className='text-red'>{errors.email}</div> : null}
                                        </div>

                                        <div>
                                            <button type="submit"
                                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Send Code
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForgotPassword;
