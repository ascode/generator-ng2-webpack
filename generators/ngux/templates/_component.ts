/* beautify ignore:start */
import {Component} from '@angular/core';
require('./ngux/<%=componentname%>.js');
/* beautify ignore:end */

@Component({
    selector: '<%=componentnameClass%>',
    template: require('./<%=componentname%>.ngux')
})
export class <%=componentnameClass%> {

}