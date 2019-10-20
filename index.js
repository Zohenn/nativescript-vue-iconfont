import Vue from 'nativescript-vue';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
import Icon from './Icon';

export const iconComponentFactory = prefix => {
    Vue.component(`${prefix}-icon`, {
        extends: Icon,
        inject: {
            prefix: {
                default: prefix
            }
        }
    });
};

export default {
    install(Vue, { paths, debug }){
        TNSFontIcon.paths = paths;
        TNSFontIcon.debug = debug;

        TNSFontIcon.loadCssSync();

        Vue.filter('fonticon', fonticon);

        for(let prefix in paths){
            if(paths.hasOwnProperty(prefix)){
                iconComponentFactory(prefix);
            }
        }
    }
}
