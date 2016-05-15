/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {<%=servicenameClass%>} from './index';
/* beautify ignore:end */

describe('Service: <%=servicenameClass%>' , () => {

    beforeEachProviders(() => [<%=servicenameClass%>]);

    it('should be defined', inject([<%=servicenameClass%>], (service: <%=servicenameClass%>) => {
        expect(service).toBeDefined();
    }));

});