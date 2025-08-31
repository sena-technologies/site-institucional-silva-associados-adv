# Como Adicionar as Fotos dos Advogados

## Instruções para substituir os placeholders pelas imagens reais do Pixabay

### Passo 1: Salvar as Imagens
Salve as 4 imagens do Pixabay fornecidas com os seguintes nomes na pasta `public/team/`:

1. **Primeira imagem (mulher em escritório jurídico)**: `maria-associada.jpg`
2. **Segunda imagem (homem sênior de terno)**: `joao-silva.jpg` 
3. **Terceira imagem (homem de meia idade)**: `carlos-pereira.jpg`
4. **Quarta imagem (mulher jovem profissional)**: `ana-santos.jpg`

### Passo 2: Ativar as Imagens Reais
Após salvar as imagens, descomente/substitua o código em `src/app/equipe/page.tsx`:

```tsx
// Substitua a seção atual por:
<div className="aspect-[4/5] bg-primary-100 rounded-2xl overflow-hidden">
  <Image
    src={member.image}
    alt={`Foto de ${member.name}`}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
```

E adicione a importação do Image:
```tsx
import Image from 'next/image';
```

### Passo 3: Verificar o Resultado
As imagens aparecerão automaticamente nos cards correspondentes:
- Dr. João Silva (Sócio Fundador)
- Dra. Maria Associada (Sócia) 
- Dr. Carlos Pereira (Advogado Senior)
- Dra. Ana Santos (Advogada)

### Observações
- As imagens devem ter boa qualidade (mínimo 800x1000px)
- Formato recomendado: JPG ou PNG
- As imagens serão automaticamente otimizadas pelo Next.js
