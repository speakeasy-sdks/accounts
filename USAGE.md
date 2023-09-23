<!-- Start SDK Example Usage -->


```typescript
import { Accounts } from "accounts";
import { CreatePetsResponse } from "accounts/dist/sdk/models/operations";

const sdk = new Accounts();

sdk.pets.createPets().then((res: CreatePetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->