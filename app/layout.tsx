// import AuthOverlay from "./components/AuthOverlay";
// import UserProvider from "./context/user";
// import "./globals.css";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "TikTok Clone",
//   description: "TikTok Clone",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <UserProvider>
//         <body>
//           <AuthOverlay />
//           {children}
//         </body>
//       </UserProvider>

//     </html>
//   );
// }

import UserProvider from "./context/user";
// import AllOverlays from "@/app/components/AllOverlays";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Clone",
  description: "TikTok Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
