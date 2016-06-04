/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {<%=componentnameClass%>Component} from './index';
import {Assert} from '<%=assertPath%>';
/* beautify ignore:end */

describe('Component: <%=componentnameClass%>Component', () => {

    let providers = [];      
    let assert = new Assert<<%=componentnameClass%>Component>(<%=componentnameClass%>Component, providers);   
  
    assert.it('should be defined', (component, element, fixture) => {
        fixture.detectChanges();

        expect(component).toBeDefined();
        expect(element).toBeDefined();
    });
});