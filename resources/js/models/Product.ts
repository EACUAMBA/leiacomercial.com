import {CoverFile} from "@/models/CoverFile";
import {MediaFile} from "@/models/MediaFile";

export interface Product {
    name: string,
    description: string,
    price: number | null,
    old_price: number | null,
    visible: boolean,
    mediaFiles: MediaFile[],
    cover: string | null,
    toDeleteFilesIds: number[]
}
