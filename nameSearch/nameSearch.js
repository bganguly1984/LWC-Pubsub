import { LightningElement,track,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class NameSearch extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    @track queryTerm;

    handleKeyUp(evt) {
        const isEnterKey = evt.keyCode === 13;
        if (isEnterKey) {
            this.queryTerm = evt.target.value;
            fireEvent(this.pageRef, "enterName", this.queryTerm);

        }
    }
}
