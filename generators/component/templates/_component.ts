/* beautify ignore:start */
import {Component} from 'angular2/core';
/* beautify ignore:end */

@Component({
    selector: '<%=componentnameFile%>',
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
export class <%=componentnameClass%>Component {

}