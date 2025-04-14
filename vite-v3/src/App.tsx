// HelloWorld.tsx
import { defineComponent } from 'vue';

const HelloWorld = defineComponent({
    name: 'HelloWorld',
    setup() {
        return () => (
            <div>
                <h1>Hello, Vue + TypeScript + JSX!</h1>
            </div>
        );
    },
});

export default HelloWorld;