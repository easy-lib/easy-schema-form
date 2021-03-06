export default {
  type: "object",
  required: ['name'],
  properties: {
    name: {
      title: 'User',
      type: "string",
      description: "zzzzzz",
      pattern: "[0-9]+"
    },
    email: {
      title: "Email",
      type: "string",
      enum: ["aa@qq.com", "zz@xx.com"]
    },
    script: {
      type: "string",
      title: "JsScript",
      ui: {
        type: 'CodeEditor'
      }
    },
    number: {
      title: 'Number',
      type: 'number',
      default: 10
    },
    testObject: {
      title: 'testObject',
      type: 'object',
      properties: {
        name: {
          title: 'xxxx',
          type: "string",
          description: "xxxxxxx"
        },
        email: {
          title: "yyyy",
          type: "string"
        },
      }
    },
    
    
  }
}