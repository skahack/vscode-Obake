import Colors from '../interface/colors'
import colorConfig from './color'
import { uniqBy } from '../utils/uniqBy'

const configFactory = configuration => {
  const colorConfigClone = colorConfig
  let colorObj: Colors = colorConfigClone.classic
  /**
   * Default theme settings
   */
  
  //
  // Primitive
  //

  const tokenColorsPrimitive = [
    {
      name: 'String',
      scope: ['string'],
      settings: {
        foreground: colorObj.green
      }
    },
    {
      name: 'Other',
      scope: ['constant'],
      settings: {
        foreground: colorObj.green
      }
    }
  ]

  //
  // Literal
  //

  const tokenColorsLiteral = [
  ]

  //
  // Variable
  //

  const tokenColorsVariable = [
    {
      name: 'Class',
      scope: [
        'meta.class entity.other.inherited-class',
        'meta.class new.expr entity.name.type',
        'entity.name.type.class',
      ],
      settings: {
        foreground: colorObj.orange1,
      }
    },
    {
      name: 'Module',
      scope: [
        'entity.name.type.module',
      ],
      settings: {
        foreground: colorObj.mono1,
      }
    },
    {
      name: 'Function',
      scope: [
        'entity.name.function',
        'meta.function entity.name.type',
      ],
      settings: {
        foreground: colorObj.orange1,
      }
    },
    {
      name: 'Variable',
      scope: [
        'string.template variable',
      ],
      settings: {
        foreground: colorObj.mono1,
      }
    },
    {
      name: 'Variable',
      scope: [
        'variable',
      ],
      settings: {
        foreground: colorObj.mono1,
      }
    },
    {
      name: 'JSX Tag',
      scope: ['entity.name.tag'],
      settings: {
        foreground: colorObj.orange1,
      }
    },
  ]

  //
  // Keyword
  //

  const tokenColorsKeyword = [
    {
      name: 'Control flow',
      scope: [
        'keyword.control',
        'storage.modifier.async',
      ],
      settings: {
        foreground: colorObj.blue,
      }
    },
    {
      name: 'this',
      scope: ['variable.language.this'],
      settings: {
        foreground: colorObj.mono0,
      }
    },
    {
      name: 'Other',
      scope: [
        'storage.type',
        'storage.modifier',
        'meta.import keyword',
      ],
      settings: {
        foreground: colorObj.mono0,
        // fontStyle: 'bold',
      }
    }
  ]

  //
  // Type
  //

  const tokenColorsType = [
    {
      name: 'Punctuation',
      scope: [
        'meta.type punctuation',
        'meta.type meta.brace',
        'meta.type keyword.operator.type.annotation',
      ],
      settings: {
        foreground: colorObj.mono1
      }
    },
    {
      name: 'Operator',
      scope: [
        'meta.type storage.type.function.arrow',
      ],
      settings: {
        foreground: colorObj.blue
      }
    },
    {
      name: 'Parameters',
      scope: [
        'meta.type meta.field',
        'meta.type meta.field meta.parameters',
        'meta.type meta.field variable.parameter',
      ],
      settings: {
        foreground: colorObj.mono1
      }
    },
    {
      name: 'Other',
      scope: ['meta.type', 'meta.type entity.name.type'],
      settings: {
        foreground: colorObj.purple
      }
    },
  ]

  //
  // Operator
  //

  const tokenColorsOperator = [
    {
      name: 'import ``*`` as A',
      scope: ['meta.import constant.language.import-export-all'],
      settings: {
        foreground: colorObj.mono0,
      }
    },
    {
      name: '=>',
      scope: ['storage.type.function.arrow'],
      settings: {
        foreground: colorObj.blue,
      }
    },
    {
      name: '`${}`',
      scope: [
        'string.template punctuation.definition.template-expression',
      ],
      settings: {
        foreground: colorObj.blue,
      }
    },
    {
      name: '()',
      scope: [
        'meta.brace',
      ],
      settings: {
        foreground: colorObj.mono1,
      }
    },
    {
      name: '{}',
      scope: [
        'meta.objectliteral punctuation.separator.key-value',
        'meta.objectliteral punctuation.definition.block',
        'meta.objectliteral meta.block meta.objectliteral punctuation.definition.block',
        'meta.objectliteral meta.block meta.objectliteral meta.block meta.objectliteral punctuation.definition.block',
        'punctuation.definition.binding-pattern.object',
      ],
      settings: {
        foreground: colorObj.blue,
      }
    },
    {
      name: '{}',
      scope: [
        'meta.objectliteral meta.block punctuation.definition.block',
        'meta.objectliteral meta.block meta.objectliteral meta.block punctuation.definition.block',
        'meta.objectliteral meta.block meta.objectliteral meta.block meta.objectliteral meta.block punctuation.definition.block',
      ],
      settings: {
        foreground: colorObj.mono1,
      }
    },
    {
      name: '[]',
      scope: [
        'meta.array.literal meta.brace.square',
        'punctuation.definition.binding-pattern.array',
      ],
      settings: {
        foreground: colorObj.blue,
      }
    },
    {
      name: 'JSX: foo={}',
      scope: [
        'meta.tag punctuation.section.embedded',
      ],
      settings: {
        foreground: colorObj.blue,
      }
    },
    {
      name: 'Other',
      scope: ['keyword.operator'],
      settings: {
        foreground: colorObj.blue,
      }
    },
  ]

  //
  // Comment
  //

  const tokenColorsComment = [
    {
      name: 'Comment',
      scope: ['comment'],
      settings: {
        foreground: colorObj.mono3
      }
    }
  ]

  //
  // Default
  //

  const tokenColorsDefault = [
  ]

  let result: any = [
    ...tokenColorsDefault,
    ...tokenColorsLiteral,
    ...tokenColorsPrimitive,
    ...tokenColorsVariable,
    ...tokenColorsKeyword,
    ...tokenColorsOperator,
    ...tokenColorsComment,
    ...tokenColorsType,
  ]
  return result
}
export default configFactory
