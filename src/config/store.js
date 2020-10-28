import { combineReducers, createStore } from "redux";
//Nome do arquivo reducer 
import con from '../pages/Jogos/Roleta/Pergunta/reducer';

const rootReducer = combineReducers({
    playerCon: con,
});

const store = createStore(rootReducer);

export default store;
