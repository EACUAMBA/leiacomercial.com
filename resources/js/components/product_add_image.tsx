import {ChangeEvent, ClassAttributes, HTMLAttributes, MouseEvent, useRef} from "react";
import {FileImage, Plus, Trash, Undo2} from "lucide-react";
import {JSX} from "react/jsx-runtime";

export default function ProductAddImage(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
    return (
        <>
            <div {...props} className={'flex gap-4 flex-wrap'} >
                <span
                    className={'flex items-center justify-center size-40 gap-2 border border-gray-500 rounded'}>
                                    <span className={'bg-white rounded-full p-2 border border-gray-500 '}><Plus
                                        className={'size-10 text-gray-500'}/></span>
                                </span>
            </div>
        </>
    );
}
