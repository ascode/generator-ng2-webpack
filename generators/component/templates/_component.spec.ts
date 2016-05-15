/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {<%=componentnameClass%>Component} from './index';
/* beautify ignore:end */

describe('Component: <%=componentnameClass%>Component', () => {

    beforeEachProviders(() => []);

    it('should be defined', inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(<%=componentnameClass%>Component)
            .then((fixture) => {            
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = <<%=componentnameClass%>Component>fixture.debugElement.componentInstance;
                fixture.detectChanges();

                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});