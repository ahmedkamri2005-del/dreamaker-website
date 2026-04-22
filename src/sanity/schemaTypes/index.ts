import { type SchemaTypeDefinition } from 'sanity'

import { pressType } from './pressType'
import { workType } from './workType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pressType, workType],
}
