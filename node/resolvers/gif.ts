// node/resolvers/giphy.ts
export const gif = async (
  _: any,
  { term }: { term: string },
  { clients: { giphy }}: Context
  ) => (await giphy.translate(term)).data