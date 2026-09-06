export function referenceCode(){ const d=new Date(); const y=d.getFullYear(); const n=Math.floor(100000+Math.random()*900000); return `DN-${y}-${n}` }
