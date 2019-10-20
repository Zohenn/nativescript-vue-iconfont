import Vue from 'nativescript-vue';

export default {
    name: "Icon",
    functional: true,
    props: {
        icon: String,
        type: {
            type: String,
            default: 'label',
            validator(v){
                return ['label', 'span'].indexOf(v) !== -1;
            }
        }
    },

    render(createElement, context){
        const { prefix } = context.injections;
        context.data.staticClass = context.data.staticClass || '';
        context.data.staticClass += ` ${prefix}`;

        const icon = context.props.icon.startsWith(`${prefix}-`) ? context.props.icon : `${prefix}-` + context.props.icon;

        return createElement(context.props.type, context.data, Vue.options.filters.fonticon(icon));
    }
}
