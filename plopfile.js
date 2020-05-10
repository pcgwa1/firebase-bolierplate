const requireField = fieldName => {
    return value => {
        if (String(value).length === 0 ) {
            return fieldName + ' is required'
        }
        return true
    }
}

module.exports = plop => {
    plop.setGenerator('atom', {
        description: 'Create a reusable atom',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your atom name?',
                validate: requireField('name')
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/atoms/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile:
                    'plop-templates/Atom/Atom.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/atoms/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile:
                    'plop-templates/Atom/Atom.test.js.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/atoms/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile:
                    'plop-templates/Atom/Atom.module.css.hbs',
            },
            {
                type: 'add',
                path: 'src/components/atoms/{{pascalCase name}}/index.js',
                templateFile: 'plop-templates/Atom/index.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/atoms/index.js',
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/components/atoms/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/components/atoms/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`,
            },
        ],
    })

    plop.setGenerator('molecule', {
        description: 'Create a reusable molecule',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your molecule name?',
                validate: requireField('name')
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/molecules/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile:
                    'plop-templates/Molecule/Molecule.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/molecules/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile:
                    'plop-templates/Molecule/Molecule.test.js.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/molecules/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile:
                    'plop-templates/Molecule/Molecule.module.css.hbs',
            },
            {
                type: 'add',
                path: 'src/components/molecules/{{pascalCase name}}/index.js',
                templateFile: 'plop-templates/Molecule/index.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/molecules/index.js',
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/components/molecules/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/components/molecules/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`,
            },
        ],
    })

    plop.setGenerator('organism', {
        description: 'Create a reusable organism',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your organism name?',
                validate: requireField('name')
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/organisms/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile:
                    'plop-templates/Organism/Organism.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/organisms/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile:
                    'plop-templates/Organism/Organism.test.js.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/organisms/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile:
                    'plop-templates/Organism/Organism.module.css.hbs',
            },
            {
                type: 'add',
                path: 'src/components/organisms/{{pascalCase name}}/index.js',
                templateFile: 'plop-templates/Organism/index.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/organisms/index.js',
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/components/organisms/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/components/organisms/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`,
            },
        ],
    })

    plop.setGenerator('container', {
        description: 'Create a container',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your container name?',
                validate: requireField('name')
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile:
                    'plop-templates/Container/Container.js.hbs',
            },
            {
                type: 'add',
                path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}Provider.js',
                templateFile:
                    'plop-templates/Container/ContextProvider.js.hbs',
            },
            {
                type: 'add',
                path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile:
                    'plop-templates/Container/Container.test.js.hbs',
            },
            {
                type: 'add',
                path:
                    'src/containers/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile:
                    'plop-templates/Container/Container.module.css.hbs',
            },
            {
                type: 'add',
                path: 'src/containers/{{pascalCase name}}/index.js',
                templateFile: 'plop-templates/Container/index.js.hbs',
            },
            {
                type: 'add',
                path: 'src/containers/index.js',
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/containers/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/containers/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`,
            },
        ],
    })

    plop.setGenerator('form', {
        description: 'Create a form',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your form name?',
                validate: requireField('name')
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/forms/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile:
                    'plop-templates/Form/Form.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/forms/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile:
                    'plop-templates/Form/Form.test.js.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/forms/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile:
                    'plop-templates/Form/Form.module.css.hbs',
            },
            {
                type: 'add',
                path: 'src/components/forms/{{pascalCase name}}/index.js',
                templateFile: 'plop-templates/Form/index.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/forms/index.js',
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/components/forms/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/components/forms/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`,
            },
        ],
    })

    plop.setGenerator('service', {
        description: 'Create service',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your service name?',
                validate: requireField('name')
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/helpers/services/{{camelCase name}}.js',
                templateFile: 'plop-templates/Service/service.js.hbs',
            },
            {
                type: 'add',
                path: 'src/helpers/services/index.js',
                templateFile: 'plop-templates/Service/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/helpers/services/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{camelCase name}} from './{{camelCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/helpers/services/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{camelCase name}},`,
            }
        ],
    })

    plop.setGenerator('hook', {
        description: 'Create a custom react hook',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your hook name?',
                validate: requireField('name')
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/helpers/hooks/{{camelCase name}}.js',
                templateFile: 'plop-templates/Hook/hook.js.hbs',
            },
            {
                type: 'add',
                path: 'src/helpers/hooks/index.js',
                templateFile: 'plop-templates/Hook/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/helpers/hooks/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{camelCase name}} from './{{camelCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/helpers/hooks/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{camelCase name}},`,
            }
        ],
    })

    plop.setGenerator('firestore-hook', {
        description: 'Create a custom firebase hook',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your firebase hook name?',
                validate: requireField('name')
            },
            {
                type: 'list',
                name: 'functionType',
                message: 'Select a function action?',
                choices: [ 'create', 'read', 'update', 'delete'],
                validate: requireField('functionType')
            },
        ],
        actions: (data) => {
            let action = []
			if (data.functionType === 'create') {
				action = [
                    {
                        type: 'add',
                        path: 'src/helpers/README.md',
                        templateFile: 'plop-templates/Helper/helper.js.hbs',
                    },
                    {
                        type: 'add',
                        path: 'src/helpers/firestore/{{camelCase name}}.js',
                        templateFile: 'plop-templates/FirestoreHook/create.js.hbs',
                    },
                    {
                        type: 'add',
                        path: 'src/helpers/firestore/index.js',
                        templateFile: 'plop-templates/FirestoreHook/injectable-index.js.hbs',
                        skipIfExists: true,
                    },
                    {
                        type: 'append',
                        path: 'src/helpers/firestore/index.js',
                        pattern: `/* PLOP_INJECT_IMPORT */`,
                        template: `import {{camelCase name}} from './{{camelCase name}}';`,
                    },
                    {
                        type: 'append',
                        path: 'src/helpers/firestore/index.js',
                        pattern: `/* PLOP_INJECT_EXPORT */`,
                        template: `\t{{camelCase name}},`,
                    }
                ]
            }
            
            if (data.functionType === 'read') {
				action = [
                    {
                        type: 'add',
                        path: 'src/helpers/firestore/{{camelCase name}}.js',
                        templateFile: 'plop-templates/FirestoreHook/read.js.hbs',
                    },
                    {
                        type: 'add',
                        path: 'src/helpers/firestore/index.js',
                        templateFile: 'plop-templates/FirestoreHook/injectable-index.js.hbs',
                        skipIfExists: true,
                    },
                    {
                        type: 'append',
                        path: 'src/helpers/firestore/index.js',
                        pattern: `/* PLOP_INJECT_IMPORT */`,
                        template: `import {{camelCase name}} from './{{camelCase name}}';`,
                    },
                    {
                        type: 'append',
                        path: 'src/helpers/firestore/index.js',
                        pattern: `/* PLOP_INJECT_EXPORT */`,
                        template: `\t{{camelCase name}},`,
                    }
                ]
            }
            
            if (data.functionType === 'update') {
				action = [
                    {
                        type: 'add',
                        path: 'src/helpers/firestore/{{camelCase name}}.js',
                        templateFile: 'plop-templates/FirestoreHook/update.js.hbs',
                    },
                    {
                        type: 'add',
                        path: 'src/helpers/firestore/index.js',
                        templateFile: 'plop-templates/FirestoreHook/injectable-index.js.hbs',
                        skipIfExists: true,
                    },
                    {
                        type: 'append',
                        path: 'src/helpers/firestore/index.js',
                        pattern: `/* PLOP_INJECT_IMPORT */`,
                        template: `import {{camelCase name}} from './{{camelCase name}}';`,
                    },
                    {
                        type: 'append',
                        path: 'src/helpers/firestore/index.js',
                        pattern: `/* PLOP_INJECT_EXPORT */`,
                        template: `\t{{camelCase name}},`,
                    }
                ]
            }
            
            if (data.functionType === 'delete') {
				action = [
                    {
                        type: 'add',
                        path: 'src/helpers/firestore/{{camelCase name}}.js',
                        templateFile: 'plop-templates/FirestoreHook/delete.js.hbs',
                    },
                    {
                        type: 'add',
                        path: 'src/helpers/firestore/index.js',
                        templateFile: 'plop-templates/FirestoreHook/injectable-index.js.hbs',
                        skipIfExists: true,
                    },
                    {
                        type: 'append',
                        path: 'src/helpers/firestore/index.js',
                        pattern: `/* PLOP_INJECT_IMPORT */`,
                        template: `import {{camelCase name}} from './{{camelCase name}}';`,
                    },
                    {
                        type: 'append',
                        path: 'src/helpers/firestore/index.js',
                        pattern: `/* PLOP_INJECT_EXPORT */`,
                        template: `\t{{camelCase name}},`,
                    }
                ]
			}

			return action;
		},
    })

    plop.setGenerator('auth', {
        description: 'Create firebase authentication hooks',
        prompts: [
            {
                type: 'confirm',
                name: 'authhooks',
                message: 'Do you want to create the authentication hooks?',
                validate: requireField('authhooks')
            },
        ],
        actions: (data) => {
            let action = []
			if (data.authhooks) {
				action = [
                    {
                        type: 'add',
                        path: 'src/helpers/README.md',
                        templateFile: 'plop-templates/Helper/helper.js.hbs',
                        skipIfExists: true,
                    },
                    {
                        type: 'add',
                        path: 'src/helpers/auth/index.js',
                        templateFile: 'plop-templates/AuthHook/Auth.js.hbs',
                    }
                ]
            }
            
			return action;
		},
    })
}
