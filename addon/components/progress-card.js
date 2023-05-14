import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class ProgressCardComponent extends Component {
    get style() {
        return htmlSafe("background:"+ this.args.color);
    }
}