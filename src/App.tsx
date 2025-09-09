import { useEffect, useState } from 'react';
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import './App.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { Text, Button, Container, createTheme, MantineProvider, Title, LoadingOverlay, Group } from '@mantine/core';
import { notifications, Notifications } from '@mantine/notifications';

function App() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const theme = createTheme({
    headings: {
      sizes: {
        h1: { fontSize: '16px' },
        h2: { fontSize: '14px' },
        h3: { fontSize: '14px' },
      },
    },
  });

  const fetchData = () => {
    setMsg('');
    setLoading(true);

    setTimeout(() => {
      setMsg('foo bar');

      notifications.show({
        title: 'Loaded',
        message: 'Hello, world!',
      });

      setLoading(false);
    }, 2000);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-center" />

      <Container>
        <Title>A template of Vite + React + TS + Mantine UI</Title>

        <LoadingOverlay visible={loading} overlayProps={{ blur: 2 }} />

        <Group justify="center" gap="sm" mt="md">
          {!loading && msg && <Text ta="center">{msg}</Text>}

          <Button variant="outline" size="compact-xs" component="a" onClick={fetchData}>
            Load
          </Button>
        </Group>
      </Container>
    </MantineProvider>
  );
}

export default App;
