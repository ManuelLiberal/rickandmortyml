import {
  ADD_FAVORITE,
  CLEAN_DETAIL,
  FILTER,
  GET_CHARACTER_DETAIL,
  REMOVE_FAVORITE,
  ORDER,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  characterDetail: {},
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        // myFavorites: [...state.myFavorites, action.payload],
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Descendente"
            ? [...state.myFavorites].sort((a, b) => b.id - a.id)
            : [...state.myFavorites].sort((a, b) => a.id - b.id),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
