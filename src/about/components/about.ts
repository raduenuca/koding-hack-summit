import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Alert } from 'ng2-bootstrap/ng2-bootstrap';

import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'about',
  moduleId: module.id,
  templateUrl: './about.html',
  directives: [Alert, FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class AboutCmp {
  newName: string;
  alerts:Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    }
  ];

  constructor(public list: NameList) {}
 /*
 * @param newname  any text as input.
 * @returns return false to prevent default form submit behavior to refresh the page.
 */
  addName(): boolean {
    this.list.add(this.newName);
    this.newName = '';
    return false;
  }

    closeAlert(i:number) {
    this.alerts.splice(i, 1);
  }

  addAlert() {
    this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
  }
}
