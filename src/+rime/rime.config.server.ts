import { env } from '$env/dynamic/public';
import URL from '$lib';
import { Collection, rime } from '$rime/config';
import { adapterSqlite } from 'rimecms/adapter-sqlite';
import { component, slug, text } from 'rimecms/fields';

const Pages = Collection.create('pages', {
  fields: [
    //
    text('title').isTitle(),
    slug('slug').slugify('title'),
    component(URL)
  ],
  $url: (doc) => `${env.PUBLIC_RIME_URL}/${doc.slug}`
});

const Medias = Collection.create('medias', {
  upload: true,
  fields: [text('alt').required()]
});

export default rime({
  $adapter: adapterSqlite('field-url.sqlite'),
  collections: [Pages, Medias]
});
