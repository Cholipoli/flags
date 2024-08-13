// Create a blob from the initial JSON data
const blob = new Blob([JSON.stringify(countryData)], { type: 'application/json' });



const { mimeType, ...rest } = countryData;
console.log("a");

const asset = { type: mimeType, ...rest };
console.log('b')


console.log(asset)
const storage = new Storage(client);
console.log('here right ?')
const file = await storage.createFile(
  '66a2ce9b00353217271f', // Your storage bucket ID
  ID.unique(), // Generate a unique ID for the file
  document.getElementById().files[0], // The file content
  [`user:${result.$id}`] // Permissions, e.g., only the user can access
);
console.log('File uploaded successfully:', file);

const fileId = file.$id; // Get the file ID
console.log('e')

// Create a new instance of Databases
const databases = new Databases(client);
console.log('f')
// Update the user document with the file ID
await databases.updateDocument(
  '66a2af6800300ad656e0', //database ID
  '66a2afaf003197d69cb9', // userCollectionId
  result.$id, // The user's document ID
  { fileId: fileId } // Update the document with the file ID
);

console.log('File uploaded and user document updated successfully:', file);

