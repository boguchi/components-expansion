import{d as c,c as p,t as i,n as u,o as d}from"./iframe-C-Sj9WMk.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const B=["disabled"],m=c({__name:"ButtonBase",props:{label:{},theme:{default:"primary"},disabled:{type:Boolean,default:!1}},setup(e){const l=e;return(a,o)=>(d(),p("button",{disabled:e.disabled,class:u([a.$style.button,a.$style[e.theme]]),onClick:o[0]||(o[0]=q=>a.$emit("onClick"))},i(l.label),11,B))}}),g="_button_1vgmq_1",b="_primary_1vgmq_19",h="_secondary_1vgmq_31",f="_thirty_1vgmq_43",_={button:g,primary:b,secondary:h,thirty:f},v={$style:_},s=y(m,[["__cssModules",v]]);m.__docgenInfo={exportName:"default",displayName:"ButtonBase",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"theme",required:!1,type:{name:"Theme"},defaultValue:{func:!1,value:'"primary"'}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"onClick"}],sourceFiles:["/home/runner/work/components-expansion/components-expansion/src/components/atoms/ButtonBase.vue"]};const S={title:"Components/atoms/ButtonBase",component:s,argTypes:{label:{control:"text",description:"text"},theme:{control:{type:"select"},options:["primary","secondary","thirty"],description:"colors"}}},t={render:e=>({components:{ButtonBase:s},setup(){return{args:e}},template:'<ButtonBase v-bind="args" />'}),args:{label:"primary",theme:"primary"}},n={render:e=>({components:{ButtonBase:s},setup(){return{args:e}},template:'<ButtonBase v-bind="args" />'}),args:{label:"secondary",theme:"secondary"}},r={render:e=>({components:{ButtonBase:s},setup(){return{args:e}},template:'<ButtonBase v-bind="args" />'}),args:{label:"thirty",theme:"thirty"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ButtonBase
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ButtonBase v-bind="args" />\`
  }),
  args: {
    label: "primary",
    theme: "primary"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ButtonBase
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ButtonBase v-bind="args" />\`
  }),
  args: {
    label: "secondary",
    theme: "secondary"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ButtonBase
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ButtonBase v-bind="args" />\`
  }),
  args: {
    label: "thirty",
    theme: "thirty"
  }
}`,...r.parameters?.docs?.source}}};const $=["Primary","Secondary","Thirty"];export{t as Primary,n as Secondary,r as Thirty,$ as __namedExportsOrder,S as default};
