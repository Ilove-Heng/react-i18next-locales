type FolderNode = {
    name: string;
    nodes?: FolderNode[];
  };

export const nodes: FolderNode[] = [
    {
      name: 'Home',
      nodes: [
        {
          name: 'Movies',
          nodes: [
            {
              name: 'Action',
              nodes: [
                {
                  name: '2000s',
                  nodes: [
                    { name: 'Gladiator.ts' },
                    { name: 'The-Dark-Knight.ts' },
                  ],
                },
                { name: '2010s', nodes: [] },
              ],
            },
            {
              name: 'Comedy',
              nodes: [{ name: '2000s', nodes: [{ name: 'Superbad.ts' }] }],
            },
            {
              name: 'Drama',
              nodes: [
                { name: '2000s', nodes: [{ name: 'American-Beauty.tsx' }] },
              ],
            },
          ],
        },
        {
          name: 'Music',
          nodes: [
            { name: 'Rock', nodes: [] },
            { name: 'Classical', nodes: [] },
          ],
        },
        { name: 'Pictures', nodes: [] },
        {
          name: 'Documents',
          nodes: [],
        },
        { name: 'passwords.ts' },
      ],
    },
  ];