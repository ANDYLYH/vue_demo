import * as types from './mutation-type'
export const ADD_COUNT = (context) =>{
	context.commit(types.ADD_COUNT);
}
export const DOWN_COUNT = (context) =>{
	context.commit(types.DOWN_COUNT);
}
