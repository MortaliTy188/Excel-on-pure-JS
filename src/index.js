import {Excel} from './components/excel/excel.js'
import {Header} from './components/header/header.js'
import {Toolbar} from './components/toolbar/toolbar.js'
import {Formula} from './components/formula/Formula.js'
import {Table} from './components/table/Table.js'
import {createStore} from "@core/createStore";
import {rootReducer} from "@/redux/rootReducer";
import {storage} from "@core/utils";
import {initialState} from "@/redux/initialState";
import './scss/index.scss'

const store = createStore(rootReducer, initialState)

store.subscribe(state => {
  console.log('App State ', state)
  storage('excel-state', state)
})

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
})

excel.render()
