import lt1000 from './lt1000'
import gt1000 from './gt1000'

/**
 * Passar para o feminino alguns números.
 *
 * @method toFemale
 * @param {string} num Um número qualquer.
 * @returns {string} O número com algumas partes no feminino.
 * @example
 * toFemale('quarenta e dois')
 * // 'quarenta e duas'
 */
export const toFemale = (num) => {
  return num
    .replace(/\bum\b/, 'uma')
    .replace(/\bdois\b/, 'duas')
}

/**
 * Obter qualquer número escrito por extenso.
 *
 * @method writeInt
 * @param {string} int Um número para ser escrito.
 * @param {string} [option='m'] A opção do gênero do número.
 * @returns {string} O número escrito.
 */
export default (int, option = 'm') => {
  const intNum = parseInt(int)
  let num

  if (intNum < 1000) num = lt1000(intNum)
  if (intNum === 1000) num = 'mil'
  if (intNum > 1000) num = gt1000(int)

  return option === 'f'
    ? toFemale(num)
    : num
}