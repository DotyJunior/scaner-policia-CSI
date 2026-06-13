# Pasta de Ícones Estáticos (Public)

Você pode colocar os seus arquivos SVG nesta pasta (`/public/assets/icons/`).

## Como usar no React:

Como esta pasta fica no diretório `/public`, qualquer arquivo colocado aqui poderá ser acessado diretamente pelo navegador através do caminho absoluto `/assets/icons/nome_do_arquivo.svg`.

Por exemplo:
```tsx
<img 
  src="/assets/icons/meu-icone.svg" 
  alt="Meu Ícone" 
  className="w-6 h-6 text-sky-400" 
/>
```
