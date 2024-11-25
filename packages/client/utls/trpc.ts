import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@warbler/shared';
import type { CreateTRPCClientOptions } from '@trpc/client';
import type { TRPCClient as TRPCClientType } from '@trpc/client';

export type TRPCClient = ReturnType<typeof createTRPCReact<AppRouter>>;

export const trpc: TRPCClient = createTRPCReact<AppRouter>();

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '';
  return `http://localhost:3000`;
};

export const trpcClientConfig: CreateTRPCClientOptions<AppRouter> = {
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/trpc`,
    }),
  ],
};

export const trpcClient: TRPCClientType<AppRouter> = trpc.createClient(trpcClientConfig);
