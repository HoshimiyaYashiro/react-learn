import "@arco-design/web-react/dist/css/arco.css";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children;
}