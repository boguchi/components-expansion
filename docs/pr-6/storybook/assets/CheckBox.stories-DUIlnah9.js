import{d as m,m as u,u as d,c as i,w as x,a as r,v as b,n as a,t as k,o as h}from"./iframe-DkujUQDb.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-DUEg7uLd.js";const c=m({__name:"CheckBox",props:u({label:{}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const n=d(e,"modelValue");return(s,t)=>(h(),i("label",{class:a(s.$style.checkboxWrapper)},[x(r("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=p=>n.value=p),class:a(s.$style.checkboxInput)},null,2),[[b,n.value]]),r("span",{class:a(s.$style.labelText)},k(e.label),3)],2))}}),f="_checkboxWrapper_f49m6_2",g="_checkboxInput_f49m6_10",B={checkboxWrapper:f,checkboxInput:g},C={$style:B},l=_(c,[["__cssModules",C]]);c.__docgenInfo={exportName:"default",displayName:"CheckBox",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}}],sourceFiles:["/home/runner/work/components-expansion/components-expansion/src/components/atoms/CheckBox.vue"]};const I={title:"Components/atoms/CheckBox",component:l,argTypes:{label:{control:"text"}}},o={render:e=>({components:{CheckBox:l},setup(){return{args:e}},template:'<CheckBox v-bind="args" />'}),args:{label:"label"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CheckBox
    },
    setup() {
      return {
        args
      };
    },
    template: \`<CheckBox v-bind="args" />\`
  }),
  args: {
    label: "label"
  }
}`,...o.parameters?.docs?.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,I as default};
