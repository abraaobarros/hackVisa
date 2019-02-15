export let testing_env = false

export let base = 'https://beta.bynd.com.br/'
if (testing_env) {
    base = 'https://test.bynd.com.br/'
}
export let GAME_URL = `${base}rest/users/ranking`;
export let SCHEDULE_URL = `${base}api/v2/fact/intentions/search/weekly`;
export let PROFILE_URL = `${base}api/v2/auth`;
export let FORGOT_PASSWORD_URL = `${base}api/v2/auth/activation-code`;

export let CODE_VALIDATE_PASSWORD_URL = `${base}api/v2/auth/activation-code/validate`;
export let CODE_VALIDATE_PASSWORD_ONLY_URL = `${base}api/v2/auth/activation-code/validate/only`;

export let VALID_EMAIL_URL = `${base}rest/users/status`;
export let NOTIFICATIONS_URL = `${base}api/v2/notifications?limit=`;
export let INTENTIONS_URL = `${base}api/v2/fact/intentions/waiting`;
export let INTENTIONS_MATCH_URL = `${base}api/v2/fact/intentions/match`;
export let INTENTIONS_MATCH_SCHEDULE_URL = `${base}api/v2/fact/intentions/schedule-match`;
export let CARS_URL = `${base}/api/v2/cars`;
export let CARS_DELETE_URL = (id) => `${base}api/v2/cars/${id}/remove`;
export let CARS_UPDATE_URL = (id) => `${base}api/v2/cars/${id}/update`;
export let CREATE_USER_URL = `${base}api/v2/users`;
export let SEARCH_USER_URL = `${base}api/v2/users`;
export let FAVOURITES_URL = `${base}api/v2/favourites`;
export let PARKING_LOTS_URL = `${base}api/v2/parking-lots`;
export let PARKING_LOTS_SELECT_URL = (id) => `${base}api/v2/parking-lots/${id}/select`;
export let FAVOURITES_URL_ADD = (userId) => `${base}api/v2/favourites/${userId}/add`;
export let FAVOURITES_URL_REMOVE = (userId) => `${base}api/v2/favourites/${userId}/remove`;

export let RECURRENCES = `${base}api/v2/recurrences`;
export let RECURRENCES_DELETE = (id) => `${base}api/v2/recurrences/${id}/destroy`;
export let RECURRENCES_UPDATE = (id) => `${base}api/v2/recurrences/${id}/update`;
export let RECURRENCES_UPDATE_CAR = (id) => `${base}api/v2/fact/intentions/${id}/update-car`;
export let RECURRENCES_UPDATE_STATUS = (id) => `${base}api/v2/fact/intentions/${id}/status`;

export let DELETE_INTENTION_URL = (intentionId) => `${base}api/v2/fact/intentions/${intentionId}/remove`;
export let DELETE_ROUTINE_URL = (routineId) => `${base}api/v2/recurrences/${routineId}/destroy`;
export let ACTIVATE_ROUTINE_URL = (routineId) => `${base}api/v2/recurrences/${routineId}/enabled`;
export let ADDRESSES_URL = `${base}api/v2/address`;
export let GEOCODE_URL = `${base}rest/geocode`;

export let FIND_DRIVER_URL = `${base}api/v2/fact/intentions/find-driver`;
export let FIND_RIDER_URL = `${base}api/v2/fact/intentions/find-riders`;
export let FINISH_MATCH_URL = `${base}api/v2/fact/intentions/finish-match`;




