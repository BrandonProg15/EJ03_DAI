function analizarTexto(texto) {
  const vocales = (texto.match(/[aeiouáéíóú]/gi) || []).length;
  const consonantes = (texto.match(/[bcdfghjklmnñpqrstvwxyz]/gi) || []).length;

  return {
    caracteres: texto.length,
    palabras: texto.trim().split(/\s+/).length,
    vocales: vocales,
    consonantes: consonantes
  };
}

console.log(analizarTexto("Terrible que ya sea viernes"));