import Component from '@glimmer/component';

export default class CarItemComponent extends Component {

 get shouldDisplay() {
    return this.args.isMakeFound;
  }
} //CarItemComponent
