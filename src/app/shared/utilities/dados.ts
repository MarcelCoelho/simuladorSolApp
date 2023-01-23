import { branch } from "src/app/rotas/interfaces/rotas.interface";

export const dias = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
export const meses = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12");

export const recuperarDelegacoesLocalStorage = (): branch[] => {
  const delegacoes = localStorage.getItem('delegacoes');
  if (delegacoes !== undefined && delegacoes !== null && delegacoes.length > 0) {
    return JSON.parse(delegacoes);
  }
  return [];
}

export const gravarDelegacoesLocalStore = (delegacoes: branch[]) => {
  localStorage.setItem('delegacoes', JSON.stringify(delegacoes));
}