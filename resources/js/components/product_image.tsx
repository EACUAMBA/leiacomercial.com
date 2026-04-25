import React, {ChangeEvent, MouseEvent, PropsWithChildren, useEffect, useRef, useState} from "react";
import {FileImage, Trash, Undo2} from "lucide-react";
import {InertiaFormProps} from "@inertiajs/react";
import {Product} from "@/models/Product";
import {MediaFile} from "@/models/MediaFile";

interface ProductImageProps extends PropsWithChildren {
    onRemoveCard,
    inertiaForm?: InertiaFormProps<Product> | undefined,
    cover?: string | null,
    setCover: React.Dispatch<React.SetStateAction<string | null>>
}

export default function ProductImage(
    {
        onRemoveCard,
        inertiaForm,
        cover,
        setCover,
        ...props
    }: ProductImageProps) {
    let [mediaFile, setMediaFile] = useState<MediaFile | null>();
    let [deletedMediaFile, setDeletedMediaFile] = useState<MediaFile | null>();
    let [uuid, setUuid] = useState<string | null>(crypto.randomUUID());

    let imageInputRef = useRef<HTMLInputElement>(null);
    let imageSelectorRef = useRef<HTMLInputElement>(null);
    let imageCardRef = useRef<HTMLInputElement>(null);

    useEffect(() => imageInputRef.current!.click(), [])

    function setBgImage(imageUrl: string) {
        imageCardRef.current!.style.backgroundImage = `url(${imageUrl})`;
        imageCardRef.current!.style.backgroundSize = `cover`;
    }

    function selectFile(files: FileList | null) {
        if (files && files?.length > 0) {
            let file = files[0];
            let _mediaFile = {uuid: crypto.randomUUID(), file: file, id: null, path: null};
            setMediaFile(_mediaFile);
            let imageUrl = URL.createObjectURL(file);
            setBgImage(imageUrl);
            inertiaForm?.setData(previousData => {
                previousData.mediaFiles = [...previousData.mediaFiles, _mediaFile]

                if (inertiaForm?.data.mediaFiles && inertiaForm.data.cover === null) {
                    let firstMediaFileUuid = inertiaForm.data.mediaFiles[0].uuid;
                    previousData.cover = firstMediaFileUuid;
                    setCover(firstMediaFileUuid);
                }

                return previousData;
            });
        }
    }

    function removeImage(e: MouseEvent) {
        inertiaForm?.setData(previousData => {
            console.log(previousData);

            previousData.mediaFiles = previousData.mediaFiles.filter(mf => mf.uuid !== mediaFile!.uuid);

            console.log(previousData);
            if (previousData.cover === mediaFile?.uuid && previousData.mediaFiles.length > 0) {
                let firstFile = previousData.mediaFiles[0];
                previousData.cover = firstFile.uuid;
                setCover(firstFile.uuid);
            } else if (previousData.mediaFiles.length == 0) {
                setCover(null);
                previousData.cover = null;
            }

            if (mediaFile?.file) {
                setMediaFile(null);
                onRemoveCard();
            } else {
                setDeletedMediaFile(mediaFile);
                previousData.toDeleteFilesIds = [...previousData.toDeleteFilesIds, deletedMediaFile!.id!];
            }
            return previousData;
        })

        imageCardRef.current!.style.backgroundImage = `none`;
        imageCardRef.current!.style.backgroundColor = `#ffffff`;
    }

    function unDelete() {
        setMediaFile(deletedMediaFile)
        setDeletedMediaFile(null);
        setBgImage(mediaFile?.path!);
        inertiaForm?.setData('toDeleteFilesIds', [...inertiaForm.data.toDeleteFilesIds.filter(id => id != mediaFile?.id), mediaFile?.id!]);
    }

    return (
        <>
            <div className={'flex gap-4 flex-wrap'}>
                <input ref={imageInputRef} accept="image/jpeg, image/png"
                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                           selectFile(e.target.files)
                       }} type="file" name={'file[]'}
                       className={'bg-red-400 size-0 opacity-0 absolute right-[-1000]'}/>

                <span ref={imageCardRef}
                      className={'flex items-center justify-center size-40 gap-2 border border-gray-500 rounded relative'}>

                            <label htmlFor={'cover_' + uuid}
                                   className={'flex gap-2 absolute right-2 top-2 bg-white px-2 py-1 rounded border border-gray-500'}>
                                <span className={'select-none  font-medium'}>capa:</span>
                            <input id={'cover_' + uuid} type={'checkbox'} checked={cover === mediaFile?.uuid}
                                   onChange={event => {
                                       if (event.target.checked) {
                                           setCover(mediaFile!.uuid)
                                           inertiaForm?.setData('cover', mediaFile!.uuid);
                                       } else {
                                           inertiaForm?.setData('cover', null);
                                           setCover(null);
                                       }
                                   }}
                            />
                            </label>

                    <span ref={imageSelectorRef}
                          onClick={(e: MouseEvent) => {
                              imageInputRef.current!.click()
                          }}
                          className={'bg-gray-100 rounded-full p-2 border border-blue-500 opacity-90 hover:scale-120 cursor-pointer'}><FileImage
                        className={'size-5 text-blue-500 '}/></span>

                    {(deletedMediaFile) &&
                        <span onClick={unDelete}
                              className={'bg-gray-100 rounded-full p-2 border border-gray-500 opacity-90 hover:scale-120 cursor-pointer'}><Undo2
                            className={'size-5 text-gray-500'}/></span>}

                    {(mediaFile) && <span onClick={(e: MouseEvent) => {
                        removeImage(e)
                    }}
                                          className={'bg-gray-100 rounded-full p-2 border  border-red-500 opacity-90 hover:scale-120 cursor-pointer'}><Trash
                        className={'size-5 text-red-500'}/></span>}
                                </span>
            </div>
        </>
    );
}
