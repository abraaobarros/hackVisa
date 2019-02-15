export const STORAGE_GET = '[storage] STORAGE_GET';
export const STORAGE_SET = '[storage] STORAGE_SET';

export function getStorage(prop, onSuccess, onError, onEmpty) {
    return {
        type: STORAGE_GET,
        meta: {
            prop: prop,
            onSuccess,
            onError,
            onEmpty: onEmpty
        }
    }
}

export const setStorage = (prop, data) => ({
    type: STORAGE_SET,
    payload: data,
    meta: {
        prop: prop,
    }
})
