import { PolicyIdActionTypes, PolicyIdActions } from './app.actions';
import { AppState, initialState } from './app.state';

export function policyIdReducer(state = initialState, action: PolicyIdActions): AppState {
  switch (action.type) {
    case PolicyIdActionTypes.SetPolicyId:
      return {
        ...state,
        policyid: action.payload
      };
    default:
      return state;
  }
}
