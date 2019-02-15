import {FETCH_PROFILE_URL, GAME_URL} from "../URLs";
import {LOGIN_ERROR, LOGIN_SUCCESS} from "./auth";

export const GET_GAME = '[game] GET';
export const GET_GAME_LOCAL = '[game] GET LOCAL';
export const UPDATE_GAME = '[game] UPDATE';
export const FETCH_GAME_SUCCESS = '[game] FETCH_GAME_SUCCESS';
export const FETCH_GAME_ERROR = '[game] FETCH_GAME_ERROR';

export const getGame = () => ({
  type: GET_GAME,
  meta: {
      url:GAME_URL,
      onSuccess: FETCH_GAME_SUCCESS,
      onError: FETCH_GAME_ERROR,
      authenticated: true
  }
})

export const getGameLocal = () => ({
  type: GET_GAME_LOCAL
})

export const updateGame = (data) => ({
  type: UPDATE_GAME,
  payload: data
})
