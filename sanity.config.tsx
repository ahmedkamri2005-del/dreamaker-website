'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/sanity-hidden',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio: {
    components: {
      navbar: (props) => (
        <>
          <div className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800" >
            <a href="/press" className="text-white bg-[#52B4E5] hover:bg-[#4096c4] px-4 py-2 rounded-md font-bold transition-colors shadow-sm" >
              ← Back to Press Page
            </ a >
          </div>
          {props.renderDefault(props)}
        </>
      ),
    },
  },
})
