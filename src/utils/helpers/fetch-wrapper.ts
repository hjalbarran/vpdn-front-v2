import { useAuthStore } from '@/stores/auth';
import axiosServices from '../axios';

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method: string) {
    return (url: any, body?: any) => {
        const requestOptions: any = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.data = JSON.stringify(body);
        }
        return axiosServices(url, requestOptions).then(handleResponse);
    };
}

// helper functions

function authHeader(url: any) {
    // return auth header with jwt if user is logged in and request is to the api url
    const { user } = useAuthStore();
    const isLoggedIn = !!user?.data.Authorization;
    const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.data.Authorization}` };
    } else {
        return {};
    }
}

function handleResponse(response: any) {
    return response
    
    // return response.text().then((text: any) => {
    //     const data = text && JSON.parse(text);

    //     if (!response.ok) {
    //         const { user, logout } = useAuthStore();
    //         if ([401, 403].includes(response.status) && user) {
    //             // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    //             logout();
    //         }

    //         const error = (data && data.message) || response.statusText;
    //         return Promise.reject(error);
    //     }

    //     return data;
    // });
}
