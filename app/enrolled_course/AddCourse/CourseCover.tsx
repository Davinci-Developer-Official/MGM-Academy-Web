'use client';
import { put } from '@vercel/blob';
import React, { useState } from 'react';

function results(result: string) {
    const refined = (res: string) => {
        return res;
    };
    return refined(result);
}

interface CourseCoverProps {
    file: File;
    data: ArrayBuffer;
    action: string;
    setResult: (result: string) => void;
}

export function CourseCover({ file, data, action, setResult }: CourseCoverProps) {
    async function uploadImage() {
        if (file.size === 0) {
            setResult('no file was uploaded');
            return 'none uploaded';
        } else {
            try {
                const upload = await put(file.name, data, {
                    access: 'public',
                    token: process.env.BLOB_READ_WRITE_TOKEN as string,
                });
                if (upload && upload.url) {
                    setResult(JSON.stringify(upload.url) + ' uploaded');
                    return upload.url;
                } else {
                    setResult('unavailable');
                    return 'unavailable';
                }
            } catch (error) {
                setResult(JSON.stringify(error));
                return error;
            }
        }
    }

    //state check;
    if (action === 'upload') return uploadImage();
    else if (action === 'delete') return setResult('delete');
}

interface CourseCoverResultProps {
    result: string; 
}

export function CourseCoverResult({ result }: CourseCoverResultProps) {
    return <p>{JSON.stringify(result)}</p>
}
