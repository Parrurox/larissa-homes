# Review Management: Netlify Blobs & Admin API Documentation

This document provides a comprehensive overview of the administrative and data-management functions for site reviews, leveraging **Netlify Blobs** for persistent storage of customer testimonials.

## Architecture

The review management system uses a blob store named **"reviews"**. Reviews are persisted as independent JSON objects, distinguished by a key prefix `review_`.

### Data Model
```typescript
interface Review {
  id: string; // Unique identifier: {timestamp}{random_suffix}
  name: string;
  text: string;
}
```

---

## Administrative Functions

Administrative access is secured via an `ADMIN_PASSWORD` environment variable. All management handlers verify the `admin-password` request header against this environment secret.

### 1. `manage-reviews.ts` (CRUD Operations)
This module acts as the primary interface for administrative management of reviews.

*   **Security**: Requires `admin-password` header. Returns `401 Unauthorized` on failure.
*   **POST**: Creates a new review entry in the blob store.
*   **PUT**: Updates an existing review by `id`.
*   **DELETE**: Removes a review by `id` query parameter.

### 2. `seed-reviews.ts` (Store Initialization)
Used to bootstrap the store state.

*   **Logic**: 
    1.  Clears all existing `review_*` blobs by listing and deleting them.
    2.  Seeds the store with the default review set (`DEFAULT_REVIEWS` from `./reviews-data.ts`).
    3.  Custom seeding can be performed by `POST`ing a custom JSON array in the body.

### 3. `list-reviews.ts` (Retrieval)
Used for listing all current testimonials in the store.

*   **Operation**: Fetches all keys with the `review_` prefix and reconstructs the array of `Review` objects.
*   **Resilience**: In the event of a storage failure, it gracefully returns `DEFAULT_REVIEWS`.
*   **Caching**: Emits `no-store, no-cache` headers to prevent stale content.

---

## Error Handling Patterns

1.  **Storage Failures**: CRUD operations are wrapped in `try/catch` blocks that log the error and return a `500 Internal Server Error` response.
2.  **Validation**: All handlers check for required request fields (e.g., `id`, `name`, `text`) before attempting storage mutations, typically returning a `400 Bad Request` if payload schema is violated.
3.  **Authentication**: Protected endpoints verify server configuration (`process.env.ADMIN_PASSWORD`) before executing primary logic.
