
import Vue from 'vue/dist/vue.common';
import Vuetify from 'vuetify/dist/vuetify';
import vuetify from '@/plugins/vuetify';

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main({portletNamespace, contextPath, portletElementId}) {
    
    const node = document.getElementById(portletElementId);
    
    // Dynamically write markup to portlet's node
/*    node.innerHTML = `
        <div>
            <div>
                <span class="tag">Portlet Namespace:</span> 
                <span class="value">{{portletNamespace}}</span>
            </div>
            <div>
                <span class="tag">Context Path:</span>
                <span class="value">{{contextPath}}</span>
            </div>
            <div>
                <span class="tag">Portlet Element Id:</span>
                <span class="value">{{portletElementId}}</span>
            </div>
            
        </div>
    `;*/
    node.innerHTML = `
        <div>Hello outside world</div>
        <v-app>
            <v-content>
                <v-container>Hello vue world</v-container>
            </v-content>
        </v-app>
    `;
    
    //
    // Use runtime + compiler module in this case so that we don't need to 
    // process templates during build time.
    //
    // See https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // for more information.
    //
    /*new Vue({
		el: `#${portletElementId}`,
		data: {
			portletNamespace, contextPath, portletElementId
		}
	});*/
    new Vue({
        el: `#${portletElementId}`,
        vuetify: new Vuetify(),
		data: {
			portletNamespace, contextPath, portletElementId
		}
    });    
}