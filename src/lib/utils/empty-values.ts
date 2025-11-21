/**
 * ⚠️ RÈGLE CRITIQUE : Système "empty" pour LeadProsper et CRM
 * 
 * **Pourquoi ce système existe :**
 * LeadProsper (et de nombreux CRM) ont un problème technique : leurs systèmes de 
 * filtrage et de routing ne savent PAS gérer les valeurs vides ('', null, undefined).
 * 
 * **Conséquences sans le système :**
 * - ❌ Les filtres LeadProsper ne fonctionnent pas
 * - ❌ Les leads ne sont pas routés correctement
 * - ❌ Les champs vides cassent les automatisations
 * - ❌ Le CRM peut rejeter le lead
 * 
 * **La Solution :**
 * Remplacer TOUTES les valeurs vides par la chaîne "empty" avant d'envoyer les données.
 * 
 * @example
 * ```typescript
 * const payload = {
 *   first_name: 'Jean',
 *   phone: '',              // ❌ Valeur vide
 *   step1_age: undefined,   // ❌ Undefined
 *   step2_situation: null,  // ❌ Null
 * };
 * 
 * const cleaned = replaceEmptyWithKeyword(payload);
 * // Résultat :
 * // {
 * //   first_name: 'Jean',
 * //   phone: 'empty',           // ✅ Remplacé
 * //   step1_age: 'empty',       // ✅ Remplacé
 * //   step2_situation: 'empty', // ✅ Remplacé
 * // }
 * ```
 */
export function replaceEmptyWithKeyword<T extends Record<string, unknown>>(
  input: T
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      // Si la valeur est vide, undefined ou null, remplacer par "empty"
      if (value === '' || value === undefined || value === null) {
        return [key, 'empty'];
      }
      return [key, value];
    }),
  );
}

