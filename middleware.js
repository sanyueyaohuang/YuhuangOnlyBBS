import { NextResponse } from 'next/server';

export function middleware(request) {
    // Clone the request to modify it
    let newRequest = new Request(request);
    
    // Modify the request headers
    newRequest.headers.set('Referer', 'http://bbs.yuhuangonly.com/');
    
    // You can add more headers as needed
    // newRequest.headers.set('Another-Header', 'HeaderValue');

    // Return the modified request
    return NextResponse.rewrite(newRequest);
}