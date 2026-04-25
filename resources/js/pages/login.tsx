import React from 'react'
import {Head, useForm} from "@inertiajs/react";
import Input from "@/components/input.js";
import Button from "@/components/button.js";

export default function Login() {

    let form = useForm({
        email: '',
        password: ''
    });

    function submit(e) {
        e.preventDefault();
        form.post("/backoffice/login")
    }

    return (
        <>
            <Head title="Login"/>
            <div className={'min-h-screen flex items-center justify-center gap-10'}>
                <div className={'shadow flex p-6 bg-white rounded-lg'}>
                    <div>
                        <img src="/images/logotipo-for-light-2.png" alt="Logotipo da Leia Comercial Lda."/>
                    </div>
                    <div className={'flex flex-col gap-6'}>
                        <h1 className={'font-serif text-4xl'}>BackOffice</h1>
                        <h1 className={'font-serif text-2xl'}>Autentique-se</h1>
                        <form onSubmit={submit} className={'flex flex-col gap-4'}>
                            <div className={'flex flex-col gap-1'}>
                                <label htmlFor="email">Email:</label>
                                <Input type="email" id={'email'} value={form.data.email}
                                       onChange={(e) => form.setData('email', e.target.value)}/>
                                {form.errors.email &&
                                    <span className={'text-xs text-red-400'}>{form.errors.email}</span>}
                            </div>

                            <div className={'flex flex-col gap-1'}>
                                <label htmlFor="password">Senha:</label>
                                <Input type="password" id={'password'} value={form.data.password}
                                       onChange={(e) => form.setData('password', e.target.value)}/>
                                {form.errors.password &&
                                    <span className={'text-xs text-red-400'}>{form.errors.password}</span>}
                            </div>

                            <div className={'flex justify-center'}>
                                <Button type={'submit'}>Entrar</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
