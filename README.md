#imgd-product-card

This is a package's test of deploy to NPM


### Ifrain David Medina García

## Example 



```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "prodcut"
```
```
<ProductCard
  product={product}
  initialValues={{
  count: 0,
  maxCount: 10
  }}
  >
  {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
      