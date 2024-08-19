'use client';

import NextLink from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import TextField from '@/components/TextField';
import { LoginFormProps, loginSchema } from '@/common/zod.common';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@/components/Button';
import { useState } from 'react';
import { CiCircleAlert } from 'react-icons/ci';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<LoginFormProps>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormProps) => {
        setLoading(true);
        console.log(data);

        //await signIn(data.email, data.password);

        //nav("/");
        setLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center gap-4 bg-skin-white border border-gray-200 min-w-min w-2/4 px-8"
        >
            <div className="flex flex-col gap-2">
                <TextField
                    name="email"
                    type="email"
                    placeholder="Email"
                    error={errors['email']?.message}
                    register={register}
                />
                <TextField
                    name="password"
                    type="password"
                    placeholder="Password"
                    error={errors['password']?.message}
                    register={register}
                />
                <NextLink
                    className="font-sans self-end text-xs text-gray-400"
                    href="/auth/forgot"
                >
                    Forgot Password?
                </NextLink>
                <div className="flex w-full justify-center">
                    <div className="flex items-center justify-center gap-8 mt-9">
                        <Button
                            type="submit"
                            text="Login"
                            variant="primary"
                            loading={loading}
                            disabled={!isValid}
                            rounded
                        />
                        <span className="text-xs">OR</span>
                        <NextLink
                            className="w-full min-w-fit font-sans self-center text-base text-gray-400"
                            href="/auth/signup"
                        >
                            Sign Up
                        </NextLink>
                    </div>
                </div>
            </div>
        </form>
    );
}
