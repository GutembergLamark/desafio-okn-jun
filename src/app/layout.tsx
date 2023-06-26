import "@/assets/sass/main.scss";

export const metadata = {
  title: "Newsletter",
  description: "Formulário de inscrição para newsletter",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="">{children}</body>
    </html>
  );
}
