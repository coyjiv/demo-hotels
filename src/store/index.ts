export interface Filters {
    rating: number;
    adultCount: number;
    childrenCount: number;
    isActive: boolean;
  }
  
export type ActionType = 
    | { type: 'SET_RATING'; payload: number }
    | { type: 'SET_ADULT_COUNT'; payload: number }
    | { type: 'SET_CHILDREN_COUNT'; payload: number }
    | { type: 'SET_IS_ACTIVE'; payload: boolean}
    | { type: 'RESET_FILTERS';}
  
  export const initialState: Filters = {
    rating: 1,
    adultCount: 2,
    childrenCount: 1,
    isActive: false,
  };
  
  export const filtersReducer = (state: Filters, action: ActionType): Filters => {
    switch (action.type) {
      case 'SET_RATING':
        return { ...state, rating: action.payload };
      case 'SET_ADULT_COUNT':
        return { ...state, adultCount: action.payload };
      case 'SET_CHILDREN_COUNT':
        return { ...state, childrenCount: action.payload };
      case 'SET_IS_ACTIVE':
        return { ...state, isActive: action.payload };
      case 'RESET_FILTERS':
        return initialState;
      default:
        return state;
    }
  };
  