<!-- Start SDK Example Usage -->


```typescript
import { Accounts } from "accounts";

(async() => {
  const sdk = new Accounts();

  const res = await sdk.pets.createPets();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->