import {DomListener} from "./DomListener"

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners || [])
  }

  // return template of component
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}
