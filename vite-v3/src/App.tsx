// HelloWorld.tsx
import { defineComponent } from "vue";

// import "./styles/index.css";
import classes from "@/styles/test.module.css";
import "@/styles/test.less";
import { a } from "./test";
import { A } from "./type";
const HelloWorld = defineComponent({
  name: "HelloWorld",
  setup() {
    return () => (
      //   <div class={`root ${classes.moduleClass}`}>
      <div class={`root`}>
        <h1>Hello, Vue + TypeScript + JSX!{a.name}</h1>
      </div>
    );
  },
});

export default HelloWorld;
