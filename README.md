# Field URL

Field component for [rīme](https://github.com/bienbiendev/rime) CMS.
Simple component that display the document URL.

```bash
npm i @rimecms/field-url
```

```ts
// +rime/rime.config.ts
import { Collection, rime } from '$rime/config'
import url from '@rimecms/field-url'
import { slug, text } from 'rimecms/fields'

const pages = Collection.create('pages', {
  $url: (doc) => `/${doc.slug}`
  fields: [
    text('title').isTitle(),
    slug('slug').slugify('title'),
    url(),
  ]
})

//...

export default rime({
  //...
  collections: [pages]
})
```
