import {Excel} from './components/excel/excel.js'
import {Header} from './components/header/header.js'
import {Toolbar} from './components/toolbar/toolbar.js'
import {Formula} from './components/formula/Formula.js'
import {Table} from './components/table/Table.js'
import {createStore} from "@core/createStore";
import {rootReducer} from "@/redux/rootReducer";
import './scss/index.scss'

const store = createStore(rootReducer, {
  colState: {}
})


const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
})

excel.render()
