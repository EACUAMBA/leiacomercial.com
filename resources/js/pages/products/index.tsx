import {Head, Link} from "@inertiajs/react";
import AppLayout from "@/layouts/app_layout";
import Button from "@/components/button";

export default function () {
    return (
        <>
            <AppLayout title={'Produtos'}>
                <div className={''}>
                  <div className={'flex justify-between'}>
                      <h1 className={'font-serif text-2xl'}>Produtos</h1>

                      <Link href={'/backoffice/products/create'}><Button>Criar</Button></Link>
                  </div>
                </div>
            </AppLayout>
        </>
    );
}
