/* eslint-disable @typescript-eslint/no-unused-vars */
import DashboardFeature from '@/components/dashboard/dashboard-feature';
import Navbar from '@/components/navbar/Navbar';
import { UiLayout } from '@/components/ui/ui-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { Provider } from './provider';
import Home from '@/components/home'

// import { Button } from '@daisyui/react';

export default function Page() {

  return (
    <Provider>
      <ClusterProvider>
        <SolanaProvider>
          <UiLayout>
          <div className="flex flex-col bg-gradient-to-br from-red-300 to-red-900">
          <div className="flex flex-col h-screen w-screen">

            <Home></Home>
          </div>
          </div>
          </UiLayout>
        </SolanaProvider>
      </ClusterProvider>
    </Provider>

  );
}
