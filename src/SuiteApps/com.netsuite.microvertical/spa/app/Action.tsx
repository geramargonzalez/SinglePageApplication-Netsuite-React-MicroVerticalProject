  // Action creators - functions that return the action object
import ServerDataService, { ProfileServerObject,  } from  '../Services/ServeceDataService';
import {Store} from '@uif-js/core';



export enum ActionType {
	PROFILE_SET_LOADING = 'profileSetLoading',
	PROFILE_LOAD_DATA = 'profileSetLoadData',
}

// Action interfaces
interface ProfileSetLoadingAction {
	type: typeof ActionType.PROFILE_SET_LOADING;
	value: boolean;
}

interface ProfileLoadDataAction {
	type: typeof ActionType.PROFILE_LOAD_DATA;
	data: ProfileServerObject;
}

  export type AtomicAction =
  | ProfileSetLoadingAction
  | ProfileLoadDataAction;


export const Action = {
    
    profileSetLoading(value: boolean): ProfileSetLoadingAction {
		return {
			type: ActionType.PROFILE_SET_LOADING,
			value,
		};
	},
	profileLoadData(data: ProfileServerObject): ProfileLoadDataAction {
		return {
			type: ActionType.PROFILE_LOAD_DATA,
			data,
		};
	},

	profileLoad(): Store.ActionCreator {
		return async (dispatch: Store.DispatchFunc): Promise<void> => {
			dispatch(Action.profileSetLoading(true));
			const profile: ProfileServerObject = await ServerDataService.profileLoadJSONData();
			dispatch(Action.profileLoadData(profile));
			dispatch(Action.profileSetLoading(false));
		};
	},
};