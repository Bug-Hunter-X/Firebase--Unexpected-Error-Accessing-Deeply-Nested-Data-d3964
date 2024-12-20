The solution uses optional chaining to gracefully handle cases where nested fields might be missing:

```javascript
const db = firebase.firestore();
db.collection('users').doc('user123').get().then(doc => {
  const nestedValue = doc.data()?.profile?.address?.street;
  console.log(nestedValue); // Will log undefined if the path is not found
});
```

Alternatively, you can use explicit null checks:

```javascript
const db = firebase.firestore();
db.collection('users').doc('user123').get().then(doc => {
  const data = doc.data();
  let nestedValue = null;
  if (data && data.profile && data.profile.address && data.profile.address.street) {
    nestedValue = data.profile.address.street;
  }
  console.log(nestedValue);
});
```
This approach provides more control and allows for custom handling of missing values.