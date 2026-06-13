# Pasta de Ícones do Código (Assets)

Você pode colocar os seus arquivos SVG nesta pasta (`/src/assets/icons/`).

## Como usar no React:

1. **Importando diretamente como componente (Vite):**
   Você pode criar um arquivo `.tsx` para cada ícone ou usar uma biblioteca se preferir, ou importar o SVG diretamente:
   ```tsx
   import MyCustomIcon from './assets/icons/my_icon.svg';
   ```

2. **Como componente React Reactivo:**
   Você pode colar o código SVG diretamente em um componente React para ter controle total sobre as cores e tamanhos via Tailwind:
   ```tsx
   export const MyIcon = (props: React.SVGProps<SVGSVGElement>) => (
     <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
       <path d="..." />
     </svg>
   );
   ```
