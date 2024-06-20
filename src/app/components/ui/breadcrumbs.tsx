'use client'

import { Breadcrumb, ConfigProvider } from 'antd';
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House } from 'phosphor-react';

export const BreadcrumbComponent = ({ title }: { title?: string }) => {
  const currentRoute = usePathname();
  const breadPieces = currentRoute.substring(1).split('/');

  const items = [
    {
      path: '/',
      title: <House size={20} />,
    },
    ...breadPieces.map((item, index) => {
      const isUUID = /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i.test(item);
      return {
        path: `/${breadPieces.slice(0, index + 1).join('/').toLowerCase()}`,
        title: isUUID ? title : item.charAt(0).toUpperCase() + item.slice(1),
      };
    }),
  ];

  type RouteType = Partial<BreadcrumbItemType & BreadcrumbSeparatorType>;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  function itemRender(route: RouteType, params: any, routes: RouteType[], paths: string[]) {
    const isLast = route.path === routes[routes.length - 1].path;
    return isLast ? (
      <span>{route.title}</span>
    ) : (
      <Link href={route.path as string}>{route.title}</Link>
    );
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            lastItemColor: '#006876',
            linkColor: '#333',
            separatorColor: '#333',
          }
        }
      }}
    >
      <Breadcrumb className='p-2' itemRender={itemRender} items={items} separator=" / " />
    </ConfigProvider>
  );
}
