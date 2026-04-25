import {Head, Link, usePage} from "@inertiajs/react";
import {User} from "lucide-react";


export default function AppLayout({children, title, ...props}) {

    let page = usePage();

    return (
        <>
            <Head title={title}/>
            <div className={'flex flex-col gap-5 h-full'}>
                <header className={' shadow py-2 bg-white '}>
                    <div className={'flex justify-between items-center mx-5'}>
                        <img src="/images/logotipo-text-for-light.png" alt="Logotipo da Leia Comercial Lda."
                             className={'w-62.5'}/>
                        <div className={'flex gap-2 items-center '}>
                    <span className={'rounded-full border text-zinc-600'}>
                        <User className={'size-8'}/>
                    </span>
                            <div className={'flex flex-col'}>
                                <span className={'font-bold'}>{page.props.user.name}</span>
                                <span>Administrator</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main className={'grid grid-cols-[300px_1fr] mx-5 mb-5 gap-5 h-full'}>
                    <div className={' rounded-xl shadow-lg p-3 flex flex-col gap-4 bg-white h-full'}>
                        <nav className={'flex flex-col gap-2'}>
                            <Link href={'/backoffice'}
                                  className={'text-lg py-2 hover:bg-[#F1F5F9] w-full rounded-lg px-4 hover:font-medium'}>
                                <span>Página Inicial</span>
                            </Link>

                            <Link href={'/backoffice/products'}
                                  className={'text-lg py-2 hover:bg-[#F1F5F9] w-full rounded-lg px-4 hover:font-medium'}>
                                <span className={'text-lg'}>Produtos</span>
                            </Link>
                        </nav>
                    </div>

                    <div className={'rounded-xl shadow-lg p-3 flex flex-col bg-white'}>
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}
