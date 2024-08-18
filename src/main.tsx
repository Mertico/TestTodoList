import { createApp } from 'vue'
import './style.css'
import AppReact from './react/App.tsx'
import AppVue from './vue/App.vue'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('app-react')!).render(
    <StrictMode>
      <AppReact />
    </StrictMode>,
  )

createApp(AppVue).mount('#app-vue')
