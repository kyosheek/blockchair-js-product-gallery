# Blockchair Product Gallery

## Usage

```shell
npm i @kyoshee/blockchair-js-product-gallery
```

```javascript
import { inject } from "@kyoshee/blockchair-js-product-gallery"

/**
 * @param mountID {string} Mount point ID
 * @param sectionTitleHeading {'h2' | 'h3' | 'h4' | 'h5'}
 * @param anchorTitleHeading {'h3' | 'h4' | 'h5' | 'h6'}
 * @param fontFamilyTitle {string} Font family for title
 * @param fontFamilyDescription {string} Font family for description
 */
inject("element-id", "h2", "h3", "'Comic Sans'", "'var(--font-sans)'")
```