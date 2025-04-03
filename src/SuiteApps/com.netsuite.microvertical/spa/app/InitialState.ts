// Initial state that contains list off all countries and data about them
import { ProfileServerObject } from '../Services/ServeceDataService';


export interface Item360StateProfile {
	loading: boolean;
	data?: ProfileServerObject;
}