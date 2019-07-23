        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyBrQLBX60ZVpF3iY-Y6pL9zl1RvgSZugBM",
            authDomain: "sholofood.firebaseapp.com",
            databaseURL: "https://sholofood.firebaseio.com",
            projectId: "sholofood",
            storageBucket: "",
            messagingSenderId: "1091396395821",
            appId: "1:1091396395821:web:3cc0733077f135c2"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);




/*
//information of users predeterminado
// Only authenticated users can read or write to the bucket
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}

// Anyone can read or write to the bucket, even non-users of your app.
// Because it is shared with Google App Engine, this will also make
// files uploaded via GAE public.
service firebase.storage {
    match /b/{bucket}/o {
      match /{allPaths=**} {
        allow read, write;
      }
    }
  }

  //Access only users
// Grants a user access to a node matching their user ID
service firebase.storage {
    match /b/{bucket}/o {
      // Files look like: "user/<UID>/path/to/file.txt"
      match /user/{userId}/{allPaths=**} {
        allow read, write: if request.auth.uid == userId;
      }
    }
  }
  
// Access to files through Firebase Storage is completely disallowed.
// Files may still be accessible through Google App Engine or GCS APIs.
service firebase.storage {
    match /b/{bucket}/o {
      match /{allPaths=**} {
        allow read, write: if false;
      }
    }
  }  


//images
service firebase.storage {
    match /b/{bucket}/o {
      match /images/{imageId} {
        // Only allow uploads of any image file that's less than 5MB
        allow write: if request.resource.size < 5 * 1024 * 1024
                     && request.resource.contentType.matches('image/.*');
      }
    }
  }
// Rules match specific paths
match /images/profilePhoto.png {
    allow write: if <condition>;
  }
  
  match /images/croppedProfilePhoto.png {
    allow write: if <other_condition>;
  }
// Rules can specify conditions that consider the request context
match /images/profilePhoto.png {
    allow write: if request.auth != null && request.resource.size < 5 * 1024 * 1024;
  }

// Anyone to read a public image if the file is less than 100kB
// Anyone can upload a public file ending in '.txt'
match /public/{imageId} {
    allow read: if resource.size < 100 * 1024;
    allow write: if imageId.matches(".*\\.txt");
  }

  // Require authentication on all internal image reads
match /internal/{imageId} {
    allow read: if request.auth != null;
  }

  // Only a user can upload their profile picture, but anyone can view it
match /users/{userId}/profilePicture.png {
    allow read;
    allow write: if request.auth.uid == userId;
  }

//En el siguiente ejemplo, se muestran casos simples de los cuatro tipos comunes de restricciones de autenticación:

  service firebase.storage {
    match /b/{bucket}/o {
      match /images {
        // Anyone can view any image (no auth, publicly readable)
        match /{allImages=**} {
          allow read;
        }
  
        // Only authenticated users can write to "public" images
        match /public/{imageId} {
          allow write: if request.auth != null;
        }
  
        // Only an individual user can write to "their" images
        match /{userId}/{imageId} {
          allow write: if request.auth.uid == userId;
        }
  
        // Allow a "group" of users to read/write to shared images
        // An owner metadata property on the object contains the groupId for reads
        // A custom token has been minted with a groupId property for writes
        match /{groupId}/{imageId} {
          allow read: if resource.metadata.owner == request.auth.token.groupId;
          allow write: if request.auth.token.groupId == groupId;
        }
      }
    }
  }

  // These rules grant access to a node matching the authenticated
// user's ID from the Firebase auth token
{
    "rules": {
      "users": {
        "$uid": {
          ".read": "$uid === auth.uid",
          ".write": "$uid === auth.uid"
        }
      }
    }
  }

  //rules for users to writte
  {
    "rules": {
      "foo": {
        // /foo is readable by the world
        ".read": true,
  
        // /foo is writable by the world
        ".write": true,
  
        // data written to /foo must be a string less than 100 characters
        ".validate": "newData.isString() && newData.val().length < 100"
      }
    }
  }*/
