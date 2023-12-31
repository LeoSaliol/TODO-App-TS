/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const getItem = (key: string): any => {
    return localStorage.getItem(key) !== null
        ? JSON.parse(localStorage.getItem('tasks')!)
        : [];
};

export const setItem = (key: string, data: any): any => {
    localStorage.setItem(key, JSON.stringify(data.map((item: any) => item)));
};
