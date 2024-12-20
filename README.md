# Firebase Unexpected Error: Accessing Deeply Nested Data

This repository demonstrates an uncommon Firebase error related to accessing deeply nested data. The error occurs when attempting to access a deeply nested field without properly handling potential `null` or `undefined` values along the path.

## Bug Description

The bug results in an unexpected error when accessing a nested field in a Firestore document if one of the parent fields is missing.  This typically leads to a crash or unexpected behavior in your application.

## Solution

The solution involves carefully checking for the existence of each field before attempting to access deeper nested fields using optional chaining or other safe navigation techniques.

## How to reproduce

1.  Clone this repository.
2.  Set up a Firebase project and configure it in your project.
3.  Run the `bug.js` file to see the error occur.
4.  Run the `bugSolution.js` to observe the corrected implementation.