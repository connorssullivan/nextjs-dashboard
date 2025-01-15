import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import {InvoiceSkeleton, CardSkeleton} from '@/app/ui/skeletons'
import CardWrapper from '@/app/ui/dashboard/cards';
 
export default async function Page() {
  //const revenue = await fetchRevenue();
  //const latestInvoices = await fetchLatestInvoices();
  //const totalPaidInvoices = await (await fetchCardData()).totalPaidInvoices;
  //const totalPendingInvoices = await (await fetchCardData()).totalPendingInvoices;
  //const numberOfInvoices = await (await fetchCardData()).numberOfInvoices;
  //const numberOfCustomers = await (await fetchCardData()).numberOfCustomers;
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<InvoiceSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}