const usersResponse = [
    {
        id: '4dfdaa9e-3567-47cc-ad36-6bad65e402dc',
        roles: [{ id: 2, name: 'Role 2' }],
        name: 'Olga Harvey',
    },
    {
        id: '6ee40587-fecb-4d51-a0af-1c0f8e203f79',
        roles: [{ id: 2, name: 'Role 2' }],
        name: 'Freda Emerson',
    },
    {
        id: 'aeb7c8a6-426d-4dad-84d5-0373ffb362cd',
        roles: [{ id: 2, name: 'Role 2' }],
        name: 'Jefferson Atkinson',
    },
    {
        id: '9a98d697-2859-4f33-9b5e-f438b70bc25c',
        roles: [
            { id: 2, name: 'Role 2' },
            { id: 1, name: 'Role 1' },
        ],
        name: 'Pat Black',
    },
    {
        id: '8af12b55-50dd-46d9-a70f-85d2495474d2',
        roles: [{ id: 1, name: 'Role 1' }],
        name: 'Sandra Rice',
    },
    {
        id: '4b54451d-f15b-417e-864c-be89c059ac03',
        roles: [{ id: 6, name: 'Role 6' }],
        name: 'Osborne Beard',
    },
    {
        id: '82f60508-bee1-4154-a4e5-267ac39af0b7',
        roles: [
            { id: 2, name: 'Role 2' },
            { id: 3, name: 'Role 3' },
            { id: 6, name: 'Role 6' },
        ],
        name: 'Bauer Mcconnell',
    },
];

const rolesResponse = [
    { id: 1, name: 'Role 1', skills: [{ id: 1, name: 'Skill 1' }] },
    { id: 2, name: 'Role 2', skills: [{ id: 1, name: 'Skill 1' }] },
    { id: 3, name: 'Role 3', skills: [{ id: 1, name: 'Skill 1' }] },
    {
        id: 4,
        name: 'Role 4',
        skills: [
            { id: 5, name: 'Skill 5' },
            { id: 3, name: 'Skill 3' },
        ],
    },
    { id: 5, name: 'Role 5', skills: [{ id: 1, name: 'Skill 1' }] },
    {
        id: 6,
        name: 'Role 6',
        skills: [
            { id: 1, name: 'Skill 1' },
            { id: 5, name: 'Skill 5' },
            { id: 4, name: 'Skill 4' },
        ],
    },
    { id: 7, name: 'Role 7', skills: [{ id: 1, name: 'Skill 1' }] },
];

const skillsResponse = [
    { id: 1, name: 'Skill 1' },
    { id: 2, name: 'Skill 2' },
    { id: 3, name: 'Skill 3' },
    { id: 4, name: 'Skill 4' },
    { id: 5, name: 'Skill 5' },
    { id: 6, name: 'Skill 6' },
    { id: 7, name: 'Skill 7' },
];

// add the code below
module.exports = { usersResponse, rolesResponse, skillsResponse };
