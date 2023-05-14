import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';
import { action } from '@ember/object';


export default class ProgressCardComponent extends Component {
    get style() {
        return htmlSafe("background:"+ this.args.color);
    }
}
