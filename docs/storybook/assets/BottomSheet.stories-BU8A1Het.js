import{d as u,b as h,o as d,e as n,w as a,a as l,f as S,n as r,g,T as c,r as f,h as i,i as w}from"./iframe-C-Sj9WMk.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const m=u({__name:"BottomSheet",props:{isShow:{type:Boolean}},setup(e){return(t,s)=>(d(),h(c,{name:"appear"},{default:n(()=>[a(l("div",{class:r(t.$style.overlay),onClick:s[0]||(s[0]=S(k=>t.$emit("close"),["self"]))},[g(c,{name:"slide-up"},{default:n(()=>[a(l("div",{class:r(t.$style.sheet)},[f(t.$slots,"default")],2),[[i,e.isShow]])]),_:3})],2),[[i,e.isShow]])]),_:3}))}}),_="_overlay_1te5n_1",B="_sheet_1te5n_11",y={overlay:_,sheet:B},b={$style:y},p=v(m,[["__cssModules",b]]);m.__docgenInfo={exportName:"default",displayName:"BottomSheet",description:"",tags:{},props:[{name:"isShow",required:!0,type:{name:"boolean"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/components-expansion/components-expansion/src/components/molecules/BottomSheet.vue"]};const N={title:"Components/molecules/BottomSheet",component:p},o={render:()=>({components:{BottomSheet:p},setup(){const e=w(!0);return{isShow:e,toggle:()=>e.value=!e.value}},template:`
      <button @click="toggle">Open</button>
      <BottomSheet :isShow="isShow" @close="toggle">
        <h3>contents</h3>
        <p>slot contents</p>
        <button @click="toggle">Close</button>
      </BottomSheet>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BottomSheet
    },
    setup() {
      const isShow = ref(true);
      const toggle = () => isShow.value = !isShow.value;
      return {
        isShow,
        toggle
      };
    },
    template: \`
      <button @click="toggle">Open</button>
      <BottomSheet :isShow="isShow" @close="toggle">
        <h3>contents</h3>
        <p>slot contents</p>
        <button @click="toggle">Close</button>
      </BottomSheet>
    \`
  })
}`,...o.parameters?.docs?.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,N as default};
