import {Excel} from './components/excel/excel.js'
import {Header} from './components/header/header.js'
import {Toolbar} from './components/toolbar/toolbar.js'
import {Formula} from './components/formula/Formula.js'
import {Table} from './components/table/Table.js'
import './scss/index.scss'


const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render()
