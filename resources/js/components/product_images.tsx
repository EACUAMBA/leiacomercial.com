import ProductImage from "@/components/product_image";
import ProductAddImage from "@/components/product_add_image";
import {MouseEvent, useEffect, useState} from "react";
import {InertiaFormProps} from "@inertiajs/react";
import {Product} from "@/models/Product";
import {CoverFile} from "@/models/CoverFile";

interface ProductImagesProps {
    inertiaForm?: InertiaFormProps<Product>
}

export default function ProductImages({inertiaForm}: ProductImagesProps) {
    let [productImageIndex, setProductImageIndex] = useState<number[]>([]);
    let [cover, setCover] = useState<string | null>(null);

    function removeImage(index: number) {
        setProductImageIndex((prevState) => [...prevState.filter(i => i !== index)]);
    }

    return (
        <>
            <div className={'flex gap-2 flex-col'}>
                <h1>Imagens do produto:</h1>

                <div className={'flex gap-2 flex-wrap'}>
                    {
                        productImageIndex.map((index) => <ProductImage key={index}
                                                                       inertiaForm={inertiaForm}
                                                                       cover={cover}
                                                                       setCover={setCover}
                                                                       onRemoveCard={(e) => removeImage(index)}/>)
                    }

                    <ProductAddImage onClick={(e: MouseEvent<HTMLElement>) => {
                        setProductImageIndex((prevState) => [...prevState, prevState.length])
                    }}/>
                </div>

                {inertiaForm?.errors.cover &&
                    <span className={'bg-red-500 font-light text-sx'}>{inertiaForm?.errors.cover}</span>}
                {inertiaForm?.errors.mediaFiles &&
                    <span className={'bg-red-500 font-light text-sx'}>{inertiaForm?.errors.mediaFiles}</span>}
            </div>
        </>
    );
}
