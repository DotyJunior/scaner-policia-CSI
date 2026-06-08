# Security Spec - CSI Forensic Evidence Database

This specification defines the security rules, invariants, and test payloads designed to protect forensic case metadata and digital evidence.

## 1. Data Invariants

1. **Authenticated Access**: Only authenticated investigators may create, write, or query evidence.
2. **Schema Integrity**: Every evidence must have a valid `id`, `label`, and a recognized `scannerMode` enum value.
3. **Immutability of Core Identifiers**: Once registered, the user who uploaded the evidence (`userId`) and the creation time (`createdAt`) cannot be changed.
4. **Size Validation**: Text elements, particularly descriptions, base64 images, or URLs, must be within safety boundaries to prevent Denial of Wallet.
5. **No Blind Global Reads**: Collectors and query operations must be securely constrained.

## 2. The "Dirty Dozen" Payloads (Abridged Target Payloads)

Each of these payloads seeks to violate database invariants and must be blocked by validation helpers.

1. **Anonymous Creation**: Attempting to upload a record with `userId` when not logged in.
2. **Identity Spoofing**: Attempting to set `userId` of another account.
3. **Invalid Mode**: Sending `scannerMode: "XRAY"`.
4. **Giant ID Attack**: Injecting a 1.5MB ID payload to exhaust indexing wallets.
5. **Ghost Fields**: Writing fields outside the allowed schema.
6. **Time Spoofing / Future Injection**: Sending a client-side timestamp in the future.
7. **Modified Creator**: Updating an existing record to claim ownership of another user's evidence.
8. **Malicious Empty Fields**: Omitting `label` on create.
9. **Null Poisoning**: Setting properties from Maps to Null values.
10. **State Skipping**: Adjusting stages without tracking chronological sequence.
11. **Malicious Code Injection**: Sourcing an executable URI inside SVG parameters.
12. **PII Exposure / Email Override**: Forcing root path queries without index restrictions.

## 3. Test Runner Blueprint

Rules will target the path `/databases/$(database)/documents/evidences/$(evidenceId)`.
All test vectors assert `PERMISSION_DENIED` on invalid payloads.
