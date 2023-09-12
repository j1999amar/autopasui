import { Action } from '@ngrx/store';

export enum PolicyIdActionTypes {
  SetPolicyId = '[PolicyId] Set PolicyId'
}

export class SetPolicyId implements Action {
  readonly type = PolicyIdActionTypes.SetPolicyId;

  constructor(public payload: string) {}
}

export type PolicyIdActions = SetPolicyId;
