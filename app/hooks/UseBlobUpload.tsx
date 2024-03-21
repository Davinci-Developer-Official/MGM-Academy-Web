import React from 'react';
import { put } from '@vercel/blob';

async function UseBlobUpload({data}: any) {
     
    const blob = await put(data.name, data, {
        access: 'public',
        token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
    });
  return blob
}

export default UseBlobUpload