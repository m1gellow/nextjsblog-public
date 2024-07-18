import {createClient} from 'next-sanity';
import imageBuilder from '@sanity/image-url';

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: '75uv9nqo',
    useCdn: false,
})

const builder = imageBuilder(client);

export function urlFor(source: any){
    return builder.image(source);
}