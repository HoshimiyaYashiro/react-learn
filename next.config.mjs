/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['antd'],
};
 
export default withNextIntl(nextConfig);