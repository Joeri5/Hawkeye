import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { ArrowLeft, MailIcon } from "@/assets";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />
            <div className="mt-10">
                <div className="ml-5">
                    <img
                        src={ArrowLeft}
                        alt="arrow pointing left"
                        className="w-8"
                    />
                </div>
                <div className="mt-7 ml-5">
                    <h3 className="text-3xl font-bold">Sign In</h3>
                </div>
                <form className="mx-5 mt-3">
                    <div className="">
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                                <img src={MailIcon} alt="mail icon" />
                            </div>
                            <input
                                type="text"
                                name="email"
                                // value={data.email}
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                                class=" border border-gray-200 text-gray-900 placeholder:text-[#ADADAD] text-md rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter e-mail address"
                            />
                        </div>
                    </div>
                </form>
            </div>

            {/* <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}

                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button className="ml-4" processing={processing}>
                        Log in
                    </Button>
                </div>
            </form> */}
        </div>
    );
}
