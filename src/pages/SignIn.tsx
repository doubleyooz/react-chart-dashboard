import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormValues = {
    email: string;
    password: string;
};

const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup
            .string()
            .matches(/^(?=.*[a-z])/, 'Must contain at least 1 lowercase letter')
            .matches(/^(?=.*[A-Z])/, 'Must contain at least 1 uppercase letter')
            .matches(/^(?=.*\d)/, 'Must contain at least a number')
            .matches(
                /(?=.*[^a-zA-Z0-9])/,
                'Must contain at least 1 special character'
            )
            .min(8)
            .required(),
    })
    .required();

const SignIn: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const nav = useNavigate();

    const onSubmit = (data: any) => {
        console.log(data);
        nav('/');
    };

    return (
        <div className="flex justify-center h-screen py-14 ">
            <div className="hidden md:flex w-full bg-skin-detail_1"></div>
            <form
                className="flex flex-col items-center justify-center gap-4 bg-skin-white min-w-min w-2/4 px-8"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col">
                    <span className="text-xs">EMAIL</span>
                    <input
                        className="border-b text-lg"
                        {...register('email')}
                    />
                    {errors?.email && (
                        <p className="text-skin-alert text-xxs">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col">
                    <span className="text-xs">PASSWORD</span>
                    <input
                        className="border-b text-lg"
                        type="password"
                        {...register('password')}
                    />
                    {errors?.password && (
                        <p className="text-skin-alert text-xxs">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <div className="flex justify-center items-center gap-2">
                    <input
                        className="rounded-full text-white bg-skin-detail_1 py-1 px-2"
                        type="submit"
                        value="Sign In"
                    />
                    <span className="text-sm">or Log in</span>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
