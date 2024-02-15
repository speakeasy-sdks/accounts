<!-- Start SDK Example Usage [usage] -->
```typescript
import { Accounts } from "accounts";

async function run() {
    const sdk = new Accounts();

    const res = await sdk.pets.createPets({
        id: 596804,
        name: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->