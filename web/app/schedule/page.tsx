// ... (other imports)
'use client';

import { UiLayout } from '@/components/ui/ui-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { Provider } from '../provider';
import GetTicket from '@/components/getTicket'

const Schedule: React.FC = () => {
  return (
    <Provider>
      <ClusterProvider>
        <SolanaProvider>
          <UiLayout>
            <div className="flex flex-col bg-gradient-to-br from-red-300 to-red-900">
              <div className="flex flex-col h-screen w-screen">
                <GetTicket></GetTicket>
              </div>
            </div>
          </UiLayout>
        </SolanaProvider>
      </ClusterProvider>
    </Provider>
  );
};

export default Schedule;
