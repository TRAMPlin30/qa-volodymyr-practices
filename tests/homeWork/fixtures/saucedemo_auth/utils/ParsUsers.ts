
export class ParsUsers {



static parseUsers(text: string): string[] {
  return text
    .split('\n')                // разбить по строкам
    .map(t => t.trim())         // убрать пробелы
    .filter(t => t !== '')      // убрать пустые строки
    .filter(t => !t.includes('Accepted usernames are:')); // убрать заголовок
  }
}