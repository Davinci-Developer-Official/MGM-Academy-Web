import * as fs from 'fs';
import * as path from 'path';
import * as mime from 'mime-types';
import { CDNClient } from 'your-cdn-library';
import  db  from 'pg';

export class ImageStorageManager {
  private static localDirectory = 'path/to/local/storage';

  static storeLocally(filename: string): void {
    const sourcePath = filename;
    const destinationPath = path.join(this.localDirectory, path.basename(filename));

    const imageData = fs.readFileSync(sourcePath);
    fs.writeFileSync(destinationPath, imageData);

    console.log(`Image stored locally at: ${destinationPath}`);
  }

  static storeInCDN(filename: string): void {
    const cdn = new CDNClient(); // Initialize your CDN client with credentials

    const sourcePath = filename;
    const imageData = fs.readFileSync(sourcePath);
    const mimeType = mime.lookup(sourcePath) || 'application/octet-stream';

    cdn.uploadImage('your-bucket-name', 'path/in/bucket', imageData, mimeType)
      .then(() => console.log('Image uploaded to CDN'))
      .catch((error:any) => console.error('Error uploading image to CDN:', error));
  }

  static storeInDatabase(filename: string): void {
    const sourcePath = filename;
    const imageData = fs.readFileSync(sourcePath);
    const mimeType = mime.lookup(sourcePath) || 'application/octet-stream';

    db.none('INSERT INTO images(filename, data, mime_type) VALUES($1, $2, $3)', [filename, imageData, mimeType])
      .then(() => console.log('Image inserted into database'))
      .catch((error:any) => console.error('Error inserting image into database:', error));
  }
}

// Example usage:
const filename = 'path/to/your/image.jpg';

// Store locally
ImageStorageManager.storeLocally(filename);

// Store in CDN
ImageStorageManager.storeInCDN(filename);

// Store in database
ImageStorageManager.storeInDatabase(filename);
