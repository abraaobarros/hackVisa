export const SHOW_SPINNER      = '[ui] show spinner';
export const HIDE_SPINNER      = '[ui] hide spinner';
export const SHOW_ERROR      = '[ui] show error';
export const CLEAR_ERROR      = '[ui] clear error';

export const showSpinner = () => ({
  type: SHOW_SPINNER
});

export const hideSpinner = () => ({
  type: HIDE_SPINNER
});

export const showError = (error) => ({
    type: SHOW_ERROR,
    payload: error
});

export const clearError = () => ({
    type: CLEAR_ERROR
});

