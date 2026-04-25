import {useForm} from "@inertiajs/react";
import AppLayout from "@/layouts/app_layout";
import {SubmitEvent} from "react";
import ProductImages from "@/components/product_images";
import {Product} from "@/models/Product";
import Button from "@/components/button";


export default function () {

    let form = useForm<Product>({
        name: '',
        description: '',
        price: null,
        old_price: null,
        visible: false,
        mediaFiles: [],
        cover: null,
        toDeleteFilesIds: []
    });

    function submit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        form.post('/backoffice/products', {forceFormData: true});
    }


    return (
        <>
            <AppLayout title={'Criar Produto'}>
                <div className={''}>
                    <div className={'flex justify-between mb-4'}>
                        <h1 className={'font-serif text-2xl'}>Criar Produto</h1>
                    </div>
                    <form onSubmit={submit} className={'flex flex-col gap-3'}>
                        <div className={'flex flex-col gap-1'}>
                            <label htmlFor="name">{'Nome:'}</label>
                            <input id={'name'}
                                   className={'px-3 py-2 border border-[#64748B] rounded-lg w-full focus:ring-[#536878] focus:outline-[#536878]'}
                                   value={form.data.name}
                                   onChange={(e) => form.setData('name', e.target.value)}/>
                        </div>

                        <div className={'flex flex-col gap-1'}>
                            <label htmlFor="description">Descrição:</label>
                            <textarea id={'description'}
                                      className={'min-h-100px px-3 py-2 border border-[#64748B] rounded-lg w-full focus:ring-[#536878] focus:outline-[#536878]'}
                                      value={form.data.description}
                                      onChange={(e) => form.setData('description', e.target.value)}/>
                        </div>

                        <div className={'flex flex-col gap-1'}>
                            <label htmlFor="price">{'Preço:'}</label>
                            <input id={'price'}
                                   type={'number'}
                                   className={'px-3 py-2 border border-[#64748B] rounded-lg w-full focus:ring-[#536878] focus:outline-[#536878]'}
                                   value={form.data.price ?? ''}
                                   onChange={(e) => form.setData('price', e.target.value === '' ? null : Number(e.target.value))}/>
                        </div>

                        <div className={'flex gap-2'}>
                            <input type={'checkbox'} id={'visible'} checked={form.data.visible}
                                   onChange={(e) => form.setData('visible', e.target.checked)}></input>
                            <label htmlFor="visible">Visivel</label>
                        </div>

                        <ProductImages inertiaForm={form}/>

                        <div>
                            <Button type={'submit'}>Registar</Button>
                        </div>
                    </form>
                </div>
            </AppLayout>
        </>
    );
}
