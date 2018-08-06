import * as types from './mutation-type'
const mutations = {
  [types.ADD_COUNT](state) {
    state.count++;
  },
  [types.DOWN_COUNT](state) {
  	if(state.count > 0){
  		state.count--;
  	}
  }
};

export default mutations