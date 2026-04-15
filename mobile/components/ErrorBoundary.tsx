import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface State {
  hasError: boolean;
  error: Error | null;
}

interface Props {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Something went wrong</Text>
          <Text style={styles.message}>{this.state.error?.message}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ hasError: false, error: null })}
          >
            <Text style={styles.buttonText}>Try again</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#1a1a1a',
    alignItems: 'center', justifyContent: 'center', padding: 24,
  },
  title: { fontSize: 18, fontWeight: '600', color: '#f0f0f0', marginBottom: 8 },
  message: { fontSize: 14, color: '#888888', marginBottom: 24, textAlign: 'center' },
  button: {
    borderWidth: 1, borderColor: '#333333', borderRadius: 8,
    paddingVertical: 10, paddingHorizontal: 24,
  },
  buttonText: { color: '#f0f0f0', fontSize: 15 },
});
