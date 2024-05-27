import ApolloProvider from './ApolloProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
